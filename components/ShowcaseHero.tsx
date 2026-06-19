import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, PlayCircle } from 'lucide-react';

export default function ShowcaseHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] bg-zinc-950 overflow-hidden flex items-center">
      
      {/* 1. Massive Background Typography (2026 Trend) */}
      {/* This text is so huge it bleeds off the screen, acting as a textural background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full text-center z-0 pointer-events-none select-none opacity-[0.03]">
        <h1 className="text-[15vw] font-black tracking-tighter text-white whitespace-nowrap">
          ELECTRIC
        </h1>
      </div>

      {/* 2. Asymmetrical Image Placement */}
      {/* Pushing the car off-center to the right breaks the boring symmetrical grid */}
      <div className="absolute right-0 bottom-0 w-[85%] md:w-[70%] h-[80%] z-10 animate-fade-in">
        <div className="relative w-full h-full">
          {/* Replace with your high-res Taycan or Lucid image */}
          <Image 
            src="/images/taycan-hero.jpg"
            alt="2026 Featured EV"
            fill
            priority
            className="object-cover object-left-bottom rounded-tl-[4rem]"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
          {/* Fading the edges of the image smoothly into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>
      </div>

      {/* 3. The "Liquid Glass" Content Panel (Left Aligned) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
        <div className="w-full md:w-[500px] lg:w-[600px]">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
              Platform Exclusive
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase mb-6 leading-[0.9]">
            The 2026 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Taycan
            </span>
          </h2>

          {/* Frosted Glass Information Card overlaying the image slightly */}
          <div className="bg-zinc-900/40 backdrop-blur-2xl border border-zinc-700/50 rounded-3xl p-6 md:p-8 mb-8 shadow-2xl relative overflow-hidden">
            {/* Subtle glow inside the card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            
            <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed mb-6 relative z-10">
              The benchmark for electric driving dynamics. 800-volt architecture combined with legendary track handling. Explore the pinnacle of zero-emission mobility.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-zinc-700/50 pt-6 relative z-10">
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">0-60 MPH</span>
                <span className="text-lg font-bold text-white">2.3s</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Range</span>
                <span className="text-lg font-bold text-white">292 mi</span>
              </div>
              <div>
                <span className="block text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Architecture</span>
                <span className="text-lg font-bold text-white">800V</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-sm uppercase tracking-wider hover:bg-blue-400 hover:text-white transition-all duration-300">
              Configure Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-300">
              <PlayCircle className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              Watch 
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}