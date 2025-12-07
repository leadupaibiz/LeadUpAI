import React from 'react';
import { Zap, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Zap size={24} fill="currentColor" className="text-primary-500" />
              <span className="font-bold text-xl">LeadUpAI</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Empowering small businesses with enterprise-grade AI automation. Find leads, follow up instantly, and grow revenue on autopilot.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#process" className="hover:text-primary-400 transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} LeadUpAI. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Automation.</p>
        </div>
      </div>
    </footer>
  );
};