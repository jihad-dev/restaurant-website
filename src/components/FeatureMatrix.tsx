import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ExternalLink,
  X,
  LucideIcon,
  Sparkles,
  Eye,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  preview_url?: string;
  tags?: string[];
};

type Tier = {
  id: string;
  label: string;
  icon: LucideIcon;
  tint: string;
  features: Feature[];
};

const tiers: Tier[] = [
  {
    id: "customer",
    label: "Customer Portal",
    icon: Users,
    tint: "from-amber-400 to-orange-500",
    features: [
      {
        icon: UtensilsCrossed,
        title: "Interactive Digital Menu",
        desc: "Rich menu with item images, variants, dynamic categories, and add-ons.",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Menu", "UX", "Ordering"],
      },
      {
        icon: Search,
        title: "Dynamic Filtering & Search",
        desc: "Instant search by category, price, dietary tags, and item availability.",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Filter", "Search"],
      },
      {
        icon: ShoppingCart,
        title: "Smart Cart & Direct Checkout",
        desc: "Quantity controls, promo codes, and integrated payment checkout modal.",
        image:
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Payments", "Cart"],
      },
      {
        icon: ClipboardList,
        title: "Real-time Order Tracker",
        desc: "Live order status pipeline: Pending → Cooking → Ready → Delivered.",
        image:
          "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Tracking", "Live"],
      },
      {
        icon: CalendarCheck,
        title: "Table Booking System",
        desc: "Reserve tables online with custom dates, party sizes, and guest notes.",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Reservation", "Tables"],
      },
   
    ],
  },
  {
    id: "admin",
    label: "Admin & Staff Dashboard",
    icon: LayoutDashboard,
    tint: "from-emerald-400 to-teal-500",
    features: [
      {
        icon: BarChart3,
        title: "Revenue & Sales Analytics",
        desc: "Interactive visual charts for daily, weekly, and monthly revenue metrics.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Charts", "Analytics"],
      },
      {
        icon: ClipboardList,
        title: "Order Status Manager",
        desc: "Manage live incoming orders and route them directly to kitchen displays.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Kitchen", "KDS"],
      },
      {
        icon: Edit3,
        title: "Menu Management (CRUD)",
        desc: "Create, edit pricing, toggle availability, and update menu items instantly.",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["CRUD", "Admin"],
      },
      {
        icon: ReceiptText,
        title: "Transaction Reports",
        desc: "Full automated payment settlement reports with gateway-wise breakdowns.",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Reports", "Finance"],
      },
         {
        icon: ClipboardList,
        title: "Real-Time Order Notification",
        desc: "Instant audio alert with sound effects and live push notifications when a new order arrives.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Audio", "Push"],
      },
    ],
  },
  {
    id: "tech",
    label: "Technology & Security",
    icon: ShieldCheck,
    tint: "from-indigo-400 to-violet-500",
    features: [
      {
        icon: Network,
        title: "Redux Toolkit State",
        desc: "Predictable, typed global state management across cart, auth, and orders.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Redux", "State"],
      },
      {
        icon: KeyRound,
        title: "JWT Authentication",
        desc: "Secure token-based auth with refresh tokens and role-based permissions.",
        image:
          "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["JWT", "Auth"],
      },
      {
        icon: Lock,
        title: "Protected Routes",
        desc: "Role-aware route guards protecting customer, staff, and admin areas.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["Guards", "Security"],
      },
      {
        icon: ShieldCheck,
        title: "SSL Encrypted Payments",
        desc: "End-to-end encryption on bKash, SSLCommerz, and Stripe payment flows.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["SSL", "Payments"],
      },
      {
        icon: ShieldCheck,
        title: "Secure Database",
        desc: "End-to-end encryption on bKash, SSLCommerz, and Stripe payment flows.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
        preview_url: "https://www.youtube.com",
        tags: ["SSL", "Payments"],
      },
    ],
  },
];

export default function FeatureMatrix() {
  const [activeTierIndex, setActiveTierIndex] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const currentTier = tiers[activeTierIndex];

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-400">
            <LayoutDashboard className="h-3.5 w-3.5" />
            Complete Feature Ecosystem
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A Three-Tier Platform, End to End
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Everything from the customer's first tap to the admin's revenue
            report — backed by real-time visuals and enterprise security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex justify-center border-b border-slate-800/80 pb-6">
          <div className="flex flex-wrap justify-center gap-2.5">
            {tiers.map((t, i) => {
              const Icon = t.icon;
              const isActive = activeTierIndex === i;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTierIndex(i)}
                  className={`group flex items-center gap-2.5 rounded-xl border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-amber-500/50 bg-slate-900 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/20"
                      : "border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br ${t.tint} text-slate-950 font-bold`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {t.label}
                  <span className="ml-1 rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                    {t.features.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTier.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {currentTier.features.map((f, i) => {
              const FeatureIcon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-slate-900 hover:shadow-xl hover:shadow-amber-500/5"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl bg-slate-950">
                      <img
                        src={f.image}
                        alt={f.title}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full border border-emerald-500/30 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-emerald-400 shadow-sm">
                        <Check className="h-3 w-3" />
                        Live Feature
                      </div>

                      {f.tags && f.tags.length > 0 && (
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                          {f.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-slate-900/80 border border-slate-700/50 px-2 py-0.5 text-[10px] font-medium text-slate-300 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content Header */}
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${currentTier.tint} text-slate-950 shadow-md`}
                      >
                        <FeatureIcon
                          className="h-4.5 w-4.5"
                          strokeWidth={2.2}
                        />
                      </span>
                      <div>
                        <h3 className="font-display text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                          {f.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400 line-clamp-2">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions & Animated Bump Button */}
                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-400 text-[11px]">
                      <Check className="h-3.5 w-3.5" />
                      Module Ready
                    </span>

                    {/* ENHANCED INTERACTIVE PREVIEW BUTTON */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9, rotate: -1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      onClick={() => setSelectedFeature(f)}
                      className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold shadow-md shadow-amber-500/5 hover:border-amber-400 hover:text-amber-300 transition-colors group/btn"
                    >
                      <Eye className="h-3.5 w-3.5 group-hover/btn:scale-110 transition-transform text-amber-400" />
                      <span>Interactive Preview</span>
                      <ExternalLink className="h-3 w-3 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* FULL WIDTH INTERACTIVE PREVIEW MODAL */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 sm:p-6 lg:p-10 backdrop-blur-md"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-2xl flex flex-col justify-between"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Full-Width Image Banner */}
                  <div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <img
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>

                  {/* Right Column: Feature Details */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                      <Sparkles className="h-4 w-4" /> Feature Spotlight
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {selectedFeature.title}
                    </h3>

                    <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                      {selectedFeature.desc}
                    </p>

                    {/* Associated Tags */}
                    {selectedFeature.tags && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {selectedFeature.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-semibold text-amber-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Status Indicator */}
                    <div className="mt-6 flex items-center gap-2 text-emerald-400 text-xs font-medium">
                      <Check className="h-4 w-4" /> Production Ready &
                      Integrated
                    </div>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Close Preview
                  </button>
                  {selectedFeature.preview_url && (
                    <a
                      href={selectedFeature.preview_url}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all flex items-center gap-2 shadow-lg shadow-amber-500/20"
                    >
                      Explore Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
