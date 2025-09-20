import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function QuickActions() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Quick Actions
        </h2>
        <p className="text-lg text-[#a0aec0] mb-8 max-w-2xl mx-auto">
          Jump right into the action with these popular features.
        </p>
        
        {/* Cross-Shaped Grid */}
        <div className="relative max-w-md mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 aspect-square">
            
            {/* Empty Top Left */}
            <div></div>
            
            {/* North - Hockey Trivia (Samantha) */}
            <Link 
              href="/trivia-zone"
              className="bg-[#0a0e1a] border border-[#2d3748] rounded-lg p-4 hover:border-[#4cc9f0] transition-all duration-300 group flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-sm font-semibold text-white group-hover:text-[#4cc9f0] transition-colors">
                Train Your Brain
              </h3>
            </Link>
            
            {/* Empty Top Right */}
            <div></div>
            
            {/* West - Stories (Broadcaster Mike) */}
            <Link 
              href="/broadcaster-mike"
              className="bg-[#0a0e1a] border border-[#2d3748] rounded-lg p-4 hover:border-[#4cc9f0] transition-all duration-300 group flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">📚</div>
              <h3 className="text-sm font-semibold text-white group-hover:text-[#4cc9f0] transition-colors">
                Tune In..
              </h3>
            </Link>
            
            {/* Center - Main Image */}
            <div className="bg-[#0a0e1a] border-2 border-[#4cc9f0] rounded-lg p-2 flex items-center justify-center">
              <Image
                src="/gims/gim-00026.webp"
                alt="Quick Actions Center"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            {/* East - Motivator (Iron Mike) */}
            <Link 
              href="/iron-mike"
              className="bg-[#0a0e1a] border border-[#2d3748] rounded-lg p-4 hover:border-[#4cc9f0] transition-all duration-300 group flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">💪</div>
              <h3 className="text-sm font-semibold text-white group-hover:text-[#4cc9f0] transition-colors">
                One on One With Coach Mike
              </h3>
            </Link>
            
            {/* Empty Bottom Left */}
            <div></div>
            
            {/* South - H.u.g. (Captain Heart) */}
            <Link 
              href="/captain-heart"
              className="bg-[#0a0e1a] border border-[#2d3748] rounded-lg p-4 hover:border-[#4cc9f0] transition-all duration-300 group flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="text-sm font-semibold text-white group-hover:text-[#4cc9f0] transition-colors">
                Send a H.U.G.
              </h3>
            </Link>
            
            {/* Empty Bottom Right */}
            <div></div>
            
          </div>
        </div>
        
        {/* Legend/Description */}
        <div className="mt-8 text-sm text-[#a0aec0] max-w-2xl mx-auto">
          <p>Explore different aspects of hockey with our expert crew members</p>
        </div>
      </div>
    </section>
  );
}