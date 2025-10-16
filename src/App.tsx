import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FullPageImage } from "./components/FullPageImage";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ServiceDetail } from "./components/ServiceDetail";
import { LegalPage } from "./components/LegalPages";
import { servicesData } from "./components/ServicesData";

export default function App() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedLegal, setSelectedLegal] = useState<'privacy' | 'terms' | 'cookie' | 'compliance' | null>(null);

  useEffect(() => {
    const handleNavigateService = (e: Event) => {
      const customEvent = e as CustomEvent;
      handleServiceClick(customEvent.detail);
    };

    const handleNavigateLegal = (e: Event) => {
      const customEvent = e as CustomEvent;
      setSelectedLegal(customEvent.detail);
      setSelectedService(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('navigate-service', handleNavigateService);
    window.addEventListener('navigate-legal', handleNavigateLegal);

    return () => {
      window.removeEventListener('navigate-service', handleNavigateService);
      window.removeEventListener('navigate-legal', handleNavigateLegal);
    };
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedLegal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setSelectedLegal(null);
    // Scroll to services section
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToHome = () => {
    setSelectedService(null);
    setSelectedLegal(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentService = servicesData.find(s => s.id === selectedService);

  // Show Legal Page
  if (selectedLegal) {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome}
          onNavigateToSection={(sectionId) => {
            setSelectedLegal(null);
            setSelectedService(null);
            setTimeout(() => {
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        />
        <main>
          <LegalPage type={selectedLegal} onBack={handleBackToHome} />
        </main>
        <Footer />
      </div>
    );
  }

  // Show Service Detail Page
  if (selectedService && currentService) {
    return (
      <div className="min-h-screen">
        <Header 
          onNavigateHome={handleBackToHome}
          onNavigateToSection={(sectionId) => {
            setSelectedService(null);
            setSelectedLegal(null);
            setTimeout(() => {
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
        />
        <main>
          <ServiceDetail service={currentService} onBack={handleBackToServices} />
        </main>
        <Footer />
      </div>
    );
  }

  // Show Main Page
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FullPageImage />
        <About />
        <Services onServiceClick={handleServiceClick} />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
