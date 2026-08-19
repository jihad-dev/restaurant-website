import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  LayoutDashboard,
  ShieldCheck,
  UtensilsCrossed,
  Search,
  ShoppingCart,
  ClipboardList,
  CalendarCheck,
  BarChart3,
  Edit3,
  ReceiptText,
  KeyRound,
  Lock,
  Network,
  Check,
} from 'lucide-react';

type Tier = {
  id: string;
  label: string;
  icon: typeof Users;
  tint: string;
  features: { icon: typeof UtensilsCrossed; title: string; desc: string }[];
};

const tiers: Tier[] = [
  {
    id: 'customer',
    label: 'Customer Portal',
    icon: Users,
    tint: 'from-amber-400 to-orange-500',
    features: [
      { icon: UtensilsCrossed, title: 'Interactive Digital Menu', desc: 'Rich menu with item images, variants, and add-ons.' },
      { icon: Search, title: 'Dynamic Filtering & Search', desc: 'Filter by category, price, dietary tags, and availability.' },
      { icon: ShoppingCart, title: 'Smart Cart with Checkout', desc: 'Quantity controls, promo codes, and integrated payment checkout.' },
      { icon: ClipboardList, title: 'Real-time Order Status', desc: 'Pipeline tracking: Pending → Cooking → Out for Delivery.' },
      { icon: CalendarCheck, title: 'Table Booking Form', desc: 'Reserve tables with date, time, party size, and special notes.' },
    ],
  },
  {
    id: 'admin',
    label: 'Admin & Staff Dashboard',
    icon: LayoutDashboard,
    tint: 'from-emerald-400 to-teal-500',
    features: [
      { icon: BarChart3, title: 'Revenue & Sales Analytics', desc: 'Interactive charts for daily, weekly, and monthly revenue trends.' },
      { icon: ClipboardList, title: 'Order Status Manager', desc: 'Update and assign orders across the kitchen and delivery pipeline.' },
      { icon: Edit3, title: 'Menu Item CRUD', desc: 'Create, update, price, and toggle availability of menu items in real time.' },
      { icon: ReceiptText, title: 'Transaction History', desc: 'Full payment settlement reports with method-wise breakdowns.' },
    ],
  },
  {
    id: 'tech',
    label: 'Technology & Security',
    icon: ShieldCheck,
    tint: 'from-indigo-400 to-violet-500',
    features: [
      { icon: Network, title: 'Redux Toolkit State', desc: 'Predictable, typed global state management across the app.' },
      { icon: KeyRound, title: 'JWT Authentication', desc: 'Secure token-based auth with refresh and role claims.' },
      { icon: Lock, title: 'Protected Routes', desc: 'Role-aware route guards for customer, staff, and admin areas.' },
      { icon: ShieldCheck, title: 'SSL/TLS Encrypted Transactions', desc: 'End-to-end encryption on every payment and data exchange.' },
    ],
  },
];

export default function FeatureMatrix() {
  const [active, setActive] = useState(0);
  const tier = tiers[active];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <LayoutDashboard className="h-3.5 w-3.5 text-amber-400" />
            Complete Feature Ecosystem
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A three-tier platform, end to end
          </h2>
          <p className="mt-4 text-slate-400">
            Everything from the customer's first tap to the admin's revenue report — secured by
            enterprise-grade auth and encryption.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tiers.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'border-white/20 bg-white/[0.07] text-white'
                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white'
              }`}
            >
              <span
                className={`grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br ${t.tint} text-ink`}
              >
                <t.icon className="h-4 w-4" />
              </span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {tier.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="glass glass-hover group rounded-2xl p-6"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${tier.tint} text-ink transition-transform duration-300 group-hover:scale-110`}
                >
                  <f.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <h4 className="mt-5 font-display text-lg font-semibold text-white">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Check className="h-3.5 w-3.5" />
                  Included
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
