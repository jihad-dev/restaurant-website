import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  ChefHat,
  BarChart3,
  CreditCard,
  Smartphone,
  Wallet,
  Banknote,
  Check,
  Clock,
  Flame,
  Bike,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
} from 'lucide-react';

type TabKey = 'checkout' | 'kds' | 'analytics';

const tabs: { key: TabKey; label: string; icon: typeof ShoppingCart }[] = [
  { key: 'checkout', label: 'Customer Checkout & Payment', icon: ShoppingCart },
  { key: 'kds', label: 'Live Kitchen Order Display', icon: ChefHat },
  { key: 'analytics', label: 'Admin Revenue & Analytics', icon: BarChart3 },
];

/* ---------- Checkout mock ---------- */
const cartItems = [
  { name: 'Margherita Pizza', qty: 1, price: 12.5 },
  { name: 'Truffle Pasta', qty: 2, price: 15.0 },
  { name: 'Caesar Salad', qty: 1, price: 8.0 },
];
const payOptions = [
  { name: 'bKash', icon: Smartphone, tint: 'text-pink-400' },
  { name: 'Nagad', icon: Wallet, tint: 'text-orange-400' },
  { name: 'Card', icon: CreditCard, tint: 'text-sky-400' },
  { name: 'Stripe', icon: CreditCard, tint: 'text-indigo-400' },
  { name: 'Cash', icon: Banknote, tint: 'text-emerald-400' },
];

function CheckoutMock() {
  const [selected, setSelected] = useState('bKash');
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const fee = 1.5;
  const total = subtotal + fee;

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* cart */}
      <div className="glass rounded-2xl p-5 lg:col-span-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-semibold text-white">Your Order</h4>
          <span className="text-xs text-slate-500">3 items</span>
        </div>
        <div className="mt-4 space-y-3">
          {cartItems.map((i) => (
            <div
              key={i.name}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400/15 text-amber-400 text-sm font-bold">
                  {i.qty}×
                </span>
                <span className="text-sm font-medium text-white">{i.name}</span>
              </div>
              <span className="text-sm font-semibold text-slate-300">
                ${(i.price * i.qty).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-1.5 border-t border-white/10 pt-4 text-sm">
          <div className="flex justify-between text-slate-400">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Processing fee</span>
            <span>${fee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-1 font-display text-lg font-bold text-white">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* payment options */}
      <div className="glass rounded-2xl p-5 lg:col-span-2">
        <h4 className="font-display text-base font-semibold text-white">Payment Method</h4>
        <div className="mt-4 space-y-2.5">
          {payOptions.map((p) => (
            <button
              key={p.name}
              onClick={() => setSelected(p.name)}
              className={`flex w-full items-center justify-between rounded-xl border p-3 transition-all duration-200 ${
                selected === p.name
                  ? 'border-amber-400/40 bg-amber-400/10'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/20'
              }`}
            >
              <span className="flex items-center gap-3">
                <p.icon className={`h-5 w-5 ${p.tint}`} />
                <span className="text-sm font-medium text-white">{p.name}</span>
              </span>
              <span
                className={`grid h-5 w-5 place-items-center rounded-full border ${
                  selected === p.name
                    ? 'border-amber-400 bg-amber-400 text-ink'
                    : 'border-white/20'
                }`}
              >
                {selected === p.name && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
            </button>
          ))}
        </div>
        <button className="btn-primary mt-4 w-full">
          <CreditCard className="h-4 w-4" />
          Pay ${total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

/* ---------- KDS mock ---------- */
const kdsOrders = [
  { id: '#1042', table: 'T-12', items: ['Margherita Pizza', 'Cola'], status: 'cooking', elapsed: '4m' },
  { id: '#1043', table: 'T-05', items: ['Truffle Pasta ×2', 'Garlic Bread'], status: 'pending', elapsed: '1m' },
  { id: '#1044', table: 'Takeaway', items: ['Caesar Salad', 'Lemonade'], status: 'ready', elapsed: '7m' },
  { id: '#1045', table: 'T-09', items: ['BBQ Ribs', 'Fries'], status: 'cooking', elapsed: '6m' },
];
const statusMeta: Record<string, { label: string; icon: typeof Clock; tint: string }> = {
  pending: { label: 'Pending', icon: Clock, tint: 'text-amber-400 bg-amber-400/10 border-amber-400/30' },
  cooking: { label: 'Cooking', icon: Flame, tint: 'text-orange-400 bg-orange-400/10 border-orange-400/30' },
  ready: { label: 'Ready', icon: Bike, tint: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30' },
};

function KDSMock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {kdsOrders.map((o) => {
        const m = statusMeta[o.status];
        return (
          <div key={o.id} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display text-base font-bold text-white">{o.id}</div>
                <div className="text-xs text-slate-500">{o.table}</div>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${m.tint}`}
              >
                <m.icon className="h-3.5 w-3.5" />
                {m.label}
              </span>
            </div>
            <div className="mt-4 space-y-1.5">
              {o.items.map((it) => (
                <div
                  key={it}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  {it}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="text-xs text-slate-500">Elapsed {o.elapsed}</span>
              <button className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10">
                Advance →
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Analytics mock ---------- */
const bars = [40, 55, 35, 70, 60, 85, 95];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const kpis = [
  { label: "Today's Revenue", value: '$2,840', delta: '+18%', icon: DollarSign, tint: 'text-emerald-400' },
  { label: 'Orders', value: '142', delta: '+12%', icon: ShoppingCart, tint: 'text-amber-400' },
  { label: 'Avg Order Value', value: '$20', delta: '+5%', icon: TrendingUp, tint: 'text-indigo-400' },
];

function AnalyticsMock() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {kpis.map((k) => (
        <div key={k.label} className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <span className={`grid h-10 w-10 place-items-center rounded-xl bg-white/5 ${k.tint}`}>
              <k.icon className="h-5 w-5" />
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
              <ArrowUpRight className="h-3.5 w-3.5" />
              {k.delta}
            </span>
          </div>
          <div className="mt-4 font-display text-2xl font-bold text-white">{k.value}</div>
          <div className="text-xs text-slate-400">{k.label}</div>
        </div>
      ))}

      <div className="glass rounded-2xl p-5 lg:col-span-3">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-base font-semibold text-white">Weekly Revenue</h4>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Revenue
          </div>
        </div>
        <div className="mt-6 flex h-44 items-end justify-between gap-3">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
                className="w-full rounded-t-lg bg-gradient-to-t from-amber-500/40 via-amber-400 to-emerald-400"
                style={{ minHeight: 8 }}
              />
              <span className="text-[11px] text-slate-500">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [tab, setTab] = useState<TabKey>('checkout');

  return (
    <section id="showcase" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <BarChart3 className="h-3.5 w-3.5 text-indigo-400" />
            Live UI Switcher
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See the product, live
          </h2>
          <p className="mt-4 text-slate-400">
            Switch between real interface mockups — the customer checkout, the kitchen display,
            and the admin analytics panel.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                tab === t.key
                  ? 'border-transparent bg-gradient-to-r from-amber-400 to-emerald-400 text-ink'
                  : 'border-white/10 bg-white/[0.02] text-slate-300 hover:text-white'
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Window frame */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-ink2/60 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-amber-400/70" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-slate-500">
              savoria.app / {tab}
            </span>
            <span className="ml-auto inline-flex items-center gap-1 text-xs text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Live preview
            </span>
          </div>
          <div className="p-5 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {tab === 'checkout' && <CheckoutMock />}
                {tab === 'kds' && <KDSMock />}
                {tab === 'analytics' && <AnalyticsMock />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
