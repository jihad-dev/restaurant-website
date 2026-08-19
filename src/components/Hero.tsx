import { motion } from 'framer-motion';
import { Sparkles, Play, CreditCard, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, label: 'Payment Success Rate', value: '99.9%' },
  { icon: Zap, label: 'Order Sync', value: 'Real-Time' },
  { icon: TrendingUp, label: 'Commission Fees', value: 'Zero' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute left-0 top-60 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            Full-Stack Restaurant OS · Online Payments Built-in
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Next-Gen Restaurant Platform with{' '}
            <span className="gradient-text">Instant Online Payments</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Streamline customer food ordering, online table reservations, instant digital
            payments (bKash, Nagad, Stripe, Card), and real-time kitchen workflows — all in
            one unified system.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#showcase" className="btn-primary w-full sm:w-auto">
              <Play className="h-4 w-4" />
              Explore Interactive Demo
            </a>
            <a href="#payments" className="btn-ghost w-full sm:w-auto">
              <CreditCard className="h-4 w-4" />
              View Payment Flow
            </a>
          </motion.div>
        </motion.div>

        {/* Floating stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`glass glass-hover flex items-center gap-3 rounded-2xl p-4 ${
                i === 1 ? 'sm:scale-105' : ''
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400/20 to-indigo-500/20 text-amber-400">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
