import React from 'react';

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in the Game
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Hockey fans from around the world are already part of the OnlyHockey family
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* H.U.G.s Sent */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#4cc9f0]/20 to-[#60a5fa]/20 rounded-2xl p-8 border border-[#4cc9f0]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#4cc9f0] mb-2">
                2,547
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                H.U.G.s Sent
              </div>
              <div className="text-sm text-[#a0aec0]">
                Digital hockey love shared
              </div>
            </div>
          </div>

          {/* Trivia Games Played */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20 rounded-2xl p-8 border border-[#fbbf24]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#fbbf24] mb-2">
                15,892
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Games Played
              </div>
              <div className="text-sm text-[#a0aec0]">
                Hockey trivia challenges
              </div>
            </div>
          </div>

          {/* Community Members */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#60a5fa]/20 to-[#3b82f6]/20 rounded-2xl p-8 border border-[#60a5fa]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#60a5fa] mb-2">
                1,234
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Hockey Fans
              </div>
              <div className="text-sm text-[#a0aec0]">
                Active community members
              </div>
            </div>
          </div>

          {/* Stories Shared */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-[#fb923c]/20 to-[#f97316]/20 rounded-2xl p-8 border border-[#fb923c]/30">
              <div className="text-4xl md:text-5xl font-bold text-[#fb923c] mb-2">
                489
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Stories Shared
              </div>
              <div className="text-sm text-[#a0aec0]">
                Hockey tales & wisdom
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#a0aec0] mb-6">
            <span className="text-[#4cc9f0] font-semibold">Growing every day</span> - 
            Be part of the hockey community that celebrates the greatest game on ice! 🏒
          </p>
        </div>
      </div>
    </section>
  );
}
