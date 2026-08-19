import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, Percent, TrendingUp, DollarSign, ShoppingBag } from 'lucide-react';

function Slider({
  label,
  value,
  set,
  min,
  max,
  step,
  suffix,
  icon: Icon,
  tint,
}: {
  label: string;
  value: number;
  set: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
  icon: typeof Clock;
  tint: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-300">
          <Icon className={`h-4 w-4 ${tint}`} />
          {label}
        </span>
        <span className="font-display text-base font-bold text-white">
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, #fbbf24 0%, #34d399 ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [orders, setOrders] = useState(150);
  const [avg, setAvg] = useState(18);
  const [commission, setCommission] = useState(12);

  const { monthlyRevenue, feesSaved, hoursSaved, volumeUp } = useMemo(() => {
    const monthlyRevenue = orders * avg * 30;
    const feesSaved = Math.round((monthlyRevenue * commission) / 100);
    const hoursSaved = Math.round(orders * 0.4 * 30); // ~0.4h saved per order/day
    const volumeUp = Math.round(orders * 0.25);
    return { monthlyRevenue, feesSaved, hoursSaved, volumeUp };
  }, [orders, avg, commission]);

  const results = [
    { icon: DollarSign, label: 'Monthly Revenue', value: `$${monthlyRevenue.toLocaleString()}`, tint: 'from-amber-400 to-orange-500' },
    { icon: Percent, label: 'Commission Fees Saved / mo', value: `$${feesSaved.toLocaleString()}`, tint: 'from-emerald-400 to-teal-500' },
    { icon: Clock, label: 'Staff Hours Saved / mo', value: `${hoursSaved}h`, tint: 'from-indigo-400 to-violet-500' },
    { icon: TrendingUp, label: 'Extra Orders Capacity / day', value: `+${volumeUp}`, tint: 'from-sky-400 to-cyan-500' },
  ];

  return (
    <section id="roi" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Calculator className="h-3.5 w-3.5 text-emerald-400" />
            ROI & Business Impact
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Calculate your savings
          </h2>
          <p className="mt-4 text-slate-400">
            Drag the sliders to see how much time and commission you save by running your
            restaurant on Savoria.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Controls */}
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="space-y-7">
              <Slider label="Daily Orders" value={orders} set={setOrders} min={20} max={500} step={10} suffix="" icon={ShoppingBag} tint="text-amber-400" />
              <Slider label="Avg. Order Value" value={avg} set={setAvg} min={5} max={60} step={1} suffix="$" icon={DollarSign} tint="text-emerald-400" />
              <Slider label="Current Commission %" value={commission} set={setCommission} min={0} max={30} step={1} suffix="%" icon={Percent} tint="text-indigo-400" />
            </div>
            <p className="mt-8 text-xs text-slate-500">
              Estimates are illustrative. Actual results depend on your menu, volume, and current
              payment provider.
            </p>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            {results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass glass-hover flex flex-col justify-between rounded-2xl p-5"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${r.tint} text-ink`}>
                  <r.icon className="h-5 w-5" />
                </span>
                <div className="mt-6">
                  <div className="font-display text-2xl font-extrabold text-white">
                    {r.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-slate-400">{r.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


