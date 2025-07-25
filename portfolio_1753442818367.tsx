import { useEffect, useState } from "react";
import { Navigation } from "../components/portfolio/navigation";
import { ScrollProgress } from "../components/portfolio/scroll-progress";
import { HeroSection } from "../components/portfolio/hero-section";
import { AboutSection } from "../components/portfolio/about-section";
import { ExperienceSection } from "../components/portfolio/experience-section";
import { TrainingSection } from "../components/portfolio/training-section";
import { HobbiesSection } from "../components/portfolio/hobbies-section";
import { ContactSection } from "../components/portfolio/contact-section";
import { Linkedin, MessageCircle, Mail } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'training', 'hobbies', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation activeSection={activeSection} />
      
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TrainingSection />
      <HobbiesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Jorge Rodriguez Sobrino</h3>
            <p className="text-gray-400">Especialista en People Analytics & Gestión de RRHH</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 Jorge Rodriguez Sobrino. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
