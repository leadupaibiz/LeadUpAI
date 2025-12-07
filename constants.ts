import { 
  Bot, 
  Zap, 
  Mail, 
  BarChart3, 
  Search, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  Dumbbell, 
  Scissors, 
  Camera, 
  Car, 
  Home, 
  Briefcase,
  FileSpreadsheet,
  ClipboardCheck
} from 'lucide-react';
import { NavItem, Feature, Step, Benefit, Industry, PricingTier } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#process' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
];

export const FEATURES: Feature[] = [
  {
    title: 'AI Lead Generation',
    description: 'Automatically find fresh leads using AI + Google Maps scraping. Just enter a city and niche to get a verified Google Sheet.',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Instant Lead Follow-Up',
    description: 'Capture leads from forms or sheets and reply in under 3 seconds with AI-personalized messages.',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: '7-Day Nurture Sequence',
    description: 'Automated email drips (Welcome, Social Proof, Value, Offer, CTA) to turn cold leads into warm clients.',
    icon: Mail,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Daily 8AM Summary',
    description: 'Start your day with an AI report: new leads, follow-up status, hot prospects, and pipeline health.',
    icon: BarChart3,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Mini CRM Dashboard',
    description: 'A centralized Google Sheet dashboard to manage leads, track conversations, and monitor status updates in real-time.',
    icon: FileSpreadsheet,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Smart Lead Capture',
    description: 'Custom-branded intake forms that instantly sync with your CRM and trigger your AI automation workflows.',
    icon: ClipboardCheck,
    color: 'bg-orange-100 text-orange-600',
  },
];

export const STEPS: Step[] = [
  {
    number: 1,
    title: 'Define Your Target',
    description: 'Simply input your niche (e.g., Dentists) and target city.',
  },
  {
    number: 2,
    title: 'AI Mines Data',
    description: 'Our system scrapes and verifies leads, creating a clean database.',
  },
  {
    number: 3,
    title: 'Instant Engagement',
    description: 'AI reaches out immediately via personalized SMS or Email.',
  },
  {
    number: 4,
    title: 'Nurture & Convert',
    description: 'Leads receive value-driven emails over 7 days to build trust.',
  },
  {
    number: 5,
    title: 'You Grow',
    description: 'Receive a daily summary while you focus on closing deals.',
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Never Miss a Lead',
    description: 'Speed to lead is everything. We ensure 100% response rate instantly.',
    icon: ShieldCheck,
  },
  {
    title: 'Respond 24/7',
    description: 'Your AI agent works while you sleep, handling inquiries at any time.',
    icon: Clock,
  },
  {
    title: 'Scale Without Hiring',
    description: 'Get the output of a full sales team for a fraction of the cost.',
    icon: TrendingUp,
  },
  {
    title: 'Works for Any Industry',
    description: 'Customizable AI persona adapts to your specific business tone.',
    icon: CheckCircle2,
  },
];

export const INDUSTRIES: Industry[] = [
  { name: 'Real Estate', icon: Home },
  { name: 'Gym & Fitness', icon: Dumbbell },
  { name: 'Beauty Salons', icon: Scissors },
  { name: 'Coaches', icon: Bot },
  { name: 'Photographers', icon: Camera },
  { name: 'Car Detailing', icon: Car },
  { name: 'Home Services', icon: Briefcase },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Setup & Launch',
    price: '$299',
    period: 'one-time',
    description: 'Complete system build-out tailored to your business.',
    features: [
      'Custom Lead Capture Form',
      'Google Sheet CRM Setup',
      'AI Instant Follow-Up Configuration',
      '7-Day Nurture Email Sequence',
      '1,000 Verified Leads Scraped',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Maintenance & Growth',
    price: '$29',
    period: '/month',
    description: 'Keep your automation running smooth and updated.',
    features: [
      'Daily 8AM AI Summary Reports',
      'Ongoing Server Maintenance',
      'Priority Email Support',
      'Monthly Strategy Call',
      'Pipeline Health Monitoring',
    ],
    cta: 'Subscribe',
    highlighted: true,
  },
];