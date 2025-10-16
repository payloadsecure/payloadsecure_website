import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { servicesData } from "./ServicesData";

interface ServicesProps {
  onServiceClick?: (serviceId: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#ff0088]/10 border border-[#ff0088]/30 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-sm text-[#ff0088]">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#ff0088] to-[#8800ff] bg-clip-text text-transparent">Cybersecurity</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From threat detection to compliance management, we provide end-to-end 
            security services to protect your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-2 hover:border-opacity-100 transition-all duration-300 group"
              style={{ 
                borderColor: `${service.color}40`,
                boxShadow: `0 0 0 rgba(${service.color}, 0)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${service.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 rgba(${service.color}, 0)`;
              }}
            >
              <CardHeader>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{ 
                    backgroundColor: `${service.color}20`,
                    border: `1px solid ${service.color}40`
                  }}
                >
                  <service.icon 
                    className="w-6 h-6 transition-all duration-300" 
                    style={{ 
                      color: service.color,
                      filter: `drop-shadow(0 0 8px ${service.color}80)`
                    }} 
                  />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full"
                  style={{ 
                    borderColor: `${service.color}50`,
                    color: service.color
                  }}
                  onClick={() => onServiceClick?.(service.id)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
