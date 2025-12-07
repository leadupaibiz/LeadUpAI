import React from 'react';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                <benefit.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Automate?
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              In the modern economy, speed is the currency of success. LeadUpAI doesn't just generate leads; it nurtures them instantly, ensuring no opportunity slips through the cracks.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                Replace manual data entry with AI precision
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                Consistent messaging across every channel
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-600"></div>
                Data-driven insights delivered daily
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};