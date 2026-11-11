# CyberBodha foundation map

**Brand:** CyberBodha  
**Tagline:** Learn. Practice. Simulate. Certify.

This is the Phase 1 sitemap and architecture blueprint. Only `/`, `/student`, `/instructor`, and `/admin` are implemented now. Future destinations below are planned, not active pages; they are listed to guide incremental delivery rather than represented by shallow placeholders.

## Sitemap and route hierarchy

```text
/
  Academy home
  #programs · #catalog · #cyber-range · #training · #universities · #about · #contact
  /programs                         Planned public program overview
  /courses                          Planned searchable course catalog
  /courses/$courseId                Planned course detail
  /cyber-range                      Planned range overview
  /corporate-training               Planned enterprise training overview
  /university-programs               Planned academic partnerships overview
  /about                            Planned organization story
  /contact                          Planned contact page
  /login                            Planned sign-in, once identity is configured
  /register                         Planned account creation, once identity is configured

/student                            Implemented dashboard shell and overview
  /student/learning                 Planned learning overview
  /student/courses                  Planned enrolled courses
  /student/labs                     Planned virtual labs
  /student/cyber-range              Planned practice scenarios
  /student/assessments              Planned assessments
  /student/examinations             Planned examinations
  /student/certificates              Planned certifications
  /student/achievements              Planned achievements
  /student/analytics                 Planned personal analytics
  /student/profile                   Planned profile and preferences

/instructor                         Implemented dashboard shell and overview
  /instructor/courses                Planned course management
  /instructor/curriculum             Planned curriculum builder
  /instructor/lessons                Planned lesson management
  /instructor/labs                   Planned lab authoring
  /instructor/assessments             Planned assessment management
  /instructor/students                Planned learner roster
  /instructor/batches                 Planned cohort management
  /instructor/assignments             Planned submissions and feedback
  /instructor/reports                 Planned teaching reports

/admin                              Implemented dashboard shell and overview
  /admin/users                       Planned account administration
  /admin/courses                     Planned course administration
  /admin/enrollments                 Planned enrollment operations
  /admin/instructors                 Planned instructor directory
  /admin/organizations               Planned organization management
  /admin/assessments                 Planned assessment oversight
  /admin/certificates                Planned certification oversight
  /admin/analytics                   Planned organization analytics
  /admin/settings                    Planned workspace settings

/enterprise                         Future enterprise landing/workspace
/enterprise/people                   Future team learning administration
/enterprise/analytics               Future organization reporting
```

`/` is the public academy. Portal routes are separate audience entry points. Authentication and authorization will wrap role routes only when real identity and permissions are introduced; the current role selector is a demonstration, not an access-control boundary.

## Layout architecture

- **Academy shell:** branded public header, responsive navigation, content sections, portal entry links, and footer.
- **Portal shell:** shared top bar, role-specific side navigation, workspace context, mobile drawer, and main content region.
- **Dashboard view:** role-specific overview heading, three summary indicators, current focus/progress area, activity list, and next action panel.
- **Shared UI:** existing design-system buttons and progress indicator, plus brand mark, stat panel, role navigation item, activity row, and dashboard section patterns.

## Role navigation

| Student | Instructor | Admin |
| --- | --- | --- |
| Dashboard | Dashboard | Dashboard |
| My learning | Courses | Users |
| My courses | Curriculum | Courses |
| Virtual labs | Lessons | Enrollments |
| Cyber range | Labs | Instructors |
| Assessments | Assessments | Organizations |
| Examinations | Students | Assessments |
| Certificates | Batches | Certificates |
| Achievements | Assignments | Analytics |
| Analytics | Reports | Settings |
| Profile |  |  |

The navigation configuration is keyed by role and shared by the portal shell. Route-level visibility is presentation only until server-backed permissions exist.

## Mock-data contracts

Dashboard examples currently use a static, illustrative shape:

```ts
type SummaryMetric = { label: string; value: string; detail: string; icon: LucideIcon };
type ActivityItem = { title: string; kind: string; value: string; accent: string };
type PortalDashboardData = {
  role: string;
  greeting: string;
  subheading: string;
  stats: SummaryMetric[];
  focusTitle: string;
  focusName: string;
  focusMeta: string;
  progress: number;
  nextTitle: string;
  nextName: string;
  nextMeta: string;
  roster: ActivityItem[];
};
```

Future domain data can be introduced behind these view shapes: `User`, `Organization`, `Course`, `Enrollment`, `LearningPath`, `Lesson`, `Lab`, `RangeScenario`, `Assessment`, `Submission`, `Certificate`, and `LearningEvent`. Values on the current dashboards are sample content, not live learners, activity, or organizational records.

## Design tokens

Semantic CSS tokens define the neutral surfaces, high-contrast navy workspace, red action color, and cyan technical accent. Typography uses DM Sans for interface text and Barlow Condensed for display use. Components consume theme tokens rather than owning ad hoc colors; the portal and academy share one accessible token system.

## Out of scope for this phase

No real login, account registration, database, external integrations, course enrollment, lab execution, cyber-range execution, examinations, certification issuance, AI tutoring, or access-control enforcement is connected.