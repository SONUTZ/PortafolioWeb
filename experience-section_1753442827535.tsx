import React from "react";
import { CheckCircle, Building, TrendingUp, Users } from "lucide-react";
import { portfolioData } from "../client/src/lib/portfolio-data";

export function ExperienceSection() {
  const { experience } = portfolioData;

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'users': return Users;
      case 'chart-bar': return TrendingUp;
      case 'calculator': return TrendingUp;
      case 'coins': return TrendingUp;
      default: return Building;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary text-white border-blue-100';
      case 'secondary': return 'bg-secondary text-white border-green-100';
      case 'accent': return 'bg-accent text-white border-blue-100';
      case 'warning': return 'bg-warning text-white border-yellow-100';
      default: return 'bg-primary text-white border-blue-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-secondary h-full hidden md:block"></div>
            
            {/* Experience Items */}
            {experience.map((exp, index) => {
              const Icon = getIconComponent(exp.icon);
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.id} className="timeline-item mb-16 flex flex-col md:flex-row items-center">
                  {/* Content - Left side for even, right side for odd */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'} mb-8 md:mb-0 text-center`}>
                    <div className={`bg-white p-8 rounded-2xl shadow-xl border relative ${
                      isEven ? 'border-blue-100' : 'border-green-100'
                    }`}>
                      <div className={`absolute ${isEven ? '-top-3 -right-3' : '-top-3 -left-3'} ${getColorClasses(exp.color)} rounded-full p-3`}>
                        <Icon className="text-xl w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <h4 className={`text-lg font-semibold mb-3 ${
                        exp.color === 'primary' ? 'text-primary' : 
                        exp.color === 'secondary' ? 'text-secondary' :
                        exp.color === 'accent' ? 'text-accent' : 'text-warning'
                      }`}>
                        {exp.company}
                      </h4>
                      <div className="text-sm text-gray-500 mb-4 font-mono">{exp.period}</div>
                      <ul className="text-gray-700 text-left space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-success mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`hidden md:block w-6 h-6 ${getColorClasses(exp.color)} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Empty space for alignment */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}></div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Experience Analytics */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-blue-100">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="text-2xl text-primary w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sectores de Experiencia</h3>
            <p className="text-gray-600">Agroindustrial, Servicios, Retail, Seguridad</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-green-100">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-2xl text-secondary w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Crecimiento Profesional</h3>
            <p className="text-gray-600">Evolución desde Auxiliar hasta Analista Senior</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-accent-100">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-2xl text-accent w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Especializaciones</h3>
            <p className="text-gray-600">RRHH, Finanzas, Analytics, Administración</p>
          </div>
        </div>
      </div>
    </section>
  );
}
