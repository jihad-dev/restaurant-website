import { motion } from 'framer-motion';
import {
  Atom,
  Paintbrush,
  Boxes,
  Server,
  CreditCard,
  Smartphone,
  ShieldCheck,
  Layers,
} from 'lucide-react';

const stack = [
  { name: 'React.js', icon: Atom, tint: 'from-sky-400/20 to-sky-600/10 text-sky-400' },
  { name: 'Tailwind CSS', icon: Paintbrush, tint: 'from-cyan-400/20 to-cyan-600/10 text-cyan-400' },
  { name: 'Redux Toolkit', icon: Boxes, tint: 'from-violet-400/20 to-violet-600/10 text-violet-400' },
  { name: 'Node.js / FastAPI', icon: Server, tint: 'from-emerald-400/20 to-emerald-600/10 text-emerald-400' },
  { name: 'Stripe', icon: CreditCard, tint: 'from-indigo-400/20 to-indigo-600/10 text-indigo-400' },
  { name: 'SSLCommerz', icon: ShieldCheck, tint: 'from-emerald-400/20 to-emerald-600/10 text-emerald-400' },
  { name: 'bKash', icon: Smartphone, tint: 'from-pink-400/20 to-pink-600/10 text-pink-400' },
  { name: 'JWT Auth', icon: Layers, tint: 'from-amber-400/20 to-amber-600/10 text-amber-400' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Layers className="h-3.5 w-3.5 text-indigo-400" />
            Built With
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A modern, production-grade stack
          </h2>
          <p className="mt-4 text-slate-400">
            Frontend to payments — every layer chosen for performance, security, and scale.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className={`glass glass-hover flex items-center gap-3 rounded-2xl bg-gradient-to-br ${s.tint} p-4`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                <s.icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold text-white">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
