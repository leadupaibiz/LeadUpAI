import React from 'react';
import { STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* Left Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We've simplified the complex world of lead generation into a predictable, automated machine. You input the target; we deliver the results.
            </p>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  8
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Daily Report</p>
                  <p className="font-bold text-slate-900">8:00 AM</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-slate-100 rounded-full w-3/4"></div>
                <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                <div className="h-2 bg-slate-100 rounded-full w-5/6"></div>
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">"Your morning summary is ready..."</p>
            </div>
          </div>

          {/* Right Steps */}
          <div className="lg:w-2/3 grid gap-8">
            {STEPS.map((step, index) => (
              <div 
                key={step.number} 
                className="relative flex gap-6 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary-600/20">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line (except for last item) */}
                {index !== STEPS.length - 1 && (
                  <div className="absolute left-[3.25rem] top-20 bottom-[-2rem] w-0.5 bg-slate-100 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};