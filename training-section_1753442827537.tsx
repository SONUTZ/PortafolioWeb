import React from "react";
import { GraduationCap, TrendingUp, Calculator, Users } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { portfolioData } from "../client/src/lib/portfolio-data";

export function TrainingSection() {
  const { training, education } = portfolioData;

  const chartData = training.map(item => ({
    name: item.title,
    value: item.hours,
    color: item.color === 'primary' ? '#3B82F6' : 
           item.color === 'secondary' ? '#059669' : 
           item.color === 'purple' ? '#8B5CF6' : '#3B82F6'
  }));

  const totalHours = training.reduce((sum, item) => sum + item.hours, 0);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'chart-line': return TrendingUp;
      case 'calculator': return Calculator;
      case 'users': return Users;
      default: return TrendingUp;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'from-primary to-accent';
      case 'secondary': return 'from-secondary to-success';
      case 'purple': return 'from-purple-500 to-pink-500';
      default: return 'from-primary to-accent';
    }
  };

  return (
    <section className="py-20 bg-white" id="training">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Capacitaciones y <span className="text-primary">Certificaciones</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto border border-blue-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{education.degree}</h3>
              <p className="text-lg text-gray-600">{education.institution}</p>
            </div>
          </div>
        </div>
        
        {/* Specializations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {training.map((item) => {
            const Icon = getIconComponent(item.icon);
            
            return (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-300 group">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(item.color)} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className={`font-semibold mb-2 ${
                    item.color === 'primary' ? 'text-primary' : 
                    item.color === 'secondary' ? 'text-secondary' : 
                    'text-purple-600'
                  }`}>
                    {item.institution}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">{item.period}</div>
                  <div className={`rounded-full px-4 py-2 text-sm font-mono ${
                    item.color === 'primary' ? 'bg-blue-50 text-primary' :
                    item.color === 'secondary' ? 'bg-green-50 text-secondary' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {item.hours} horas académicas
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Training Analytics */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Análisis de Capacitación</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Distribución de Horas por Especialización</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} horas`, 'Duración']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Timeline Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Línea de Tiempo de Capacitaciones</h4>
              <div className="space-y-4">
                {training.map((item) => (
                  <div key={item.id} className={`flex items-center justify-between p-3 rounded-lg ${
                    item.color === 'primary' ? 'bg-blue-50' :
                    item.color === 'secondary' ? 'bg-green-50' :
                    'bg-purple-50'
                  }`}>
                    <span className={`font-semibold ${
                      item.color === 'primary' ? 'text-primary' :
                      item.color === 'secondary' ? 'text-secondary' :
                      'text-purple-600'
                    }`}>
                      {item.period.split(' - ')[0]}
                    </span>
                    <span className="text-gray-700 flex-1 mx-4">{item.title} ({item.institution})</span>
                    <span className={`text-sm font-mono text-white px-2 py-1 rounded ${
                      item.color === 'primary' ? 'bg-primary' :
                      item.color === 'secondary' ? 'bg-secondary' :
                      'bg-purple-600'
                    }`}>
                      {item.hours}h
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white text-center">
                <div className="text-2xl font-bold font-mono">{totalHours}</div>
                <div className="text-sm opacity-90">Total Horas de Especialización</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
