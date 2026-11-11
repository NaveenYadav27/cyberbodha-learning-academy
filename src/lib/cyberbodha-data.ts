import {
  Activity,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  FileBadge,
  Gauge,
  GraduationCap,
  Layers3,
  Network,
  Settings2,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type PortalRole = "student" | "instructor" | "admin";

type NavigationItem = { label: string; icon: LucideIcon; to: string };

export const portalNavigation: Record<PortalRole, NavigationItem[]> = {
  student: [
    { label: "Dashboard", icon: Gauge, to: "/student" },
    { label: "My learning", icon: BookOpen, to: "/student" },
    { label: "My courses", icon: Layers3, to: "/student" },
    { label: "Virtual labs", icon: Network, to: "/student" },
    { label: "Cyber range", icon: ShieldCheck, to: "/student" },
    { label: "Assessments", icon: ClipboardCheck, to: "/student" },
    { label: "Examinations", icon: ClipboardCheck, to: "/student" },
    { label: "Certificates", icon: FileBadge, to: "/student" },
    { label: "Achievements", icon: Activity, to: "/student" },
    { label: "Analytics", icon: ChartNoAxesColumnIncreasing, to: "/student" },
  ],
  instructor: [
    { label: "Dashboard", icon: Gauge, to: "/instructor" },
    { label: "Courses", icon: BookOpen, to: "/instructor" },
    { label: "Curriculum", icon: Layers3, to: "/instructor" },
    { label: "Lessons", icon: GraduationCap, to: "/instructor" },
    { label: "Labs", icon: Network, to: "/instructor" },
    { label: "Assessments", icon: ClipboardCheck, to: "/instructor" },
    { label: "Students", icon: UsersRound, to: "/instructor" },
    { label: "Batches", icon: BriefcaseBusiness, to: "/instructor" },
    { label: "Assignments", icon: FileBadge, to: "/instructor" },
    { label: "Reports", icon: ChartNoAxesColumnIncreasing, to: "/instructor" },
  ],
  admin: [
    { label: "Dashboard", icon: Gauge, to: "/admin" },
    { label: "Users", icon: UsersRound, to: "/admin" },
    { label: "Courses", icon: BookOpen, to: "/admin" },
    { label: "Enrollments", icon: GraduationCap, to: "/admin" },
    { label: "Instructors", icon: UsersRound, to: "/admin" },
    { label: "Organizations", icon: BriefcaseBusiness, to: "/admin" },
    { label: "Assessments", icon: ClipboardCheck, to: "/admin" },
    { label: "Certificates", icon: FileBadge, to: "/admin" },
    { label: "Analytics", icon: ChartNoAxesColumnIncreasing, to: "/admin" },
    { label: "Settings", icon: Settings2, to: "/admin" },
  ],
};

export const publicNavigation = [
  { label: "Programs", to: "/#programs" },
  { label: "Course catalog", to: "/#catalog" },
  { label: "Cyber range", to: "/#cyber-range" },
  { label: "Corporate training", to: "/#training" },
  { label: "University programs", to: "/#universities" },
  { label: "About", to: "/#about" },
  { label: "Contact", to: "/#contact" },
];

export const dashboardData = {
  student: {
    role: "Student portal" as const,
    title: "Your learning, in motion.",
    greeting: "Good morning, Alex",
    subheading: "You’re building real-world security skills. Keep the momentum going.",
    stats: [
      { label: "Learning streak", value: "12 days", detail: "+3 days this month", icon: Activity },
      { label: "Course progress", value: "68%", detail: "Across 4 active courses", icon: BookOpen },
      { label: "Lab completions", value: "18", detail: "4 this week", icon: Network },
    ],
    focusTitle: "Continue learning",
    focusName: "Network Defense & Threat Detection",
    focusMeta: "Module 6 · SIEM fundamentals",
    progress: 68,
    nextTitle: "Up next in your path",
    nextName: "Incident Response Essentials",
    nextMeta: "Lesson 3 of 8 · 24 min",
    roster: [
      { title: "Threat hunting with SIEM", kind: "Virtual lab", value: "Ready when you are", accent: "cyan" },
      { title: "Security operations fundamentals", kind: "Course", value: "4 lessons remaining", accent: "red" },
      { title: "SOC analyst practice range", kind: "Cyber range", value: "New scenario", accent: "green" },
    ],
  },
  instructor: {
    role: "Instructor portal" as const,
    title: "Teach with impact.",
    greeting: "Good morning, Morgan",
    subheading: "Your cohorts are moving forward. Here’s the latest across your programs.",
    stats: [
      { label: "Active learners", value: "284", detail: "+18 this month", icon: UsersRound },
      { label: "Courses in progress", value: "6", detail: "Across 3 cohorts", icon: BookOpen },
      { label: "To review", value: "12", detail: "Assignments awaiting feedback", icon: ClipboardCheck },
    ],
    focusTitle: "Your next session",
    focusName: "Security Operations · Cohort 04",
    focusMeta: "Today, 14:30 · Live workshop",
    progress: 72,
    nextTitle: "Needs your attention",
    nextName: "Incident response lab review",
    nextMeta: "12 submissions · Due today",
    roster: [
      { title: "SOC analyst fundamentals", kind: "Course", value: "84 learners", accent: "cyan" },
      { title: "Blue team operations", kind: "Cohort 04", value: "Next session today", accent: "red" },
      { title: "Threat detection assessment", kind: "Assessment", value: "12 to review", accent: "green" },
    ],
  },
  admin: {
    role: "Administration" as const,
    title: "Learning at a glance.",
    greeting: "Welcome back, Jordan",
    subheading: "A clear view of your learning organization and the work ahead.",
    stats: [
      { label: "Active learners", value: "2,486", detail: "+8.4% this month", icon: UsersRound },
      { label: "Published courses", value: "42", detail: "Across 7 learning paths", icon: BookOpen },
      { label: "Certifications earned", value: "318", detail: "This quarter", icon: FileBadge },
    ],
    focusTitle: "Organization health",
    focusName: "Skills growth is on track",
    focusMeta: "Learner engagement · Updated today",
    progress: 82,
    nextTitle: "Review queue",
    nextName: "New instructor applications",
    nextMeta: "4 applications · 2 need review",
    roster: [
      { title: "Enterprise security foundation", kind: "Learning path", value: "612 active learners", accent: "cyan" },
      { title: "Cloud security essentials", kind: "Course", value: "92% completion", accent: "red" },
      { title: "Instructor onboarding", kind: "Program", value: "4 applications", accent: "green" },
    ],
  },
} satisfies Record<PortalRole, {
  role: string;
  title: string;
  greeting: string;
  subheading: string;
  stats: { label: string; value: string; detail: string; icon: LucideIcon }[];
  focusTitle: string;
  focusName: string;
  focusMeta: string;
  progress: number;
  nextTitle: string;
  nextName: string;
  nextMeta: string;
  roster: { title: string; kind: string; value: string; accent: string }[];
}>;
