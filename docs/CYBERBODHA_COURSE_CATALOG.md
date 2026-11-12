# CyberBodha Course Catalog Architecture & Specifications

**Reference Document:** Course Data Model & Flagship Programs  
**Author:** Antigravity Engineering  
**Version:** 1.0 (Phase 13 Deliverable)

---

## 1. Centralized Data Architecture

The course catalog is driven by centralized, strongly-typed TypeScript models located at:
- `src/data/courses.ts`
- `src/data/programs.ts`
- `src/data/cyber-range.ts`

### TypeScript Interface: `Course`
```ts
export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  level: CourseLevel;
  shortDescription: string;
  overview: string;
  audience: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  skills: string[];
  curriculum: CourseModule[];
  labHighlights: string[];
  technologies: string[];
  format: string;
  duration?: string;
  certificationNote: string;
  faqs: CourseFAQ[];
  featured: boolean;
  published: boolean;
  badge?: string;
  relatedCourseSlugs: string[];
}
```

---

## 2. Flagship Course Portfolio Inventory

### Course 01: SOC Analyst Professional Program
- **Slug:** `soc-analyst-professional`
- **Category:** SOC & Blue Team
- **Level:** Foundation to Professional
- **Modules (11):**
  1. SOC Operations & Analyst Responsibilities
  2. SIEM Architecture & Data Ingestion
  3. Log Analysis & Investigation
  4. Alert Triage & Prioritization
  5. Detection Rules & Correlation
  6. MITRE ATT&CK Mapping
  7. Endpoint & Network Telemetry
  8. Incident Investigation Workflows
  9. Incident Escalation & Reporting
  10. Hands-on SOC Investigation Scenarios
  11. Practical SOC Capstone Assessment
- **Key Technologies:** Wazuh, Splunk, Microsoft Sentinel, Sysmon, Windows Event Logs, Linux Auditd, MITRE ATT&CK, Wireshark.

### Course 02: CEH v13 AI Integrated Ethical Hacking
- **Slug:** `ceh-v13-ai-ethical-hacking`
- **Category:** Offensive Security & VAPT
- **Level:** Foundation to Advanced
- **Modules (14):**
  1. Ethical Hacking Foundations & Legal Frameworks
  2. Reconnaissance & Intelligence Gathering
  3. Scanning & Enumeration
  4. Vulnerability Assessment & Validation
  5. System Hacking & Privilege Escalation
  6. Network Security Testing
  7. Web Application Security Fundamentals
  8. Wireless & IoT Security Overview
  9. Social Engineering & Human Factors
  10. Malware Concepts & Defensive Evasion
  11. Cloud Security Fundamentals for Pentesters
  12. AI-Assisted Security Workflows
  13. Professional Remediation Reporting
  14. Practical Ethical Hacking Capstone
- **Key Technologies:** Kali Linux, Nmap, Burp Suite, Metasploit, Wireshark, John the Ripper, Hydra, OWASP ZAP, Python.

### Course 03: Vulnerability Assessment & Penetration Testing Professional
- **Slug:** `vapt-professional`
- **Category:** Offensive Security & VAPT
- **Level:** Intermediate
- **Modules (12):**
  1. VAPT Methodology & Standards
  2. Rules of Engagement & Scoping
  3. Scoping & Asset Discovery
  4. Vulnerability Validation & Verification
  5. Advanced Web Application Testing
  6. Authentication & Authorization Testing
  7. API Security Testing
  8. Internal Network Penetration Testing
  9. Risk Rating & CVSS Scoring
  10. Professional VAPT Reporting
  11. Retesting, Validation & Closure
  12. Comprehensive VAPT Practical Assessment
- **Key Technologies:** Burp Suite Professional, Nessus, Nmap, OWASP ZAP, SQLmap, Postman, Kali Linux, Metasploit.

### Course 04: SIEM Engineering & Detection Operations
- **Slug:** `siem-engineering-operations`
- **Category:** SIEM Engineering
- **Level:** Intermediate to Advanced
- **Modules (12):**
  1. Enterprise SIEM Architecture
  2. Log Collection & Ingestion Protocols
  3. Log Parsing, Extraction & Normalization
  4. Common Data Models & Standardization
  5. Advanced Search & Investigation Queries
  6. Correlation Rules & Detection Engineering
  7. Sigma Rules & Detection-as-Code
  8. Alert Tuning & Noise Reduction
  9. Operations & Executive Dashboards
  10. Proactive Threat Hunting with SIEM
  11. Pipeline Health & Troubleshooting
  12. Capstone Engineering Assessment
- **Key Technologies:** Splunk Enterprise, Microsoft Sentinel, Wazuh SIEM/XDR, Elasticsearch, Logstash, Kibana, Sigma, Sysmon.

### Course 05: Linux & Networking for Cybersecurity
- **Slug:** `linux-networking-cybersecurity`
- **Category:** Networking & Linux
- **Level:** Foundation
- **Modules (12):**
  1. Linux Architecture & Terminal Basics
  2. Filesystem Permissions & Security
  3. User & Group Administration
  4. Process Management & Daemons
  5. Shell Scripting for Automation
  6. Fundamentals of Computer Networking
  7. The TCP/IP Protocol Suite
  8. Core Infrastructure Services
  9. Routing & Switching Concepts
  10. Packet Analysis with Wireshark & tcpdump
  11. Linux Firewalls & Network Hardening
  12. Hands-on Practical Lab & Final Project
- **Key Technologies:** Debian/Ubuntu, Kali Linux, Bash, Wireshark, tcpdump, Nmap, iptables/UFW, systemd.

### Course 06: Cybersecurity Career Accelerator
- **Slug:** `cybersecurity-career-accelerator`
- **Category:** Career Accelerator
- **Level:** Foundation to Job Readiness
- **Modules (12):**
  1. Cybersecurity Foundations & Industry Landscape
  2. Linux & Networking for Security Professionals
  3. Windows Architecture & Active Directory Security
  4. Security Operations (SOC) Fundamentals
  5. SIEM Investigation & Telemetry Analysis
  6. Incident Response & Containment Strategies
  7. Ethical Hacking & Defensive Mindset
  8. Essential Security Tools Mastery
  9. Cyber Range Practical Scenarios
  10. Technical Assessments & Capstone Project
  11. Professional Portfolio Development
  12. Technical Interview Preparation & Mentorship
- **Key Technologies:** Wazuh, Splunk, Sysmon, Wireshark, Active Directory, Kali Linux, Burp Suite, Nmap.

---

## 3. Cyber Range Virtual Lab Inventory

The Cyber Range showcase (`src/data/cyber-range.ts`) provides 8 distinct, authentic technical scenarios:

1. **`lab-soc-01`:** SOC Analyst Lab — Phishing Triage & Host Isolation (45 min)
2. **`lab-siem-02`:** SIEM Investigation — Multi-Stage Brute Force & Password Spraying (60 min)
3. **`lab-threat-03`:** Threat Detection & Hunt — Persistence via Scheduled Tasks & Run Keys (75 min)
4. **`lab-ir-04`:** Incident Response — Simulated Ransomware Pre-Cursor Containment (90 min)
5. **`lab-vapt-05`:** VAPT Lab — Web Application Authentication & Access Control Testing (60 min)
6. **`lab-linux-06`:** Linux Lab — Systems Hardening & Security Auditing (45 min)
7. **`lab-net-07`:** Networking Lab — Packet Dissection & Covert Channel Detection (60 min)
8. **`lab-ad-08`:** Active Directory Lab — Kerberoasting Defense & GPO Auditing (90 min)
