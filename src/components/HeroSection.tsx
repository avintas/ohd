import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-8 md:px-12 py-4 md:py-4">
      <div className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-[#4cc9f0] via-[#60a5fa] to-[#fbbf24] bg-clip-text text-transparent leading-loose">
  There is Only Hockey!
</h1>
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
          Where your ❤️ love for the game is all you need.
        </p>
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto mt-6">
          We launched 🚀 Onlyhockey as a tribute to the great Game of Hockey. <span className="text-[#4cc9f0] font-semibold">Discover and share 📤</span> interesting facts, <span className="text-[#fb923c] font-semibold">motivational 🔥 quotes</span>, anecdotes, and curiosities of hockey culture.
        </p>
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-[#4cc9f0] hover:text-[#60a5fa] transition-colors duration-300">
          Get in the Game
        </h2>
        
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto mt-6">
          Challenge yourself and your friends with <span className="text-[#60a5fa] font-semibold">hockey trivia games</span>, and show your support by <span className="text-[#fbbf24] font-semibold">sending 💙 digital</span> H.U.G. (Hockey Universal Greeting) to people you care about.
        </p>
        
        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mt-8">
          <Link href="/trivia-zone" className="group cursor-pointer transform hover:scale-105 transition-all duration-300 text-center">
            <Image
              src="/gims/learn.webp"
              alt="Learn and Discover"
              width={200}
              height={200}
              className="w-full h-32 object-cover rounded-lg border-2 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 shadow-lg"
            />
            <p className="text-lg md:text-xl font-bold text-[#4cc9f0] group-hover:text-[#fbbf24] transition-colors duration-300 mt-3">
              Play Trivia
            </p>
          </Link>
          <Link href="/captain-heart" className="group cursor-pointer transform hover:scale-105 transition-all duration-300 text-center">
            <Image
              src="/gims/hug.webp"
              alt="Send H.U.G."
              width={200}
              height={200}
              className="w-full h-32 object-cover rounded-lg border-2 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 shadow-lg"
            />
            <p className="text-lg md:text-xl font-bold text-[#4cc9f0] group-hover:text-[#fbbf24] transition-colors duration-300 mt-3">
              Send a HUG
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
