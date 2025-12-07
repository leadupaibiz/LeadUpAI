import React from 'react';
import { INDUSTRIES } from '../constants';

export const Industries: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Trusted by Businesses In</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {INDUSTRIES.map((industry) => (
            <div 
              key={industry.name} 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all cursor-default"
            >
              <industry.icon size={18} className="text-primary-400" />
              <span className="font-medium text-sm md:text-base">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};