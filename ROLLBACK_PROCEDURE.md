# CyberBodha — Production Rollback Procedure

This document specifies the standard operating procedure for rolling back Cloudflare deployments in the event of an outage, catastrophic SSR regression, or unexpected production defect.

---

## 1. Instant Cloudflare Edge Rollback (<30 Seconds)

Cloudflare Workers retains immutable historical deployments. You can roll back production traffic to any prior healthy deployment instantly without rebuilding or re-running CI/CD.

### Method A: Via Cloudflare Dashboard (Recommended for Emergency)
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Go to **Workers & Pages** → click on `cyberbodha-learning-academy`.
3. Select the **Deployments** tab.
4. Locate the last known good deployment from the deployment history list.
5. Click the three dots (`...`) next to that deployment → select **Rollback to this deployment**.
6. Enter a brief description (e.g., `Emergency rollback to previous stable version`).
7. Click **Confirm Rollback**.
8. Cloudflare immediately switches 100% of global edge traffic back to that version (<5 seconds propagation).

### Method B: Via Wrangler CLI
```bash
# 1. List recent deployments to identify the stable deployment ID
npx wrangler deployments list

# Example output:
# Created:     2026-11-11T18:00:00Z
# ID:          9a8b7c6d-1234-5678-9abc-def012345678
# Version:     3 (Active)
# 
# Created:     2026-11-11T17:30:00Z
# ID:          1a2b3c4d-5678-9abc-def0-123456789abc
# Version:     2

# 2. Roll back to the target deployment ID
npx wrangler rollback 1a2b3c4d-5678-9abc-def0-123456789abc
```

---

## 2. GitHub Actions & Repository Rollback (Lovable-Safe)

> [!IMPORTANT]
> **Lovable Git Rule:** Never use `git push --force` or `git reset --hard` on `main`.
> Force pushing rewrites published history and breaks synchronization with Lovable, potentially corrupting project tracking.
> Always use `git revert` to generate a new forward commit.

### Procedure:
```bash
# 1. Fetch latest main branch
git checkout main
git pull origin main

# 2. Identify the commit introducing the defect
git log --oneline -n 5

# 3. Create a clean revert commit
git revert <bad-commit-sha> -m 1   # (omit -m 1 if it is not a merge commit)

# 4. Run local verification
bun install --frozen-lockfile
bun x tsc --noEmit
bun run test
bun run build

# 5. Push the revert commit to main
git push origin main
```
The automated GitHub Actions workflow will trigger, validate the build, and redeploy the verified stable state cleanly.

---

## 3. DNS & Redirect Emergency Rollback

If a domain routing issue or canonical redirect loop occurs:

1. In Cloudflare Dashboard, go to **Rules** → **Redirect Rules**.
2. Toggle the `Canonical Redirect www to Apex` rule to **Disabled**.
3. Clear Cloudflare Edge Cache:
   - Go to **Caching** → **Configuration** → click **Purge Everything**.
4. Confirm resolution by testing with curl:
   ```bash
   curl -Iv https://cyberbodha.com
   curl -Iv https://www.cyberbodha.com
   ```

---

## 4. Post-Rollback Checklist

- [ ] Confirm `https://cyberbodha.com` returns HTTP 200 and loads Academy Home.
- [ ] Confirm `https://www.cyberbodha.com` redirects with HTTP 301.
- [ ] Inspect live Worker logs: `npx wrangler tail --name cyberbodha-learning-academy`.
- [ ] Verify Lovable project editor remains in sync without sync errors.
- [ ] Document root cause and log in incident post-mortem.
