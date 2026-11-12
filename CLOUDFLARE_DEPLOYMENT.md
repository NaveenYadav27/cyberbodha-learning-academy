# CyberBodha — Cloudflare Deployment Guide

This guide provides complete instructions for deploying the CyberBodha Learning Academy application to Cloudflare Workers using either automated GitHub Actions CI/CD or the Wrangler CLI.

---

## 1. Prerequisites

Before deploying, ensure you have:
1. A **Cloudflare Account** with an active zone for `cyberbodha.com`.
2. A **Cloudflare API Token** with the following permissions:
   - `Account` → `Workers Scripts` → `Edit`
   - `Account` → `Account Settings` → `Read`
   - `Zone` → `Workers Routes` → `Edit`
   - `Zone` → `DNS` → `Edit` (for automatic custom domain DNS records)
3. Your **Cloudflare Account ID** (found on the right sidebar of the Cloudflare Dashboard overview page).

---

## 2. Automated GitHub Actions Deployment (Recommended)

The repository includes a production-grade CI/CD workflow at `.github/workflows/deploy.yml`.

### Step 1: Add GitHub Secrets
Navigate to your GitHub repository:
**Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

| Secret Name | Value | Purpose |
| :--- | :--- | :--- |
| `CLOUDFLARE_API_TOKEN` | `<your-cloudflare-api-token>` | Authenticates Wrangler deployment |
| `CLOUDFLARE_ACCOUNT_ID` | `<your-cloudflare-account-id>` | Targets your Cloudflare account |

### Step 2: Trigger Deployment
- **Automatic:** Any commit pushed to the `main` branch automatically initiates the workflow:
  1. Installs dependencies using `bun install --frozen-lockfile`.
  2. Runs TypeScript type checking (`bun x tsc --noEmit`).
  3. Executes Vitest automated unit and redirect tests (`bun run test`).
  4. Builds the production bundle using `bun run build`.
  5. Verifies deployment artifacts exist (`.output/server/index.mjs`, `.output/server/wrangler.json`, `.output/public`).
  6. Deploys the application directly to Cloudflare Workers via `cloudflare/wrangler-action@v3`.
- **Manual:** Navigate to **Actions** tab → **Deploy CyberBodha to Cloudflare Workers** → **Run workflow**.

---

## 3. Manual Deployment via Wrangler CLI

If you prefer deploying directly from your local development workstation or terminal:

### Step 1: Install Dependencies
```bash
bun install --frozen-lockfile
```

### Step 2: Run Verification Checks
Ensure code passes all type checks and test suites:
```bash
bun x tsc --noEmit
bun run test
```

### Step 3: Build the Application
```bash
bun run build
```
This generates the Cloudflare Worker module in `.output/server` and static assets in `.output/public`.

### Step 4: Authenticate Wrangler
```bash
# Option A: Interactive login in browser
npx wrangler login

# Option B: Set environment variables
export CLOUDFLARE_API_TOKEN="<your-cloudflare-api-token>"
export CLOUDFLARE_ACCOUNT_ID="<your-cloudflare-account-id>"
```

### Step 5: Deploy
Deploy using the pre-configured deployment artifact:
```bash
npx wrangler deploy
```
*(Wrangler will automatically read `.wrangler/deploy/config.json` and deploy `.output/server/index.mjs` alongside the `.output/public` assets directory).*

---

## 4. Cloudflare Dashboard Manual Configuration

If creating or inspecting the Worker manually in the Cloudflare Dashboard:

1. Navigate to **Workers & Pages** → **Overview**.
2. Locate or create the worker: `cyberbodha-learning-academy`.
3. Go to **Settings** → **Runtime**:
   - **Compatibility Date:** Set to `2026-11-11`.
   - **Compatibility Flags:** Add `nodejs_compat`.
4. Go to **Settings** → **Domains & Routes**:
   - Click **Add** → **Custom Domain**.
   - Add `cyberbodha.com`.
   - Add `www.cyberbodha.com`.
   - Cloudflare will provision SSL/TLS certificates and add the appropriate DNS CNAME/A records automatically.
