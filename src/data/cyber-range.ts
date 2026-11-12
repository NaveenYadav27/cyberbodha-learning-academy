export interface RangeLab {
  id: string;
  title: string;
  category: "Blue Team" | "Offensive" | "Systems & Network" | "Active Directory";
  level: "Foundation" | "Intermediate" | "Advanced";
  scenario: string;
  objective: string;
  learnerTask: string;
  skillsPracticed: string[];
  expectedOutcome: string;
  toolsUsed: string[];
  estimatedMinutes: number;
}

export const RANGE_LABS: RangeLab[] = [
  {
    id: "lab-soc-01",
    title: "SOC Analyst Lab: Phishing Triage & Host Isolation",
    category: "Blue Team",
    level: "Foundation",
    scenario: "An employee reports a suspicious email containing an invoice attachment. Within 3 minutes, the endpoint detection agent records unexpected PowerShell executions.",
    objective: "Analyze incoming email telemetry, correlate endpoint Sysmon logs in the SIEM, verify malicious process spawning, and execute network containment.",
    learnerTask: "Inspect email headers and attachment hashes; query Wazuh/Splunk for Event ID 1 (Process Create) spawned by Word; verify C2 network connections and trigger host isolation.",
    skillsPracticed: ["Email Header Analysis", "Sysmon Event Correlation", "IoC Extraction", "Endpoint Containment", "Incident Ticket Creation"],
    expectedOutcome: "Accurate identification of malicious macro behavior, swift containment of patient zero, and delivery of an actionable incident escalation report.",
    toolsUsed: ["Wazuh SIEM", "Sysmon", "VirusTotal", "PowerShell", "Wireshark"],
    estimatedMinutes: 45,
  },
  {
    id: "lab-siem-02",
    title: "SIEM Investigation: Multi-Stage Brute Force & Password Spraying",
    category: "Blue Team",
    level: "Intermediate",
    scenario: "Authentication logs reveal a spike of failed login attempts across 200 distinct user accounts originating from a rotating set of external IP addresses.",
    objective: "Identify password spraying patterns, differentiate service account failures from targeted users, and craft a correlation rule to flag future attacks.",
    learnerTask: "Construct aggregation queries in Splunk/Sentinel grouping failed logins by source subnet and target username; detect successful authentications following sprays; create a Sigma rule.",
    skillsPracticed: ["Query Aggregation (SPL/KQL)", "Pattern Recognition", "Sigma Detection Authoring", "Threshold Tuning", "Account Lockout Management"],
    expectedOutcome: "Flagging of compromised credentials before lateral movement occurs, with automated alert generation.",
    toolsUsed: ["Splunk Enterprise", "Microsoft Sentinel", "Sigma", "Windows Security Logs"],
    estimatedMinutes: 60,
  },
  {
    id: "lab-threat-03",
    title: "Threat Detection & Hunt: Persistence via Scheduled Tasks & Run Keys",
    category: "Blue Team",
    level: "Intermediate",
    scenario: "An advanced persistent threat (APT) actor has established initial footholds on an internal file server and configured survival mechanisms across system reboots.",
    objective: "Execute a hypothesis-driven threat hunt for persistence artifacts across Windows Registry Run keys, Scheduled Tasks, and WMI event subscriptions.",
    learnerTask: "Audit Windows Event IDs 4698 (Scheduled Task Created) and Sysmon Event ID 13 (Registry Event); detect encoded base64 PowerShell commands; isolate persistence scripts.",
    skillsPracticed: ["Threat Hunting Methodologies", "Windows Registry Forensics", "Autoruns & WMI Inspection", "MITRE T1053 Mapping"],
    expectedOutcome: "Uncovering stealthy persistence mechanisms, neutralizing scheduled triggers, and documenting findings in the threat register.",
    toolsUsed: ["Sysinternals Autoruns", "Wazuh XDR", "PowerShell", "Sigma Rules"],
    estimatedMinutes: 75,
  },
  {
    id: "lab-ir-04",
    title: "Incident Response: Simulated Ransomware Pre-Cursor Containment",
    category: "Blue Team",
    level: "Advanced",
    scenario: "A workstation starts scanning network shares for SMB vulnerabilities while simultaneously attempting to clear volume shadow copies (`vssadmin delete shadows`).",
    objective: "Detect pre-encryption adversarial behavior in real-time, sever network connectivity to shared drives, and preserve memory artifacts for analysis.",
    learnerTask: "Recognize defense evasion commands; trigger firewall boundary rules to prevent lateral encryption; capture volatile memory image using winpmem; document timeline.",
    skillsPracticed: ["Ransomware Defense Playbooks", "Volatile Memory Preservation", "Network Share Protection", "Root Cause Analysis"],
    expectedOutcome: "Zero data encrypted on enterprise file servers, full preservation of volatile evidence, and post-incident hardening recommendations.",
    toolsUsed: ["FTK Imager / WinPmem", "Splunk", "Windows Defender ATP Simulation", "Network Firewall"],
    estimatedMinutes: 90,
  },
  {
    id: "lab-vapt-05",
    title: "VAPT Lab: Web Application Authentication & Access Control Testing",
    category: "Offensive",
    level: "Intermediate",
    scenario: "A simulated financial services web portal has completed a major redesign. You are commissioned to perform an authorized vulnerability assessment before public release.",
    objective: "Evaluate the portal for OWASP Top 10 vulnerabilities, focusing on Broken Object Level Authorization (BOLA/IDOR), SQL injection, and JWT signature flaws.",
    learnerTask: "Intercept HTTP traffic using Burp Suite; manipulate JSON Web Tokens to test algorithm confusion; exploit parameter tampering to access unauthorized accounts; draft CVSS score sheet.",
    skillsPracticed: ["Burp Suite Interception", "JWT Flaw Analysis", "IDOR / BOLA Exploitation", "CVSS v3.1 Scoring", "Remediation Guidance"],
    expectedOutcome: "Documented proof-of-concept exploits with verified technical impact, paired with practical code fixes for application developers.",
    toolsUsed: ["Burp Suite Pro", "OWASP ZAP", "Postman", "JWT.io"],
    estimatedMinutes: 60,
  },
  {
    id: "lab-linux-06",
    title: "Linux Lab: Systems Hardening & Security Auditing",
    category: "Systems & Network",
    level: "Foundation",
    scenario: "A freshly deployed Linux web server contains multiple default services, weak permissions, and unrestricted root SSH access.",
    objective: "Harden the operating system according to CIS benchmark standards, establish audit logging, and verify security posture using Lynis.",
    learnerTask: "Lock down `/etc/ssh/sshd_config`; configure custom sudoers policies; enforce restrictive umask settings; deploy and configure auditd rules for sensitive file changes.",
    skillsPracticed: ["Linux Administration", "SSH Key Hardening", "Auditd Configuration", "CIS Benchmark Auditing", "UFW Firewall Rules"],
    expectedOutcome: "A demonstrably hardened Linux server achieving a high compliance score on automated audit tools.",
    toolsUsed: ["Ubuntu Server", "Lynis", "Auditd", "UFW", "Bash"],
    estimatedMinutes: 45,
  },
  {
    id: "lab-net-07",
    title: "Networking Lab: Packet Dissection & Covert Channel Detection",
    category: "Systems & Network",
    level: "Foundation",
    scenario: "A network boundary monitor reports anomalous outbound DNS traffic with unusually long subdomains and abnormal query frequency.",
    objective: "Capture and dissect network traffic to identify DNS tunneling and covert data exfiltration in progress.",
    learnerTask: "Analyze PCAP files in Wireshark; calculate DNS query entropy; reconstruct base64-encoded file payloads transferred over TXT records; identify compromised internal host.",
    skillsPracticed: ["Wireshark Packet Analysis", "DNS Protocol Dissection", "Data Exfiltration Detection", "Traffic Filtering"],
    expectedOutcome: "Extraction of exfiltrated data artifacts, identification of the infected host IP, and implementation of DNS firewall filtering.",
    toolsUsed: ["Wireshark", "tshark", "tcpdump", "Network Miner"],
    estimatedMinutes: 60,
  },
  {
    id: "lab-ad-08",
    title: "Active Directory Lab: Kerberoasting Defense & GPO Auditing",
    category: "Active Directory",
    level: "Advanced",
    scenario: "Adversaries with low-privileged domain credentials request Kerberos service tickets for accounts with Service Principal Names (SPNs) to crack offline.",
    objective: "Detect Kerberoasting activity via Windows Event ID 4769 (A Kerberos service ticket was requested with RC4 encryption) and implement defensive mitigations.",
    learnerTask: "Query domain logs for suspicious ticket requests; identify vulnerable service accounts with weak passwords; enforce AES encryption; deploy honey accounts to detect future attempts.",
    skillsPracticed: ["Active Directory Security", "Kerberos Protocol Analysis", "Event ID 4769 Inspection", "Service Account Hardening", "Honey Tokens"],
    expectedOutcome: "Detection and containment of Kerberoasting attacks, transition to Group Managed Service Accounts (gMSA), and enhanced domain monitoring.",
    toolsUsed: ["Active Directory Lab", "PowerView (auditing mode)", "Wazuh", "Sysmon"],
    estimatedMinutes: 90,
  },
];
