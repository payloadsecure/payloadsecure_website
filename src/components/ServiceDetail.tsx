import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface ServiceDetailProps {
  service: {
    title: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
    description: string;
    whatItIs: string;
    whatWeDo: string[];
    benefits: string[];
    plans: {
      name: string;
      features: string[];
    }[];
  };
  onBack: () => void;
}

export function ServiceDetail({ service, onBack }: ServiceDetailProps) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={onBack}
          className="mb-8 border-[#00d9ff]/50 hover:bg-[#00d9ff]/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6"
            style={{ 
              backgroundColor: `${service.color}20`,
              border: `2px solid ${service.color}40`,
              boxShadow: `0 0 30px ${service.color}40`
            }}
          >
            <Icon 
              className="w-10 h-10" 
              style={{ 
                color: service.color,
                filter: `drop-shadow(0 0 8px ${service.color})`
              }}
            />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            <span style={{ color: service.color }}>{service.title}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* What It Is */}
        <div className="mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: `${service.color}40` }}>
            <CardHeader>
              <CardTitle className="text-2xl">What is {service.title}?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.whatItIs}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.whatWeDo.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-2" style={{ borderColor: `${service.color}20` }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 
                      className="w-6 h-6 flex-shrink-0 mt-0.5" 
                      style={{ 
                        color: service.color,
                        filter: `drop-shadow(0 0 4px ${service.color}80)`
                      }}
                    />
                    <p className="text-foreground">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Benefits You'll Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-2 hover:scale-105 transition-transform"
                style={{ 
                  borderColor: `${service.color}40`,
                  boxShadow: `0 0 20px ${service.color}20`
                }}
              >
                <CardContent className="pt-6 text-center">
                  <CheckCircle2 
                    className="w-8 h-8 mx-auto mb-4" 
                    style={{ 
                      color: service.color,
                      filter: `drop-shadow(0 0 8px ${service.color})`
                    }}
                  />
                  <p className="text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Available Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.plans.map((plan, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-2"
                style={{ 
                  borderColor: `${service.color}40`,
                }}
              >
                <CardHeader>
                  <CardTitle 
                    className="text-2xl text-center"
                    style={{ color: service.color }}
                  >
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 
                          className="w-5 h-5 flex-shrink-0 mt-0.5" 
                          style={{ color: service.color }}
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
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
            style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)' }}
          >
            Get Started with {service.title}
          </Button>
        </div>
      </div>
    </div>
  );
}
