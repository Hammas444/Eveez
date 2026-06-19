import React from 'react';
import CarShowcaseGrid from '@/components/CarShowcaseGrid';


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