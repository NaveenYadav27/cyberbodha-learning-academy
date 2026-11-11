import { createFileRoute } from "@tanstack/react-router";
import { PortalDashboard } from "@/components/cyberbodha/PortalDashboard";

export const Route = createFileRoute("/student")({
  head: () => ({
    meta: [
      { title: "Student Dashboard | CyberBodha" },
      { name: "description", content: "Track your cybersecurity learning, courses, labs, and certifications in your CyberBodha student workspace." },
      { property: "og:title", content: "Student Dashboard | CyberBodha" },
      { property: "og:description", content: "Your cybersecurity learning, in motion." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentDashboard,
});

function StudentDashboard() {
  return <PortalDashboard role="student" />;
}
