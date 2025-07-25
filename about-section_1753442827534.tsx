import React from "react";
import { useEffect, useRef } from "react";
import { portfolioData } from "../client/src/lib/portfolio-data";

export function AboutSection() {
  const { personalInfo, skills } = portfolioData;
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              const targetWidth = bar.getAttribute('data-width');
              (bar as HTMLElement).style.width = `${targetWidth}%`;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'technical': return 'from-primary to-accent';
      case 'analytics': return 'from-secondary to-success';
      case 'management': return 'from-secondary to-success';
      case 'finance': return 'from-primary to-accent';
      default: return 'from-primary to-accent';
    }
  };

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de <span className="text-primary">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resumen Profesional</h3>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-mono font-bold text-primary mb-2">
                  {personalInfo.stats.experience}
                </div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-100">
                <div className="text-3xl font-mono font-bold text-secondary mb-2">
                  {personalInfo.stats.companies}
                </div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-mono font-bold text-primary mb-2">
                  {personalInfo.stats.specializations}
                </div>
                <div className="text-sm text-gray-600">Especializaciones</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-green-100">
                <div className="text-3xl font-mono font-bold text-secondary mb-2">
                  {personalInfo.stats.trainingHours}
                </div>
                <div className="text-sm text-gray-600">Horas de Capacitación</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8" ref={skillsRef}>
            <h3 className="text-2xl font-bold text-gray-900">Habilidades Técnicas</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`skill-bar bg-gradient-to-r ${getSkillColor(skill.category)} h-3 rounded-full transition-all duration-2000 ease-out`}
                      data-width={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
