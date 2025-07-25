import React from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { portfolioData } from "../client/src/lib/portfolio-data";

export function HeroSection() {
  const { personalInfo } = portfolioData;

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" id="hero">
      <div className="data-grid absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Professional avatar */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center text-white text-6xl font-bold">
            JRS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Jorge Rodriguez
            <span className="text-primary block">Sobrino</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-blue-100">
              <span className="text-primary mr-2">📊</span>
              <span className="font-semibold">People Analytics</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-green-100">
              <span className="text-secondary mr-2">👥</span>
              <span className="font-semibold">Gestión RRHH</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 shadow-lg border border-blue-100">
              <span className="text-accent mr-2">💰</span>
              <span className="font-semibold">Finanzas</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
