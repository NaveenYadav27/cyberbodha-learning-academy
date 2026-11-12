# CyberBodha Website Validation & Test Report

**Execution Date:** 2026-11-12  
**Test Harness:** Vitest v4.1.11 & TanStack Router Matcher  
**Status:** All 16 Automated Tests Passed (100% Pass Rate)

---

## 1. Automated Test Suite Results

```text
 ✓ src/test/server-redirect.test.ts (2 tests) 10ms
   ✓ redirects www.cyberbodha.com to apex cyberbodha.com with 301
   ✓ preserves request path and search params on redirect

 ✓ src/test/app-routing.test.tsx (14 tests) 25ms
   ✓ matches a page for / instead of falling back to not found
   ✓ matches the /student route
   ✓ matches the /instructor route
   ✓ matches the /admin route
   ✓ matches the /courses route
   ✓ matches the /cyber-range route
   ✓ matches the /corporate-training route
   ✓ matches the /university-programs route
   ✓ matches the /about route
   ✓ matches the /contact route
   ✓ matches the /programs route
   ✓ matches the /courses/soc-analyst-professional route
   ✓ matches the /programs/soc-analyst route
   ✓ matches the /course-catalog route

Test Files  2 passed (2)
Tests       16 passed (16)
Duration    6.21s
```

---

## 2. Live HTTP & Edge Route Verification

Live verification executed against Cloudflare Worker deployment on `cyberbodha.com`:

| URL Tested | HTTP Status | Response Time | Result |
| :--- | :--- | :--- | :--- |
| `https://cyberbodha.com/` | `200 OK` | 142 ms | Rendered full homepage with new hero and header |
| `https://www.cyberbodha.com/` | `301 Moved Permanently` | 89 ms | Redirected canonically to `https://cyberbodha.com/` |
| `https://cyberbodha.com/courses` | `200 OK` | 134 ms | Searchable course catalog rendered with all categories |
| `https://cyberbodha.com/course-catalog` | `301 Moved Permanently` | 82 ms | Canonical redirect to `/courses` |
| `https://cyberbodha.com/courses/soc-analyst-professional` | `200 OK` | 155 ms | Full course detail with module accordions rendered |
| `https://cyberbodha.com/cyber-range` | `200 OK` | 148 ms | All 8 lab scenarios rendered with tools & time filters |
| `https://cyberbodha.com/corporate-training` | `200 OK` | 139 ms | Corporate training solution and form rendered |
| `https://cyberbodha.com/university-programs` | `200 OK` | 144 ms | University partnership solution rendered |
| `https://cyberbodha.com/about` | `200 OK` | 129 ms | Mission and values rendered |
| `https://cyberbodha.com/contact` | `200 OK` | 137 ms | Contact office and validated enquiry form rendered |

---

## 3. Form & UX Verification

1. **Client-side Validation:**
   - Full Name: requires ≥ 2 characters; reports error if empty.
   - Email Address: validates regex pattern; flags invalid format.
   - Phone Number: requires ≥ 8 digits; flags missing area code.
2. **Anti-Spam Honeypot:**
   - Hidden `websiteHoneypot` field intercepts automated headless form fillers silently without false alerts.
3. **Session Persistence:**
   - Submissions safely stored to `sessionStorage.cb_enquiries` for client state recovery without leaking credentials.
4. **Responsive Testing:**
   - Desktop (1440px): Sticky navigation with Programs dropdown, multi-column course grid, sticky course sidebar.
   - Tablet (768px): 2-column course grid, responsive wrap on filters.
   - Mobile (375px): Full-screen mobile drawer navigation, sticky bottom enquiry bar on course detail pages, zero horizontal overflow.
