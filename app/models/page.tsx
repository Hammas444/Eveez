import React from 'react';
import CarShowcaseGrid from '@/components/CarShowcaseGrid';

export const metadata = {
  title: 'Models | VoltDrive Collection',
  description: 'Explore our 2026 fleet of high-performance electric vehicles.',
};

export default function ModelsPage() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-20">
      {/* 
        You can add a dedicated page header here if you want, 
        or just let the Showcase Grid take over! 
      */}
      <div className="pt-12">
        <CarShowcaseGrid />
      </div>
      
      
    </main>
  );
}