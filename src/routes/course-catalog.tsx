import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/course-catalog")({
  beforeLoad: () => {
    throw redirect({
      to: "/courses",
      statusCode: 301,
    });
  },
  component: () => null,
});
