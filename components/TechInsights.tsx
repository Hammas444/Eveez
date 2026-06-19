import React from 'react';
import { Cpu, Zap, ShieldAlert, BatteryCharging, Network } from 'lucide-react';

export default function TechInsights() {
  return (
    <section id="tech" className="relative w-full bg-zinc-950 py-32 overflow-hidden border-y border-zinc-900">
      
      {/* 1. Engineering Blueprint Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-zinc-900 text-zinc-400 border border-zinc-800 mb-6">
            <Network className="w-3 h-3 text-blue-500" />
            Under the Hood
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-6 leading-[0.9]">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-300">
              Invisible
            </span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Removing the combustion engine was just phase one. We are rethinking the entire architecture of movement using sub-atomic engineering and neural processing.
          </p>
        </div>

        {/* 2. Asymmetrical Tech Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          
          {/* Card 1: Solid State (Hero Feature - Spans 2 Columns) */}
          <div className="md:col-span-2 rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 md:p-10 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 flex flex-col justify-end">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-emerald-500/20 transition-all duration-700" />
            <BatteryCharging className="absolute top-8 left-8 w-12 h-12 text-emerald-400/50" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">Solid-State Integration</h3>
              <p className="text-zinc-400 font-light text-sm md:text-base max-w-md leading-relaxed">
                The 2026 milestone. A completely solid electrolyte architecture offering 30% more energy density while permanently eliminating the risk of thermal runaway. 
              </p>
            </div>
          </div>

          {/* Card 2: 800V Architecture (Tall Feature) */}
          <div className="rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 md:p-10 relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500 flex flex-col justify-end">
             <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-[60px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-amber-500/20 transition-all duration-700" />
             <Zap className="absolute top-8 left-8 w-10 h-10 text-amber-400/50" />
             
             <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2">800V Systems</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Ultra-thin, cool-running cabling enabling 350kW fast charging. Add 200 miles of range in just 12 minutes.
              </p>
             </div>
          </div>

          {/* Card 3: Neural OTA (Square Feature) */}
          <div className="rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 md:p-10 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500 flex flex-col justify-end">
             <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] translate-y-1/4 translate-x-1/4 group-hover:bg-blue-500/20 transition-all duration-700" />
             <Cpu className="absolute top-8 left-8 w-10 h-10 text-blue-400/50" />
             
             <div className="relative z-10">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">Neural Evolution</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Vehicles that improve while you sleep via AI-driven Over-The-Air powertrain optimizations.
              </p>
             </div>
          </div>

          {/* Card 4: Level 3 Autonomy (Spans 2 Columns) */}
          <div className="md:col-span-2 rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 p-8 md:p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-colors duration-500 flex flex-col justify-end">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <ShieldAlert className="absolute top-8 left-8 w-12 h-12 text-indigo-400/50" />
             
             <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">Level 3+ Autonomy</h3>
                <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-widest font-bold bg-indigo-500/20 text-indigo-300">Live Beta</span>
              </div>
              <p className="text-zinc-400 font-light text-sm md:text-base max-w-lg leading-relaxed">
                Next-generation LiDAR fused with high-resolution optical arrays. Experience true hands-free highway driving and predictive collision evasion operating at 120 computations per second.
              </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}