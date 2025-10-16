import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import hackerImage from "figma:asset/5920b0063586b0ba6cd07c5ec11226e67336e7df.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d9ff] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Left Aligned */}
          <div className="space-y-8">
            {/* Main Heading - Left Aligned, Multi-line */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-left leading-tight">
              <span className="block text-[#00d9ff]">Empower Your</span>
              <span className="block">Cyber Defenses</span>
              <span className="block">Today</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground text-left max-w-xl">
              Welcome to <span className="text-[#00d9ff]">PayloadSecure</span>, a leading cybersecurity consulting firm specializing in Penetration Testing, Vulnerability Assessment, and Dark Web Monitoring. We offer AI-powered breach prevention, personalized 24/7 monitoring, and tailored security solutions to safeguard your digital assets.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-[#00d9ff] hover:bg-[#00b8dd] text-[#0a0a0f] group" 
                style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('services')}
                className="border-[#00d9ff]/50 hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]"
              >
                View Services
              </Button>
            </div>
          </div>

          {/* Right Content - Cybersecurity Image */}
          <div className="relative flex justify-center">
            <div 
              className="rounded-2xl overflow-hidden border-4 border-[#00d9ff]/60 relative group" 
              style={{ 
                boxShadow: '0 0 50px rgba(0, 217, 255, 0.5), 0 0 100px rgba(255, 0, 136, 0.3), inset 0 0 30px rgba(0, 217, 255, 0.1)',
              }}
            >
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <img
                src={hackerImage}
                alt="Cybersecurity Hacking Operation"
                className="w-full h-auto object-cover"
                style={{ 
                  filter: 'brightness(1.3) contrast(1.2) saturate(1.4)',
                }}
              />
            </div>
            {/* Decorative glow - enhanced */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#00d9ff] rounded-full opacity-40 blur-3xl pointer-events-none animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#ff0088] rounded-full opacity-40 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -right-6 w-24 h-24 bg-[#00ff88] rounded-full opacity-30 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
