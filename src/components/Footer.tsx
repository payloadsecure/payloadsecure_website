import { Linkedin, Twitter, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-[#00d9ff]/20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a0f] to-[#050508]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground">
              Protecting businesses from cyber threats with enterprise-grade security solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/payloadsecure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00d9ff] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ff0088] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/payloadsecure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#00ff88] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-service', { detail: 'penetration-testing' }))}
                  className="text-muted-foreground hover:text-[#00d9ff] transition-colors text-left"
                >
                  Penetration Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-service', { detail: 'vulnerability-assessment' }))}
                  className="text-muted-foreground hover:text-[#ff0088] transition-colors text-left"
                >
                  Vulnerability Assessment
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-service', { detail: 'dark-web-monitoring' }))}
                  className="text-muted-foreground hover:text-[#00ff88] transition-colors text-left"
                >
                  Dark Web Monitoring
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-[#00d9ff] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#ff0088] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[#00ff88] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-[#8800ff] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'privacy' }))}
                  className="text-muted-foreground hover:text-[#00d9ff] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'terms' }))}
                  className="text-muted-foreground hover:text-[#ff0088] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'cookie' }))}
                  className="text-muted-foreground hover:text-[#00ff88] transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'compliance' }))}
                  className="text-muted-foreground hover:text-[#8800ff] transition-colors text-left"
                >
                  Compliance
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00d9ff]/20 pt-8 text-sm text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} PayloadSecure. All rights reserved.</p>
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-[#00d9ff] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-[#ff0088] rounded-full opacity-5 blur-3xl"></div>
    </footer>
  );
}
