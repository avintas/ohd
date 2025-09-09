import React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-[#0a0e1a] py-4 px-4 md:px-6 2xl:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Left aligned */}
        <Link 
          href="/" 
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-full text-white font-bold text-lg md:text-xl hover:bg-blue-700 transition-colors duration-200 border-2 border-[#4cc9f0]"
          aria-label="OnlyHockey home"
        >
          OH
        </Link>
        
        {/* Navigation - Right aligned */}
        <nav className="flex items-center gap-4 md:gap-8" aria-label="Main navigation">
          <Link 
            href="/hockey-trivia" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200 text-sm md:text-base"
            aria-label="Play hockey trivia games"
          >
            Hockey Trivia
          </Link>
          <Link 
            href="/uplift" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200 text-sm md:text-base"
            aria-label="Access Uplift features"
          >
            Uplift
          </Link>
          <Link 
            href="/cast" 
            className="text-[#a0aec0] hover:text-[#4cc9f0] transition-colors duration-200 text-sm md:text-base"
            aria-label="Listen to hockey podcasts"
          >
            Cast
          </Link>
        </nav>
      </div>
    </header>
  );
}
