import { describe, expect, it } from "vitest";
import serverEntry from "../server";

describe("Server-level edge handler", () => {
  it("redirects www.cyberbodha.com to apex domain cyberbodha.com with HTTP 301", async () => {
    const request = new Request("https://www.cyberbodha.com/student?filter=active", {
      headers: { host: "www.cyberbodha.com" },
    });
    const response = await serverEntry.fetch(request, {}, {});

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe("https://cyberbodha.com/student?filter=active");
  });

  it("preserves URL subpaths and queries across 301 redirect", async () => {
    const request = new Request("https://www.cyberbodha.com/courses/intro-to-cybersecurity?ref=nav", {
      headers: { host: "www.cyberbodha.com" },
    });
    const response = await serverEntry.fetch(request, {}, {});

    expect(response.status).toBe(301);
    expect(response.headers.get("location")).toBe("https://cyberbodha.com/courses/intro-to-cybersecurity?ref=nav");
  });
});
