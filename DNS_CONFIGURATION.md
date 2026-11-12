# CyberBodha — DNS & Domain Configuration Specification

## 1. Domain Architecture

| Role | Hostname | Destination / Behavior | Status Code |
| :--- | :--- | :--- | :--- |
| **Primary Domain** | `cyberbodha.com` | CyberBodha Cloudflare Worker | `200 OK` |
| **Secondary Domain** | `www.cyberbodha.com` | Canonical Redirect to `https://cyberbodha.com` | `301 Moved Permanently` |

---

## 2. Strict DNS Preservation Rules

> [!CAUTION]
> When configuring Cloudflare DNS, **never** modify, overwrite, or delete existing email delivery records or external services:
> - **MX Records:** Mail exchange records (e.g. Google Workspace, Microsoft 365, Zoho Mail).
> - **SPF Records:** `TXT` records beginning with `v=spf1`.
> - **DKIM Records:** `TXT` or `CNAME` records matching `*._domainkey.*`.
> - **DMARC Records:** `TXT` records matching `_dmarc.cyberbodha.com`.
> - **Existing Nameservers:** Never change or delete authoritative nameservers without explicit registrar verification.

### Baseline Mail Record Audit (Pre-Configuration Check)
Run the following commands before applying changes to verify existing email services:
```bash
# Check existing MX records
nslookup -type=MX cyberbodha.com

# Check SPF records
nslookup -type=TXT cyberbodha.com

# Check DMARC records
nslookup -type=TXT _dmarc.cyberbodha.com
```

---

## 3. Configuring Custom Domains in Cloudflare Workers

Cloudflare Workers Custom Domains automatically configure DNS and manage edge TLS certificates without disrupting existing MX/TXT records.

### Method A: Via Wrangler Configuration (Automated)
The repository's [wrangler.jsonc](file:///c:/Users/shadowxlab/OneDrive/cyberbodha/cyberbodha-website/wrangler.jsonc) specifies:
```jsonc
{
  "routes": [
    { "pattern": "cyberbodha.com", "custom_domain": true },
    { "pattern": "www.cyberbodha.com", "custom_domain": true }
  ]
}
```
When `npx wrangler deploy` runs, Cloudflare automatically provisions the custom domain bindings and proxy records.

### Method B: Via Cloudflare Dashboard
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Select your zone (`cyberbodha.com`).
3. In the sidebar, navigate to **Workers & Pages** → click on `cyberbodha-learning-academy`.
4. Go to the **Settings** tab → **Domains & Routes**.
5. Click **Add** → choose **Custom Domain**:
   - Enter `cyberbodha.com` → Click **Add Custom Domain**.
   - Enter `www.cyberbodha.com` → Click **Add Custom Domain**.
6. Cloudflare will display status as `Active` once DNS verification completes (typically <2 minutes).

---

## 4. Canonical 301 Redirect Configuration

To ensure optimal SEO and avoid duplicate indexing, `www.cyberbodha.com` MUST permanently redirect to `cyberbodha.com` while preserving all paths and query parameters.

### Configuration via Cloudflare Redirect Rules (Recommended)
Cloudflare's **Single Redirects** engine processes redirects at the global edge before Worker invocation, minimizing latency and Worker invocations.

1. In the Cloudflare Dashboard, select the `cyberbodha.com` zone.
2. Navigate to **Rules** → **Redirect Rules** (or **Page Rules**).
3. Click **Create rule**.
4. Enter the rule parameters:
   - **Rule Name:** `Canonical Redirect www to Apex`
   - **When incoming requests match:**
     - Select **Custom filter expression**
     - **Field:** `Hostname` (`http.host`)
     - **Operator:** `equals`
     - **Value:** `www.cyberbodha.com`
   - **Then... (URL Redirect):**
     - **Type:** `Dynamic`
     - **Expression:** `concat("https://cyberbodha.com", raw.http.request.uri)`
     - **Status code:** `301` (Moved Permanently)
     - **Preserve query string:** Checked (handled automatically by `raw.http.request.uri`)
5. Click **Deploy**.

```
Expression Preview:
(http.host eq "www.cyberbodha.com")
Target:
concat("https://cyberbodha.com", raw.http.request.uri) [301]
```

### In-Worker Redirection Fallback
As an additional safety measure, [src/server.ts](file:///c:/Users/shadowxlab/OneDrive/cyberbodha/cyberbodha-website/src/server.ts) includes built-in edge redirect logic:
```typescript
const url = new URL(request.url);
if (url.hostname === "www.cyberbodha.com") {
  url.hostname = "cyberbodha.com";
  url.protocol = "https:";
  return Response.redirect(url.toString(), 301);
}
```
This guarantees that even if Cloudflare edge rules are temporarily bypassed or misconfigured, the application worker will enforce the canonical 301 redirect.

### Loop Prevention Verification
- Requests to `https://www.cyberbodha.com/student?tab=labs` redirect to `https://cyberbodha.com/student?tab=labs`.
- Requests to `https://cyberbodha.com/student?tab=labs` do not match the redirect condition and proceed directly to SSR rendering.
- No recursive or circular redirects occur.
