import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Certified cybersecurity expert specializing in offensive security",
  "Deep expertise in penetration testing and threat intelligence",
  "Direct communication - no middlemen, just expert consultation",
  "Flexible engagement models tailored to your needs",
  "Growing firm with plans to expand the team",
  "Continuous research on emerging threats and attack vectors",
];

export function About() {
  const colors = ["#00d9ff", "#ff0088", "#00ff88", "#8800ff", "#ff0055", "#00d9ff"];
  
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8800ff]/5 via-transparent to-[#00ff88]/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#00ff88]/30" style={{ boxShadow: '0 0 40px rgba(0, 255, 136, 0.3)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYwMzUyNjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00ff88] rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#8800ff] rounded-full opacity-30 blur-3xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-full backdrop-blur-sm">
              <span className="text-sm text-[#00ff88]">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Expert <span className="bg-gradient-to-r from-[#00ff88] to-[#8800ff] bg-clip-text text-transparent">Cybersecurity</span> Consulting
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Founded by a seasoned cybersecurity professional, PayloadSecure provides 
              specialized penetration testing and security assessment services. I deliver 
              personalized, high-quality security solutions with direct expert engagement, 
              ensuring your business receives the attention and expertise it deserves.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 
                    className="w-6 h-6 flex-shrink-0 mt-0.5" 
                    style={{ 
                      color: colors[index],
                      filter: `drop-shadow(0 0 4px ${colors[index]}80)`
                    }}
                  />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
