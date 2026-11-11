import { createFileRoute } from "@tanstack/react-router";
import { PortalDashboard } from "@/components/cyberbodha/PortalDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Administration | CyberBodha" },
      { name: "description", content: "Review learning organization activity, courses, learner engagement, and certifications in the CyberBodha admin workspace." },
      { property: "og:title", content: "Administration | CyberBodha" },
      { property: "og:description", content: "Learning organization, at a glance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return <PortalDashboard role="admin" />;
}
