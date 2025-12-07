import React, { useState } from 'react';
import { Button } from './ui/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thanks ${formData.name}! We will be in touch shortly.`);
    setFormData({ name: '', email: '', phone: '', businessType: '', city: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -skew-y-3 origin-top-left z-0" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Your Free Automation Audit
            </h2>
            <p className="text-lg text-slate-600">
              Fill out the form below to see how LeadUpAI can transform your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow outline-none"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow outline-none"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow outline-none"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow outline-none bg-white"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="real_estate">Real Estate</option>
                <option value="fitness">Gym & Fitness</option>
                <option value="beauty">Beauty & Wellness</option>
                <option value="home_services">Home Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Target City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow outline-none"
                placeholder="e.g. Austin, TX"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 mt-4">
              <Button type="submit" size="lg" className="w-full">
                Request Demo & Pricing
              </Button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By clicking "Request Demo", you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};