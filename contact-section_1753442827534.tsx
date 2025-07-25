import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "../../hooks/use-toast";
import React from "react";
import { portfolioData } from "../client/src/lib/portfolio-data";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  // Simulate form submission since this is now a client-only app
  const handleFormSubmit = async (data: ContactForm) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
      return;
    }
    await handleFormSubmit(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Conectamos?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estoy abierto a nuevas oportunidades profesionales y colaboraciones. 
            Conversemos sobre cómo puedo aportar valor a tu organización.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="text-xl w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="opacity-90">{personalInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="text-xl w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="opacity-90">{personalInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="text-xl w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ubicación</h3>
                <p className="opacity-90">{personalInfo.location}</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                />
              </div>
              <div>
                <Textarea
                  rows={4}
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors duration-300 disabled:opacity-50"
              >
                {contactMutation.isPending ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
