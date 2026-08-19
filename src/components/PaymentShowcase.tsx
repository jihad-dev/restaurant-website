import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CreditCard,
  Wallet,
  Smartphone,
  Banknote,
  ShieldCheck,
  FileText,
  RefreshCw,
  Webhook,
  CheckCircle2,
  ShoppingCart,
  ArrowRight,
} from 'lucide-react';

const methods = [
  { name: 'SSLCommerz', icon: ShieldCheck, tint: 'from-emerald-400/20 to-emerald-600/10' },
  { name: 'bKash', icon: Smartphone, tint: 'from-pink-400/20 to-pink-600/10' },
  { name: 'Nagad', icon: Wallet, tint: 'from-orange-400/20 to-orange-600/10' },
  { name: 'Stripe', icon: CreditCard, tint: 'from-indigo-400/20 to-indigo-600/10' },
  { name: 'Credit / Debit', icon: CreditCard, tint: 'from-sky-400/20 to-sky-600/10' },
  { name: 'Cash on Delivery', icon: Banknote, tint: 'from-amber-400/20 to-amber-600/10' },
];

const steps = [
  { icon: ShoppingCart, title: 'Selection', desc: 'Customer browses the interactive digital menu and adds items to a smart cart.' },
  { icon: CreditCard, title: 'Payment Option', desc: 'Choose from bKash, Nagad, Stripe, Card, or Cash on Delivery — all in one checkout.' },
  { icon: Webhook, title: 'Instant Confirmation', desc: 'Automated webhook sync verifies the transaction and updates the kitchen in real time.' },
  { icon: FileText, title: 'Invoice Generation', desc: 'A digital PDF invoice is generated and delivered to the customer instantly.' },
];

const benefits = [
  { icon: Webhook, title: 'Automated Webhook Sync', desc: 'Payment status syncs to orders, kitchen, and admin dashboard without manual touch.' },
  { icon: FileText, title: 'Instant Digital Invoice', desc: 'PDF-ready invoices generated on confirmation, ready for download and email.' },
  { icon: RefreshCw, title: 'Refund Handling', desc: 'Full and partial refunds with audit trails and automatic ledger updates.' },
  { icon: ShieldCheck, title: 'Transaction Security', desc: 'SSL/TLS encrypted, PCI-aware flow with JWT-protected payment endpoints.' },
];

export default function PaymentShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="payments" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <CreditCard className="h-3.5 w-3.5 text-emerald-400" />
            Integrated Payment Gateway
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One checkout, every payment method
          </h2>
          <p className="mt-4 text-slate-400">
            From bKash to Stripe, every transaction flows through a secure, automated pipeline —
            with instant confirmation and invoice generation.
          </p>
        </div>

        {/* Interactive flow */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">
                  Interactive Payment Flow
                </h3>
                <span className="text-xs text-slate-500">Auto-advancing</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {steps.map((s, i) => (
                  <button
                    key={s.title}
                    onClick={() => setActive(i)}
                    className={`relative rounded-2xl border p-3 text-left transition-all duration-300 ${
                      active === i
                        ? 'border-amber-400/40 bg-amber-400/10'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span
                      className={`grid h-9 w-9 place-items-center rounded-lg ${
                        active === i
                          ? 'bg-gradient-to-br from-amber-400 to-emerald-500 text-ink'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div className="mt-2 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                      Step {i + 1}
                    </div>
                    <div className="text-sm font-semibold text-white">{s.title}</div>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber-400/20 to-indigo-500/20 text-amber-400">
                      {(() => {
                        const Icon = steps[active].icon;
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </span>
                    <div>
                      <div className="font-display text-base font-semibold text-white">
                        {steps[active].title}
                      </div>
                      <div className="text-sm text-slate-400">{steps[active].desc}</div>
                    </div>
                  </div>

                  {/* progress */}
                  <div className="mt-5 flex items-center gap-2">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                          i <= active ? 'bg-gradient-to-r from-amber-400 to-emerald-400' : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Payment methods */}
          <div className="lg:col-span-5">
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">
                Supported Methods
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Six payment rails, one unified API.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {methods.map((m) => (
                  <motion.div
                    key={m.name}
                    whileHover={{ y: -3 }}
                    className={`group flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br ${m.tint} p-3.5`}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white">
                      <m.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-white">{m.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                PCI-aware, SSL/TLS encrypted, webhook-verified.
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-amber-400/15 to-indigo-500/15 text-amber-400">
                <b.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-4 font-display text-base font-semibold text-white">
                {b.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#showcase" className="btn-ghost">
            See the checkout in action
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
