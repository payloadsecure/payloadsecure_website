import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookie' | 'compliance';
  onBack: () => void;
}

export function LegalPage({ type, onBack }: LegalPageProps) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "October 14, 2025",
      sections: [
        {
          heading: "Information We Collect",
          content: "We collect information you provide directly to us when you use our services, including your name, email address, company information, and any other information you choose to provide. We also automatically collect certain information about your device when you use our website."
        },
        {
          heading: "How We Use Your Information",
          content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to detect and prevent fraudulent transactions and other illegal activities."
        },
        {
          heading: "Information Sharing",
          content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements."
        },
        {
          heading: "Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
          heading: "Your Rights",
          content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. Contact us to exercise these rights."
        },
        {
          heading: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at contact@payloadsecure.com"
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "October 14, 2025",
      sections: [
        {
          heading: "Agreement to Terms",
          content: "By accessing or using PayloadSecure's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services."
        },
        {
          heading: "Service Description",
          content: "PayloadSecure provides cybersecurity consulting services including penetration testing, vulnerability assessments, and dark web monitoring. All services are provided on a contractual basis with specific scope and deliverables."
        },
        {
          heading: "User Responsibilities",
          content: "You agree to provide accurate information, maintain the confidentiality of your account credentials, and use our services in compliance with all applicable laws and regulations. You are responsible for all activities that occur under your account."
        },
        {
          heading: "Intellectual Property",
          content: "All content, reports, methodologies, and materials provided by PayloadSecure remain our intellectual property. You receive a limited license to use deliverables for your internal security purposes only."
        },
        {
          heading: "Limitation of Liability",
          content: "PayloadSecure shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services. Our total liability shall not exceed the amount paid for the specific service."
        },
        {
          heading: "Modifications",
          content: "We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the 'Last Updated' date."
        }
      ]
    },
    cookie: {
      title: "Cookie Policy",
      lastUpdated: "October 14, 2025",
      sections: [
        {
          heading: "What Are Cookies",
          content: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site."
        },
        {
          heading: "Types of Cookies We Use",
          content: "We use essential cookies for basic site functionality, analytics cookies to understand usage patterns, and functional cookies to remember your preferences. We do not use advertising or tracking cookies."
        },
        {
          heading: "Essential Cookies",
          content: "These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility."
        },
        {
          heading: "Analytics Cookies",
          content: "We use analytics cookies to collect information about how visitors use our website. This helps us improve user experience and understand which pages are most valuable to our visitors."
        },
        {
          heading: "Managing Cookies",
          content: "You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website and limit your ability to use certain features."
        },
        {
          heading: "Updates to This Policy",
          content: "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date."
        }
      ]
    },
    compliance: {
      title: "Compliance",
      lastUpdated: "October 14, 2025",
      sections: [
        {
          heading: "Regulatory Compliance",
          content: "PayloadSecure adheres to industry-standard security frameworks and best practices. Our services are designed to help organizations meet various compliance requirements including GDPR, HIPAA, PCI-DSS, and SOC 2."
        },
        {
          heading: "Data Protection",
          content: "We implement stringent data protection measures in accordance with GDPR and other data protection regulations. All client data is handled with the highest level of confidentiality and security."
        },
        {
          heading: "Industry Certifications",
          content: "Our team holds relevant industry certifications including CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional), and other recognized security credentials."
        },
        {
          heading: "Ethical Standards",
          content: "We conduct all security testing and assessments in accordance with ethical hacking principles. All testing is performed with explicit written authorization and within agreed-upon scope."
        },
        {
          heading: "Confidentiality",
          content: "We maintain strict confidentiality agreements with all clients. All findings, vulnerabilities, and sensitive information discovered during engagements are treated as confidential and shared only with authorized personnel."
        },
        {
          heading: "Audit and Reporting",
          content: "We maintain detailed documentation of all security assessments and provide comprehensive reports. Our processes are designed to support your audit and compliance requirements."
        }
      ]
    }
  };

  const pageContent = content[type];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-8 border-[#00d9ff]/50 hover:bg-[#00d9ff]/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl mb-4">
            <span className="text-[#00d9ff]">{pageContent.title}</span>
          </h1>
          <p className="text-muted-foreground">
            Last Updated: {pageContent.lastUpdated}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {pageContent.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-2xl text-foreground">{section.heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-card/50 backdrop-blur-sm border-2 border-[#00d9ff]/20 rounded-xl">
          <h3 className="text-xl mb-4">Questions?</h3>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this {pageContent.title.toLowerCase()}, please don't hesitate to contact us.
          </p>
          <Button 
            onClick={() => {
              onBack();
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-[#00d9ff] hover:bg-[#00b8dd] text-[#0a0a0f]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
