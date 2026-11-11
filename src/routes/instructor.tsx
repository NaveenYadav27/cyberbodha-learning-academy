import { createFileRoute } from "@tanstack/react-router";
import { PortalDashboard } from "@/components/cyberbodha/PortalDashboard";

export const Route = createFileRoute("/instructor")({
  head: () => ({
    meta: [
      { title: "Instructor Dashboard | CyberBodha" },
      { name: "description", content: "Manage cybersecurity courses, cohorts, assignments, and learner progress in the CyberBodha instructor workspace." },
      { property: "og:title", content: "Instructor Dashboard | CyberBodha" },
      { property: "og:description", content: "Teach with impact across your cybersecurity programs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InstructorDashboard,
});

function InstructorDashboard() {
  return <PortalDashboard role="instructor" />;
}
