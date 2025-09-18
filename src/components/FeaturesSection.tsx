import React from 'react';
import Link from 'next/link';

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Discover the three core pillars that make OnlyHockey your ultimate hockey companion
          </p>
        </div>

        {/* Three Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Test Your Hockey IQ */}
          <div className="text-center group">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Test Your Hockey IQ
              </h3>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Challenge yourself with exciting trivia games covering everything from Original Six history to modern NHL stats. Learn fascinating facts while testing your hockey knowledge.
              </p>
              <Link 
                href="/trivia-zone"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start Playing 🎯
              </Link>
            </div>
          </div>

          {/* Heart & Share */}
          <div className="text-center group">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ❤️
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Heart & Share
              </h3>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Send Hockey Universal Greetings (H.U.G.s) to fellow fans around the world. Spread positivity and show your support for the hockey community with Captain Heart.
              </p>
              <Link 
                href="/captain-heart"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Send a H.U.G. 💙
              </Link>
            </div>
          </div>

          {/* Hockey Wisdom & Motivation */}
          <div className="text-center group">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Hockey Wisdom & Motivation
              </h3>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Get pumped up with inspiring quotes, motivational content, and fascinating hockey stories. Let Iron Mike and Broadcaster Mike fuel your passion for the game.
              </p>
              <Link 
                href="/iron-mike"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Motivated 🔥
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
