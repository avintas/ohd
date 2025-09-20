import React from 'react';
import Link from 'next/link';

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Discover the four core pillars that make OnlyHockey your ultimate hockey companion
          </p>
        </div>

        {/* Four Core Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Test Your Hockey IQ */}
          <div className="text-center group h-full">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#4cc9f0]/20 border border-[#2d3748] hover:border-[#4cc9f0]/50 h-full flex flex-col">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Test Your Hockey IQ
              </h3>
              <div className="flex-grow">
                <p className="text-[#a0aec0] leading-relaxed mb-6">
                  Challenge yourself with exciting trivia games covering everything from Original Six history to modern NHL stats. Learn fascinating facts while testing your hockey knowledge.
                </p>
              </div>
              <Link 
                href="/trivia-zone"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] active:scale-95 text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none shadow-md hover:shadow-lg"
              >
                Start Playing 🎯
              </Link>
            </div>
          </div>

          {/* Heart & Share */}
          <div className="text-center group h-full">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#4cc9f0]/20 border border-[#2d3748] hover:border-[#4cc9f0]/50 h-full flex flex-col">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💙
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Heart & Share
              </h3>
              <div className="flex-grow">
                <p className="text-[#a0aec0] leading-relaxed mb-6">
                  Send Hockey Universal Greetings (H.U.G.s) to fellow fans around the world. Spread positivity and show your support for the hockey community with Captain Heart.
                </p>
              </div>
              <Link 
                href="/captain-heart"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] active:scale-95 text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none shadow-md hover:shadow-lg"
              >
                Send a H.U.G. 💙
              </Link>
            </div>
          </div>

          {/* Hockey Wisdom & Motivation */}
          <div className="text-center group h-full">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#4cc9f0]/20 border border-[#2d3748] hover:border-[#4cc9f0]/50 h-full flex flex-col">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💪
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Hockey Wisdom & Motivation
              </h3>
              <div className="flex-grow">
                <p className="text-[#a0aec0] leading-relaxed mb-6">
                  Get pumped up with inspiring quotes, motivational content, and fascinating hockey stories. Let Iron Mike and Broadcaster Mike fuel your passion for the game.
                </p>
              </div>
              <Link 
                href="/iron-mike"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] active:scale-95 text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none shadow-md hover:shadow-lg"
              >
                Get Motivated 🔥
              </Link>
            </div>
          </div>

          {/* Hockey Lore */}
          <div className="text-center group h-full">
            <div className="bg-[#16213e] rounded-2xl p-8 hover:bg-[#1e2a4a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#4cc9f0]/20 border border-[#2d3748] hover:border-[#4cc9f0]/50 h-full flex flex-col">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📖
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#4cc9f0] transition-colors">
                Hockey Lore
              </h3>
              <div className="flex-grow">
                <p className="text-[#a0aec0] leading-relaxed mb-6">
                  Discover fascinating hockey tales, behind-the-scenes moments, anecdotes from legends, and stories that shaped the game we love.
                </p>
              </div>
              <Link 
                href="/stories"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] active:scale-95 text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none shadow-md hover:shadow-lg"
              >
                Read Stories 📖
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
