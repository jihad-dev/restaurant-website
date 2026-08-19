import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 transition-all duration-700 ${
        isLoading
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background Glow Effect */}
      <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Icon Wrapper */}
        <div className="relative flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10 animate-bounce">
            <UtensilsCrossed size={36} className="text-amber-400" />
          </div>
          {/* Outer Rotating Ring */}
          <div className="absolute -inset-2 rounded-3xl border-2 border-dashed border-amber-500/40 animate-[spin_8s_linear_infinite]" />
        </div>

        {/* Brand / Loading Text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold bg-gradient-to-r from-slate-100 via-amber-200 to-amber-500 bg-clip-text text-transparent tracking-wide">
            RESTAURANT OS
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium tracking-wider uppercase">
            <span>Loading Experience</span>
            <span className="flex gap-1 ml-1">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
          <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full animate-[preloader-bar_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;