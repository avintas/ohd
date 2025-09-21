'use client';

import React from 'react';
import Link from 'next/link';

// Single slide data - Welcome slide only
const slideData = {
  id: 'welcome',
  title: 'THERE IS ONLY HOCKEY!',
  description: 'WHERE YOUR ❤️ LOVE FOR THE GAME IS ALL YOU NEED • 🔗 Share - "Hockey facts worth sharing" • 🔥 Motivate - "Quotes that inspire greatness" • 🧠 Challenge - "Trivia for true fans" • 💙 Support - "Encouragement for players"',
  image: '/gims/gim-00026.webp',
  ctaText: 'Try Out',
  ctaUrl: '#how-it-works',
  emoji: '🏒'
};

export function HeroSection() {

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Single Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[600px]">
          
          {/* Left Column - Content */}
          <div className="space-y-6 z-20 relative text-center lg:text-left">
            
            {/* Large Main Title */}
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                {slideData.title}
              </h1>
            </header>
            
            {/* Description with bullet points */}
            <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
              {slideData.description.split(' • ').map((point, index) => (
                <div key={index} className={`flex items-start space-x-3 ${index === 0 ? 'justify-center lg:justify-start' : 'justify-center lg:justify-start'}`}>
                  {index === 0 ? (
                    <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                      {point}
                    </span>
                  ) : (
                    <>
                      <span className="text-[#4cc9f0] mt-2">•</span>
                      <span className="whitespace-nowrap">{point}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href={slideData.ctaUrl}
                className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
              >
                <span className="text-[#4cc9f0] mr-2">{slideData.emoji}</span>
                <span>{slideData.ctaText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Empty placeholder */}
          <div className="relative z-20">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[#1a1f2e] rounded-2xl shadow-2xl border border-[#2d3748]">
              {/* Empty placeholder - consistent with other pages */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
