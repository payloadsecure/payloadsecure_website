import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { useState } from "react";

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export function Header({ onNavigateHome, onNavigateToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      // Navigate to home
      if (onNavigateHome) {
        onNavigateHome();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to section
      if (onNavigateToSection) {
        onNavigateToSection(sectionId);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="focus:outline-none">
            <Logo size="md" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('home')} className="hover:text-[#00d9ff] transition-colors">
              Home
            </button>
            <button onClick={() => handleNavClick('services')} className="hover:text-[#ff0088] transition-colors">
              Services
            </button>
            <button onClick={() => handleNavClick('about')} className="hover:text-[#00ff88] transition-colors">
              About
            </button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-[#00d9ff] transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-[#00d9ff] to-[#ff0088] hover:from-[#00b8dd] hover:to-[#dd006e]" 
              style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              className="hover:text-[#00d9ff] transition-colors text-left"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('home');
              }}
            >
              Home
            </button>
            <button
              className="hover:text-[#ff0088] transition-colors text-left"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('services');
              }}
            >
              Services
            </button>
            <button
              className="hover:text-[#00ff88] transition-colors text-left"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('about');
              }}
            >
              About
            </button>
            <button
              className="hover:text-[#00d9ff] transition-colors text-left"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
            >
              Contact
            </button>
            <Button 
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
              className="bg-gradient-to-r from-[#00d9ff] to-[#ff0088] hover:from-[#00b8dd] hover:to-[#dd006e] w-full"
            >
              Get Started
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
