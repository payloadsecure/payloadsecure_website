import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
    `.trim();
    
    // In a real application, this would send to your backend
    // For now, we'll show the user what would be sent
    console.log('Form submission:', formData);
    
    // Show success message
    setShowSuccess(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff0088]/5 via-transparent to-[#00d9ff]/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#ff0055]/10 border border-[#ff0055]/30 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-sm text-[#ff0055]">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's Secure Your <span className="bg-gradient-to-r from-[#ff0055] to-[#00d9ff] bg-clip-text text-transparent">Business</span> Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to enhance your cybersecurity? Get in touch with our team for a 
            free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <Card className="bg-card/50 backdrop-blur-sm border-2 border-[#00d9ff]/40 hover:border-[#00d9ff] transition-all" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)' }}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#00d9ff]/20 border border-[#00d9ff]/40 rounded-lg flex items-center justify-center mb-2">
                <Mail className="w-6 h-6 text-[#00d9ff]" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 217, 255, 0.8))' }} />
              </div>
              <CardTitle className="text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">contact@payloadsecure.com</p>
              <p className="text-muted-foreground">support@payloadsecure.com</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-2 border-[#ff0088]/40 hover:border-[#ff0088] transition-all" style={{ boxShadow: '0 0 20px rgba(255, 0, 136, 0.2)' }}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#ff0088]/20 border border-[#ff0088]/40 rounded-lg flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-[#ff0088]" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 0, 136, 0.8))' }} />
              </div>
              <CardTitle className="text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">24/7 Emergency Hotline</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-2 border-[#00ff88]/40 hover:border-[#00ff88] transition-all" style={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)' }}>
            <CardHeader>
              <div className="w-12 h-12 bg-[#00ff88]/20 border border-[#00ff88]/40 rounded-lg flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-[#00ff88]" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 255, 136, 0.8))' }} />
              </div>
              <CardTitle className="text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Chandrapur</p>
              <p className="text-muted-foreground">Maharashtra - 442401</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12 bg-card/50 backdrop-blur-sm border-2 border-[#8800ff]/40" style={{ boxShadow: '0 0 30px rgba(136, 0, 255, 0.2)' }}>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">Name *</label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-background/50 border-[#00d9ff]/30 focus:border-[#00d9ff]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm">Email *</label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-background/50 border-[#00d9ff]/30 focus:border-[#00d9ff]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm">Company</label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Name"
                  className="bg-background/50 border-[#00d9ff]/30 focus:border-[#00d9ff]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm">Message *</label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your security needs..."
                  rows={5}
                  className="bg-background/50 border-[#00d9ff]/30 focus:border-[#00d9ff]"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-[#00d9ff] to-[#ff0088] hover:from-[#00b8dd] hover:to-[#dd006e]" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}>
                Send Message
              </Button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 p-4 bg-[#00ff88]/10 border-2 border-[#00ff88]/40 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" style={{ filter: 'drop-shadow(0 0 4px rgba(0, 255, 136, 0.8))' }} />
                <div className="flex-1">
                  <p className="text-[#00ff88] font-medium">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Thank you for contacting us. We'll get back to you soon at the email address you provided.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
