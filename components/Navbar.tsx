"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Gets the current URL path (e.g., "/models")
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to point to actual pages instead of hash links
  const navLinks = [
    { name: 'Models', href: '/models' },
    { name: 'Technology', href: '/#tech' },
    { name: 'Compare', href: '/#compare' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-zinc-950/80 backdrop-blur-2xl border-b border-zinc-800 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
          <span className="text-white font-black tracking-widest uppercase text-sm">
            EVEEZ
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => {
            // Check if the current URL matches the link's destination
            const isActive = pathname.startsWith(link.href);
            
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`relative transition-colors duration-300 hover:text-white ${
                  isActive ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {link.name}
                {/* Subtle glowing dot underneath the active link */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="flex items-center">
          <button className="px-5 py-2.5 rounded-full bg-white text-zinc-950 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors hidden sm:block">
            Build & Price
          </button>
        </div>

      </div>
    </nav>
  );
}