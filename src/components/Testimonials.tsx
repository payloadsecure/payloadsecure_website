import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, TechStart Inc.",
    content: "Working directly with an expert made all the difference. The penetration test was thorough and the findings were clearly communicated with actionable recommendations.",
    rating: 5,
    accentColor: "#00d9ff",
  },
  {
    name: "James Park",
    role: "Founder, SecureApps",
    content: "Exceptional vulnerability assessment that uncovered critical issues we didn't know existed. The personalized attention and expertise exceeded expectations.",
    rating: 5,
    accentColor: "#ff0088",
  },
  {
    name: "Lisa Chen",
    role: "Security Manager, DataFlow",
    content: "The dark web monitoring service provided invaluable insights. Quick turnaround, professional reporting, and direct communication throughout the engagement.",
    rating: 5,
    accentColor: "#00ff88",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#8800ff]/10 border border-[#8800ff]/30 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-sm text-[#8800ff]">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Trusted by <span className="bg-gradient-to-r from-[#8800ff] to-[#00d9ff] bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about their experience with CyberShield.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: `${testimonial.accentColor}40`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${testimonial.accentColor}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `none`;
              }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5" 
                      style={{ 
                        fill: testimonial.accentColor,
                        color: testimonial.accentColor,
                        filter: `drop-shadow(0 0 4px ${testimonial.accentColor})`
                      }}
                    />
                  ))}
                </div>
                <p className="text-foreground">"{testimonial.content}"</p>
                <div className="pt-4 border-t" style={{ borderColor: `${testimonial.accentColor}40` }}>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
