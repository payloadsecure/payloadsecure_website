import { Clock, Users, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Flexible Availability",
    description: "Available for consultations and engagements with flexible scheduling to meet your needs.",
    color: "#00d9ff",
  },
  {
    icon: Users,
    title: "Direct Expert Access",
    description: "Work directly with a certified cybersecurity professional - no layers of account managers.",
    color: "#ff0088",
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Industry certifications and real-world experience in penetration testing and security research.",
    color: "#00ff88",
  },
  {
    icon: TrendingUp,
    title: "Growing Practice",
    description: "Boutique firm with personalized service, expanding to meet increasing demand.",
    color: "#8800ff",
  },
];

export function Features() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00d9ff] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00d9ff] rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Why Choose <span className="text-[#00d9ff]">PayloadSecure</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver unmatched cybersecurity services backed by expertise, 
            technology, and a commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div 
                className="w-16 h-16 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: `${feature.color}20`,
                  border: `2px solid ${feature.color}40`,
                  boxShadow: `0 0 20px ${feature.color}40`
                }}
              >
                <feature.icon 
                  className="w-8 h-8" 
                  style={{ 
                    color: feature.color,
                    filter: `drop-shadow(0 0 8px ${feature.color})`
                  }}
                />
              </div>
              <h3 className="text-xl">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
