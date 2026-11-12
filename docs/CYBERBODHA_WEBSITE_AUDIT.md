# CyberBodha Website & Course Catalog Audit

**Audit Date:** 2026-11-12  
**Target Repository:** `NaveenYadav27/cyberbodha-learning-academy` (`main`)  
**Production Host:** `https://cyberbodha.com` | `https://www.cyberbodha.com`

---

## 1. Executive Summary

This audit establishes the baseline of the CyberBodha learning academy web application ahead of the Website & Course Catalog Master Implementation.

Currently, CyberBodha consists of a single-page landing site at `/` with anchor links (`#programs`, `#catalog`, `#cyber-range`, `#training`, `#universities`, `#about`, `#contact`) and 3 demonstration portal shells (`/student`, `/instructor`, `/admin`). There is currently no dedicated course catalog, no course detail pages, no program deep-dive routes, no dedicated cyber range showcase page, and no functional course enquiry/enrollment mechanism.

The implementation phase will expand the public experience into a multi-page cybersecurity academy with centralized typed course data, rich course detail pages, program landing pages, a cyber range showcase, institutional/corporate pages, and an accessible, validated course enquiry experience.

---

## 2. Technology Stack & Runtime Compatibility

| Layer | Technology | Status / Compatibility |
| :--- | :--- | :--- |
| **Framework** | TanStack Start (v1.168.0) + React 19 | Server-Side Rendering (SSR) active |
| **Bundler & Dev Server** | Vite 8.1.5 + `@lovable.dev/vite-tanstack-config` | Zero config issues; fast HMR and client/SSR builds |
| **Server Engine** | Nitro (v3.0.260603-beta) | Cloudflare Worker preset (`cloudflare-module`) |
| **Edge Host** | Cloudflare Workers | Routes `cyberbodha.com/*` & `www.cyberbodha.com/*` |
| **Styling** | Tailwind CSS v4 + `src/styles.css` custom design system | Responsive typography and utility classes |
| **Component Primitives** | Radix UI / shadcn-compatible in `src/components/ui` | Full suite (Accordion, Dialog, Sheet, Tabs, Input, Select, etc.) |
| **Icons** | Lucide React | Clean, scalable modern icons |
| **Package Manager** | Bun (v1.4.4) | Frozen lockfile respected (`bun.lock`) |

---

## 3. Route Inventory & Gaps

### Existing Active Routes
- `/`: Public landing page with hero, 3 generic overview cards, portal links, and trust bar.
- `/student`: Illustrative student portal dashboard shell.
- `/instructor`: Illustrative instructor portal dashboard shell.
- `/admin`: Illustrative admin portal dashboard shell.

### Gaps to Implement
1. **Course Catalog (`/courses` & `/course-catalog` redirect):**
   - Search by course title and skills.
   - Filter by category, difficulty level, and learning format.
   - Reusable informative course cards.
2. **Flagship Course Detail Pages (`/courses/$slug`):**
   - Dynamic route for the 6 flagship courses:
     1. `soc-analyst-professional`
     2. `ceh-v13-ai-ethical-hacking`
     3. `vapt-professional`
     4. `siem-engineering-operations`
     5. `linux-networking-cybersecurity`
     6. `cybersecurity-career-accelerator`
   - Complete curricula, module accordions, lab highlights, tools/technologies, FAQs, and sticky enrollment/enquiry action cards.
3. **Structured Program Landing Pages:**
   - `/programs`: Program catalog overview and pathways.
   - `/programs/soc-analyst`: SOC & Blue Team career program.
   - `/programs/ethical-hacking`: Ethical Hacking & Offensive Security program.
   - `/programs/vapt`: Vulnerability Assessment & Penetration Testing program.
   - `/programs/cybersecurity-career`: Foundational-to-job-readiness accelerator.
   - `/programs/cloud-security`: Cloud security & DevSecOps program.
4. **Dedicated Experience Pages:**
   - `/cyber-range`: Public showcase of simulated SOC, SIEM, VAPT, and Network labs.
   - `/corporate-training`: Enterprise and team upskilling solutions with consultation enquiry.
   - `/university-programs`: Academic partnerships, syllabus alignment, and university cyber labs.
   - `/about`: Academy mission, methodology, and values.
   - `/contact`: Dedicated contact and admissions enquiry page.
5. **Course Enquiry & Modal UX:**
   - Functional client-validated enquiry drawer/modal accessible from all course pages and CTAs.

---

## 4. Reusable Components & Design System Assets

- **Installed in `src/components/ui`:**
  - `accordion.tsx` (for course curriculum modules and FAQs)
  - `badge.tsx` (for course difficulty levels and category pills)
  - `breadcrumb.tsx` (for hierarchical course and program navigation)
  - `button.tsx` (primary, secondary, outline, ghost variants)
  - `card.tsx` (structured content containers)
  - `dialog.tsx` / `sheet.tsx` (enquiry modal / slide-over drawers)
  - `input.tsx`, `textarea.tsx`, `select.tsx` (enquiry form inputs)
  - `tabs.tsx` (for multi-audience and program filtering)
- **Media Assets:**
  - `src/assets/cyberbodha-logo.png` (high-res official CyberBodha emblem)
  - `src/assets/cyberbodha-learning-lab.jpg` (hero cyber range photo)

---

## 5. Course Data Architecture Baseline

Currently, course data is absent from `src/lib/cyberbodha-data.ts`. The codebase contains only navigation links and dashboard mock stats.
- A central typed course catalog data model (`src/data/courses.ts` and `src/data/programs.ts`) will be created to maintain a single source of truth for all courses, programs, learning pathways, modules, tools, and FAQs.

---

## 6. Baseline Verification

- **TypeScript Typecheck:** `bun x tsc --noEmit` exits with code 0.
- **Unit Tests:** Vitest suite (6 tests across routing and server redirects) passing.
- **Production Build:** `bun run build` generates clean Nitro Cloudflare Worker bundle.
- **Live Deployment:** Cloudflare Worker running at `cyberbodha.com` with 301 canonical redirect for `www.cyberbodha.com`.

All subsequent phases will build upon this audited baseline without rewriting core infrastructure.
