"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { EV_CARS_DATA, EVCar } from '@/data/evCars';
import { ArrowRightLeft, ChevronDown } from 'lucide-react';

export default function CompareHub() {
  const [carA, setCarA] = useState<EVCar>(EV_CARS_DATA[0]);
  const [carB, setCarB] = useState<EVCar>(EV_CARS_DATA[1]);

  // Helper function to extract numerical values from strings like "2.3 seconds" or "512 miles"
  const extractNumber = (str: string) => {
    const match = str.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  return (
    <section id="compare" className="w-full bg-zinc-950 py-32 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-zinc-900 text-blue-400 border border-zinc-800 mb-4">
            Analytics Engine
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase mb-4">
            Head-to-<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Head</span>
          </h2>
          <p className="text-zinc-400 font-light">Stack specifications. Weigh the metrics. Make the choice.</p>
        </div>

        {/* The Comparison Arena */}
        <div className="relative bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800 rounded-[2rem] p-6 md:p-12 shadow-2xl">
          
          {/* Central VS Badge */}
          <div className="absolute left-1/2 top-[120px] md:top-[160px] -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-zinc-950 border border-zinc-800 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <ArrowRightLeft className="w-6 h-6 text-zinc-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20">
            
            {/* Column A */}
            <div className="flex flex-col">
              {/* Custom Select Dropdown Styling */}
              <div className="relative w-full mb-8 group">
                <select 
                  className="w-full appearance-none bg-zinc-950/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 text-lg font-bold focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  value={carA.id}
                  onChange={(e) => setCarA(EV_CARS_DATA.find(c => c.id === e.target.value) || EV_CARS_DATA[0])}
                >
                  {EV_CARS_DATA.map(car => <option key={car.id} value={car.id}>{car.brand} {car.name}</option>)}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none group-hover:text-white transition-colors" />
              </div>

              <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-10 group">
                <Image src={carA.imageUrl} alt={carA.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${carA.accentColor}`} />
              </div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">Starting MSRP</span>
                  <span className="text-white text-2xl font-black tracking-tight">{carA.priceStarting}</span>
                </div>
                
                {/* Dynamically mapped spec bars */}
                {carA.keySpecs.map((spec, i) => {
                  const valA = extractNumber(spec.value);
                  const valB = extractNumber(carB.keySpecs[i]?.value || "0");
                  
                  // For 0-60 time, lower is better. For range/charge, higher is better.
                  const isSpeed = spec.label.includes("0-60");
                  const isWinner = isSpeed ? valA < valB : valA > valB;

                  return (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-xs uppercase tracking-widest">{spec.label}</span>
                        <span className={`font-bold ${isWinner ? 'text-white' : 'text-zinc-400'}`}>
                          {spec.value}
                        </span>
                      </div>
                      {/* Visual Indicator Bar */}
                      <div className="w-full h-1.5 bg-zinc-800/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: isSpeed ? `${(valB / valA) * 50}%` : `${(valA / Math.max(valA, valB)) * 100}%`, maxWidth: '100%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column B */}
            <div className="flex flex-col">
              <div className="relative w-full mb-8 group">
                <select 
                  className="w-full appearance-none bg-zinc-950/50 border border-zinc-700 text-white rounded-2xl px-6 py-4 text-lg font-bold focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                  value={carB.id}
                  onChange={(e) => setCarB(EV_CARS_DATA.find(c => c.id === e.target.value) || EV_CARS_DATA[1])}
                >
                  {EV_CARS_DATA.map(car => <option key={car.id} value={car.id}>{car.brand} {car.name}</option>)}
                </select>
                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none group-hover:text-white transition-colors" />
              </div>

              <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden mb-10 group">
                <Image src={carB.imageUrl} alt={carB.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${carB.accentColor}`} />
              </div>
              
              <div className="space-y-8">
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <span className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">Starting MSRP</span>
                  <span className="text-white text-2xl font-black tracking-tight">{carB.priceStarting}</span>
                </div>
                
                {carB.keySpecs.map((spec, i) => {
                  const valB = extractNumber(spec.value);
                  const valA = extractNumber(carA.keySpecs[i]?.value || "0");
                  
                  const isSpeed = spec.label.includes("0-60");
                  const isWinner = isSpeed ? valB < valA : valB > valA;

                  return (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-400 text-xs uppercase tracking-widest">{spec.label}</span>
                        <span className={`font-bold ${isWinner ? 'text-white' : 'text-zinc-400'}`}>
                          {spec.value}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-800/60 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-1000"
                          style={{ width: isSpeed ? `${(valA / valB) * 50}%` : `${(valB / Math.max(valA, valB)) * 100}%`, maxWidth: '100%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}