import { describe, it, expect } from "vitest";
import { CEH_V13_MODULES, CEH_V13_METADATA } from "../data/ceh-v13-curriculum";
import { getCourseBySlug } from "../data/courses";

describe("CEH v13 AI Canonical Curriculum Contract", () => {
  it("contains exactly 20 official modules", () => {
    expect(CEH_V13_MODULES.length).toBe(20);
    expect(CEH_V13_METADATA.totalOfficialModules).toBe(20);
  });

  it("verifies sequential module numbers from 1 to 20", () => {
    CEH_V13_MODULES.forEach((mod, idx) => {
      expect(mod.number).toBe(idx + 1);
      expect(mod.officialNumber).toBe(`Module ${String(idx + 1).padStart(2, "0")}`);
    });
  });

  it("verifies official module titles match the canonical EC-Council outline", () => {
    const expectedTitles = [
      "Introduction to Ethical Hacking",
      "Footprinting and Reconnaissance",
      "Scanning Networks",
      "Enumeration",
      "Vulnerability Analysis",
      "System Hacking",
      "Malware Threats",
      "Sniffing",
      "Social Engineering",
      "Denial-of-Service",
      "Session Hijacking",
      "Evading IDS, Firewalls, and Honeypots",
      "Hacking Web Servers",
      "Hacking Web Applications",
      "SQL Injection",
      "Hacking Wireless Networks",
      "Hacking Mobile Platforms",
      "IoT and OT Hacking",
      "Cloud Computing",
      "Cryptography",
    ];

    CEH_V13_MODULES.forEach((mod, idx) => {
      expect(mod.officialTitle).toBe(expectedTitles[idx]);
    });
  });

  it("verifies every module contains complete workspace elements", () => {
    CEH_V13_MODULES.forEach((mod) => {
      expect(mod.learningObjectives.length).toBeGreaterThanOrEqual(3);
      expect(mod.officialTopics.length).toBeGreaterThanOrEqual(4);
      expect(mod.lessons.length).toBeGreaterThanOrEqual(2);
      expect(mod.conceptExplanation.length).toBeGreaterThan(30);
      expect(mod.aiAssistantFeatures.length).toBeGreaterThanOrEqual(2);
      expect(mod.guidedLabs.length).toBeGreaterThanOrEqual(1);
      expect(mod.practiceChallenges.length).toBeGreaterThanOrEqual(1);
      expect(mod.knowledgeChecks.length).toBeGreaterThanOrEqual(1);
      expect(mod.moduleAssessment.length).toBeGreaterThan(10);
      expect(mod.summary.length).toBeGreaterThan(15);
      expect(mod.classification).toBe("Official Curriculum Mapping");
    });
  });

  it("verifies guided labs have environments, scenarios, and tools", () => {
    CEH_V13_MODULES.forEach((mod) => {
      mod.guidedLabs.forEach((lab) => {
        expect(lab.title.length).toBeGreaterThan(5);
        expect(lab.environment.length).toBeGreaterThan(5);
        expect(lab.scenario.length).toBeGreaterThan(10);
        expect(lab.tools.length).toBeGreaterThanOrEqual(1);
        expect(lab.classification).toBe("CyberBodha Supplementary Lab");
      });
    });
  });

  it("verifies the course page data for ceh-v13-ai-ethical-hacking loads all 20 modules", () => {
    const course = getCourseBySlug("ceh-v13-ai-ethical-hacking");
    expect(course).toBeDefined();
    if (!course) return;
    expect(course.curriculum.length).toBe(20);
    const firstMod = course.curriculum[0];
    const lastMod = course.curriculum[19];
    expect(firstMod?.title).toContain("Module 01: Introduction to Ethical Hacking");
    expect(lastMod?.title).toContain("Module 20: Cryptography");
  });
});
