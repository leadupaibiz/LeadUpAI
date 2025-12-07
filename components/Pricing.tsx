import React from 'react';
import { PRICING_TIERS } from '../constants';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            No hidden fees. Just results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier) => (
            <div 
              key={tier.name}
              className={`relative p-8 rounded-3xl flex flex-col ${
                tier.highlighted 
                  ? 'bg-white border-2 border-primary-600 shadow-xl shadow-primary-900/10 scale-100 md:scale-105 z-10' 
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                  <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-slate-500 text-sm mt-1">{tier.description}</p>
              </div>

              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-slate-900">{tier.price}</span>
                {tier.period && (
                  <span className="text-slate-500 ml-2">{tier.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlighted ? 'primary' : 'secondary'} 
                className="w-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};