import { Lightbulb } from "lucide-react";
import React from "react";
import { portfolioData } from "../client/src/lib/portfolio-data";

export function HobbiesSection() {
  const { hobbies, philosophy } = portfolioData;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'from-primary to-accent';
      case 'secondary': return 'from-secondary to-success';
      case 'orange': return 'from-orange-500 to-red-500';
      case 'purple': return 'from-purple-500 to-pink-500';
      case 'teal': return 'from-teal-500 to-cyan-500';
      case 'indigo': return 'from-indigo-500 to-blue-600';
      case 'yellow': return 'from-yellow-500 to-orange-500';
      case 'rose': return 'from-rose-500 to-pink-500';
      default: return 'from-primary to-accent';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'primary': return 'border-blue-100';
      case 'secondary': return 'border-green-100';
      case 'orange': return 'border-orange-100';
      case 'purple': return 'border-purple-100';
      case 'teal': return 'border-teal-100';
      case 'indigo': return 'border-indigo-100';
      case 'yellow': return 'border-yellow-100';
      case 'rose': return 'border-rose-100';
      default: return 'border-blue-100';
    }
  };

  const getIconEmoji = (iconName: string) => {
    switch (iconName) {
      case 'chart-pie': return '📊';
      case 'laptop-code': return '💻';
      case 'running': return '🏃‍♂️';
      case 'book-open': return '📚';
      case 'music': return '🎵';
      case 'handshake': return '🤝';
      case 'map-marked-alt': return '🗺️';
      case 'heart': return '❤️';
      default: return '📊';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="hobbies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hobbies e <span className="text-primary">Intereses</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Mis actividades personales que me mantienen inspirado, balanceado y en constante crecimiento personal y profesional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div 
              key={hobby.id} 
              className={`group bg-white p-8 rounded-2xl shadow-xl ${getBorderColor(hobby.color)} border hover:shadow-2xl transition-all duration-300 text-center`}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${getColorClasses(hobby.color)} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{getIconEmoji(hobby.icon)}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{hobby.title}</h3>
              <p className="text-gray-600 text-sm">{hobby.description}</p>
            </div>
          ))}
        </div>
        
        {/* Personal Philosophy */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Filosofía Personal</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              "{philosophy}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
