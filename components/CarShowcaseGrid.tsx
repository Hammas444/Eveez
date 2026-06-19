import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EV_CARS_DATA } from '@/data/evCars';
import { Battery, Gauge, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

// 1. Add the limit prop to the component definition
export default function CarShowcaseGrid({ limit }: { limit?: number }) {
  const iconMap: Record<string, React.ReactNode> = {
    battery: <Battery className="w-4 h-4 text-zinc-400" />,
    gauge: <Gauge className="w-4 h-4 text-zinc-400" />,
    zap: <Zap className="w-4 h-4 text-zinc-400" />,
    shield: <ShieldCheck className="w-4 h-4 text-zinc-400" />,
    dollar: <span className="text-xs font-bold text-zinc-400">$</span>
  };

  // 2. Slice the array if a limit is provided, otherwise show everything
  const displayCars = limit ? EV_CARS_DATA.slice(0, limit) : EV_CARS_DATA;

  return (
    <section id="showroom" className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-32 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Section Typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[20vw] font-black tracking-tighter text-white whitespace-nowrap leading-none mt-10">
          THE FLEET
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mb-20">
        <h2 className="text-xs uppercase tracking-widest text-blue-500 font-bold mb-2">
          {limit ? "Featured Models" : "Complete Collection"}
        </h2>
        <p className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
          Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Excellence</span>
        </p>
      </div>

      {/* Alternating Editorial Layout using displayCars */}
      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {displayCars.map((car, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div key={car.id} className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center w-full group`}>
              
              <div className="w-full lg:w-8/12 relative h-[500px] lg:h-[650px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-zinc-900 shadow-2xl">
                <Image 
                  src={car.imageUrl} 
                  alt={`${car.brand} ${car.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:bg-none" />
                <span className={`absolute bottom-4 ${isReversed ? 'left-8' : 'right-8'} text-white/20 text-8xl font-black tracking-tighter z-10 hidden lg:block`}>
                  0{index + 1}
                </span>
              </div>

              <div className={`w-[95%] lg:w-5/12 relative z-20 ${isReversed ? 'lg:-mr-24' : 'lg:-ml-24'} -mt-32 lg:mt-0`}>
                <div className="bg-zinc-900/60 backdrop-blur-2xl border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative transition-all duration-500 group-hover:border-zinc-500/50">
                  
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${car.accentColor}`} />
                  <div className={`absolute -top-24 ${isReversed ? '-left-24' : '-right-24'} w-48 h-48 bg-gradient-to-r ${car.accentColor} rounded-full blur-[80px] opacity-20`} />

                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block mb-2">
                        {car.brand} • {car.type}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-white tracking-tighter mb-2">
                        {car.name}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/10 text-white border border-white/10">
                      {car.priceStarting}
                    </span>
                  </div>
                  
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8">
                    {car.description}
                  </p>

                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                    {car.keySpecs.map((spec, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                          {iconMap[spec.icon]}
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{spec.label}</span>
                        </div>
                        <span className="text-base font-bold text-white tracking-wide">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/car/${car.id}`} className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-medium text-sm hover:bg-white hover:text-black transition-all duration-300 group/btn">
                    <span>Explore Vehicle</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* 3. Render a "View All" button ONLY if the limit prop is being used */}
      {limit && (
        <div className="mt-32 flex justify-center relative z-20">
          <Link 
            href="/models" 
            className="group flex items-center gap-4 px-8 py-4 rounded-full bg-transparent border border-zinc-700 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            <span className="text-xs">View Full 2026 Fleet</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}

    </section>
  );
}