import React from 'react';
import { getContentCounts } from '@/lib/tango-api';

export async function SocialProofSection() {
  // Fetch all content counts from Tango CMS
  const counts = await getContentCounts();

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in the Game
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Hockey fans from around the world are already part of the OnlyHockey
            family
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* H.U.G.s (Greetings) */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#4cc9f0]/20 to-[#60a5fa]/20 rounded-2xl p-8 border border-[#4cc9f0]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#4cc9f0] mb-2">
                {formatNumber(counts.hugsCount)}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                H.U.G.s
              </div>
              <div className="text-sm text-[#a0aec0]">
                Hockey Universal Greetings
              </div>
            </div>
          </div>

          {/* Hockey Lore (Stats) */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-2xl p-8 border border-[#fbbf24]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#fbbf24] mb-2">
                {formatNumber(counts.statsCount)}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Hockey Lore
              </div>
              <div className="text-sm text-[#a0aec0]">
                Fascinating hockey stats & facts
              </div>
            </div>
          </div>

          {/* Wisdom */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#60a5fa]/20 to-[#3b82f6]/20 rounded-2xl p-8 border border-[#60a5fa]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">
                {formatNumber(counts.wisdomCount)}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Wisdom
              </div>
              <div className="text-sm text-[#a0aec0]">
                Hockey insights & musings
              </div>
            </div>
          </div>

          {/* Motivational Messages */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#fb923c]/20 to-[#f97316]/20 rounded-2xl p-8 border border-[#fb923c]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#fb923c] mb-2">
                {formatNumber(counts.motivationalCount)}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Motivation
              </div>
              <div className="text-sm text-[#a0aec0]">
                Inspiring quotes & encouragement
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#a0aec0] mb-6">
            <span className="text-[#4cc9f0] font-semibold">
              Growing every day
            </span>{' '}
            - Be part of the hockey community that celebrates the greatest game
            on ice! 🏒
          </p>
        </div>
      </div>
    </section>
  );
}
