import React from 'react';
import Link from 'next/link';

export function FeaturedContentSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience OnlyHockey
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Get a taste of what makes our hockey community special
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Trivia Question of the Day */}
          <div className="bg-[#16213e] rounded-2xl p-8 shadow-lg border border-[#2d3748]">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">🧠</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Trivia Question of the Day</h3>
                <p className="text-[#4cc9f0] font-semibold">Challenge your hockey knowledge</p>
              </div>
            </div>
            
            <div className="bg-[#0a0e1a] rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Which Original Six team was the first to win the Stanley Cup after the NHL expansion in 1967?
              </h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-[#16213e] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer">
                  <span className="text-[#4cc9f0] font-bold mr-3">A)</span>
                  <span className="text-[#a0aec0]">Boston Bruins</span>
                </div>
                <div className="flex items-center p-3 bg-[#16213e] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer">
                  <span className="text-[#4cc9f0] font-bold mr-3">B)</span>
                  <span className="text-[#a0aec0]">Montreal Canadiens</span>
                </div>
                <div className="flex items-center p-3 bg-[#16213e] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer">
                  <span className="text-[#4cc9f0] font-bold mr-3">C)</span>
                  <span className="text-[#a0aec0]">Toronto Maple Leafs</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="/trivia-zone"
              className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Play More Trivia 🎯
            </Link>
          </div>

          {/* Sample H.U.G. Message */}
          <div className="bg-[#16213e] rounded-2xl p-8 shadow-lg border border-[#2d3748]">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">❤️</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Sample H.U.G. Message</h3>
                <p className="text-[#4cc9f0] font-semibold">Spread the hockey love</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#4cc9f0]/10 to-[#60a5fa]/10 rounded-xl p-6 mb-6 border border-[#4cc9f0]/20">
              <div className="text-center mb-4">
                <div className="text-6xl mb-2">🏒</div>
                <h4 className="text-xl font-bold text-white mb-2">Hockey Universal Greeting</h4>
                <p className="text-sm text-[#4cc9f0] mb-4">From a fellow hockey fan</p>
              </div>
              
              <div className="bg-[#0a0e1a] rounded-lg p-4 mb-4">
                <p className="text-[#a0aec0] text-center leading-relaxed">
                  &quot;Hey there, hockey friend! 🏒 Just wanted to send some positive vibes your way. 
                  Whether your team won or lost last night, remember that we&apos;re all united by our 
                  love for the greatest game on ice! Keep your stick on the ice! 💙&quot;
                </p>
              </div>
              
              <div className="text-center text-sm text-[#a0aec0]">
                <span className="text-[#fbbf24]">✨ Sent with love from the OnlyHockey community</span>
              </div>
            </div>
            
            <Link 
              href="/captain-heart"
              className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Send a H.U.G. 💙
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
