import { motion } from 'framer-motion';
import {
  CalendarCheck,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  UtensilsCrossed,
} from 'lucide-react';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="section-eyebrow">
                <UtensilsCrossed className="h-3.5 w-3.5 text-amber-400" />
                Onboarding
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's build your restaurant's next chapter
              </h2>
              <p className="mt-4 max-w-md text-slate-400">
                Whether you're a developer evaluating the stack or an owner ready to launch —
                book a demo call or request a custom quote tailored to your operation.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="#" className="btn-primary">
                <CalendarCheck className="h-4 w-4" />
                Schedule Demo Call
              </a>
              <a href="#" className="btn-ghost">
                <FileText className="h-4 w-4" />
                Get Custom Quote
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 via-emerald-400 to-indigo-500 text-ink">
              <UtensilsCrossed className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <div>
              <div className="font-display text-sm font-bold text-white">Savoria</div>
              <div className="text-xs text-slate-500">Next-Gen Restaurant Platform</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Savoria. All rights reserved.
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5 text-xs text-slate-600">
          Built with React, Tailwind & Framer Motion
          <ArrowRight className="h-3 w-3" />
          Crafted for production
        </div>
      </div>
    </footer>
  );
}
