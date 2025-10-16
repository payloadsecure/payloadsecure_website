import { Shield, Search, Eye } from "lucide-react";

export const servicesData = [
  {
    id: "penetration-testing",
    icon: Shield,
    title: "Penetration Testing",
    description: "Comprehensive security testing to identify vulnerabilities in your systems, networks, and applications before malicious actors can exploit them.",
    color: "#00d9ff",
    whatItIs: "Penetration Testing is a simulated cyber attack against your computer system, network, or web application to identify security weaknesses that could be exploited by hackers. This ethical hacking approach helps organizations understand their security posture from an attacker's perspective and take proactive measures to strengthen their defenses.",
    whatWeDo: [
      "Network Infrastructure Testing - Comprehensive scanning and exploitation of network vulnerabilities, including firewall misconfigurations and weak protocols",
      "Web Application Testing - In-depth analysis of web applications for OWASP Top 10 vulnerabilities, SQL injection, XSS, and authentication flaws",
      "Wireless Network Assessment - Testing of WiFi security, rogue access points, and wireless encryption weaknesses",
      "Social Engineering Tests - Simulated phishing campaigns and physical security assessments to test human factors",
      "API Security Testing - Thorough examination of REST/SOAP APIs for authentication, authorization, and data exposure issues",
      "Mobile Application Testing - Security assessment of iOS and Android applications for data leakage and insecure storage"
    ],
    benefits: [
      "Identify Critical Vulnerabilities - Discover security weaknesses before attackers do",
      "Compliance Requirements - Meet regulatory standards like PCI-DSS, HIPAA, and SOC 2",
      "Risk Mitigation - Reduce the likelihood of data breaches and financial losses",
      "Security Awareness - Educate your team about real-world attack scenarios",
      "Detailed Reporting - Receive comprehensive reports with actionable remediation steps",
      "Improved Security Posture - Strengthen your overall cybersecurity defenses"
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "External network scan",
          "Basic vulnerability assessment",
          "Executive summary report",
          "Email support",
          "7-day turnaround"
        ]
      },
      {
        name: "Professional",
        features: [
          "External & internal testing",
          "Web application testing",
          "Detailed technical report",
          "Remediation consultation",
          "Priority support",
          "14-day turnaround"
        ]
      },
      {
        name: "Enterprise",
        features: [
          "Comprehensive testing",
          "Social engineering tests",
          "Continuous monitoring",
          "Dedicated security analyst",
          "24/7 support",
          "Custom timeline"
        ]
      }
    ]
  },
  {
    id: "vulnerability-assessment",
    icon: Search,
    title: "Vulnerability Assessment",
    description: "In-depth analysis and evaluation of your security posture, identifying weaknesses and providing actionable remediation strategies.",
    color: "#ff0088",
    whatItIs: "Vulnerability Assessment is a systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation measures. Unlike penetration testing, vulnerability assessments focus on identification rather than exploitation.",
    whatWeDo: [
      "Automated Vulnerability Scanning - Use industry-leading tools to scan networks, systems, and applications for known vulnerabilities",
      "Manual Verification - Validate automated findings to eliminate false positives and ensure accuracy",
      "Configuration Review - Analyze system configurations, patch levels, and security settings against best practices",
      "Risk Prioritization - Classify vulnerabilities by severity using CVSS scores and business impact analysis",
      "Compliance Mapping - Map findings to relevant compliance frameworks and regulatory requirements",
      "Remediation Planning - Develop detailed action plans with prioritized steps to address identified issues"
    ],
    benefits: [
      "Proactive Security - Stay ahead of threats with regular vulnerability identification",
      "Cost-Effective - More affordable than penetration testing while providing valuable insights",
      "Continuous Improvement - Establish a baseline and track security improvements over time",
      "Regulatory Compliance - Demonstrate due diligence for audit and compliance purposes",
      "Resource Optimization - Prioritize security efforts based on actual risk levels",
      "Quick Deployment - Faster turnaround compared to comprehensive penetration tests"
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "Quarterly scans",
          "Automated vulnerability detection",
          "Summary reports",
          "Email support",
          "Standard remediation advice"
        ]
      },
      {
        name: "Professional",
        features: [
          "Monthly scans",
          "Manual verification",
          "Detailed reports with CVSS scores",
          "Priority support",
          "Remediation consultation calls"
        ]
      },
      {
        name: "Enterprise",
        features: [
          "Weekly/on-demand scans",
          "Continuous monitoring",
          "Custom compliance reporting",
          "Dedicated analyst",
          "24/7 support & immediate alerts"
        ]
      }
    ]
  },
  {
    id: "dark-web-monitoring",
    icon: Eye,
    title: "Dark Web Monitoring",
    description: "Continuous surveillance of dark web channels to detect compromised credentials, data leaks, and emerging threats targeting your organization.",
    color: "#00ff88",
    whatItIs: "Dark Web Monitoring is the process of scanning hidden areas of the internet where cybercriminals buy, sell, and trade stolen data. This service continuously monitors dark web forums, marketplaces, and chat rooms to identify if your organization's sensitive information has been compromised. Early detection allows for rapid response before stolen data can be weaponized against you.",
    whatWeDo: [
      "Credential Monitoring - Search for compromised usernames, passwords, and email addresses across dark web databases",
      "Data Breach Detection - Identify leaked corporate data, customer information, and intellectual property",
      "Brand Protection - Monitor for counterfeit products, brand impersonation, and reputation damage",
      "Threat Intelligence - Track threat actor discussions about your organization or industry",
      "Executive Protection - Monitor for personal information of key executives and their families",
      "Real-Time Alerts - Immediate notifications when your data appears on dark web platforms"
    ],
    benefits: [
      "Early Breach Detection - Discover data leaks before they lead to major incidents",
      "Credential Protection - Identify compromised accounts and force password resets",
      "Brand Reputation - Protect your brand from dark web fraud and impersonation",
      "Threat Intelligence - Gain insights into threats targeting your industry",
      "Compliance Support - Demonstrate proactive monitoring for regulatory requirements",
      "Reduced Response Time - Act quickly to mitigate damage from exposed data"
    ],
    plans: [
      {
        name: "Basic",
        features: [
          "Domain monitoring",
          "Monthly reports",
          "Basic credential alerts",
          "Email notifications",
          "5 monitored domains"
        ]
      },
      {
        name: "Professional",
        features: [
          "Enhanced monitoring",
          "Weekly reports",
          "Executive surveillance",
          "Real-time alerts",
          "20 monitored domains",
          "Threat intelligence briefings"
        ]
      },
      {
        name: "Enterprise",
        features: [
          "Comprehensive monitoring",
          "24/7 surveillance",
          "Dedicated analyst",
          "Instant notifications",
          "Unlimited domains",
          "Custom threat intelligence",
          "Incident response support"
        ]
      }
    ]
  }
];
