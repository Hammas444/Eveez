"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { EVCar } from '@/data/evCars';
import { Info } from 'lucide-react';

export default function InteractiveGallery({ car }: { car: EVCar }) {
  const galleryImages = car.images || [car.imageUrl];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-screen bg-zinc-950 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Central alignment spine for the whole page */}
      <div className="max-w-7xl mx-auto flex flex-col w-full">
        
        {/* 1. Header Row (Perfectly left and right aligned) */}
        <div className="w-full mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest block mb-1">
              {car.brand}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              {car.name}
            </h1>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-zinc-500 text-[10px] uppercase tracking-widest block mb-0.5">
              Base MSRP
            </span>
            <span className="text-xl md:text-2xl font-bold text-white">
              {car.priceStarting}
            </span>
          </div>
        </div>

        {/* 2. Massive Active Image Viewer (Aspect ratio matching standard automotive photography) */}
        <div className="w-full aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] relative rounded-2xl overflow-hidden mb-6 shadow-2xl bg-zinc-900">
          <Image 
            key={activeIndex} 
            src={galleryImages[activeIndex]} 
            alt={`${car.name} View ${activeIndex + 1}`}
            fill
            priority
            /* object-cover ensures the photo edges run perfectly line-to-line with the text */
            className="object-cover transition-all duration-500 animate-[fadeIn_0.3s_ease-out]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        {/* 3. Horizontal Thumbnail Carousel (Perfect grid alignment) */}
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mb-12">
          {galleryImages.map((img, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[16/10] w-full rounded-lg overflow-hidden transition-all duration-300 bg-zinc-900 ${
                activeIndex === index 
                  ? 'opacity-100 ring-2 ring-white scale-[1.02]' 
                  : 'opacity-40 hover:opacity-80'
              }`}
            >
              <Image 
                src={img} 
                alt={`Thumbnail view ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 150px"
              />
            </button>
          ))}
        </div>

        {/* 4. Specs Bento Grid (Perfectly fits lower boundary) */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2 lg:col-span-4 bg-zinc-900/30 border border-zinc-900 rounded-xl p-6 flex items-start gap-4">
            <Info className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" />
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              {car.description}
            </p>
          </div>
          
          {car.keySpecs.map((spec, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-6 flex flex-col justify-center">
              <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                {spec.label}
              </span>
              <span className="text-xl font-bold text-white">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}