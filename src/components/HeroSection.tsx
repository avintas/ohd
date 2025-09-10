import React from 'react';

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
          We launched 🚀 Onlyhockey as fans for fans to share 📤 the good stuff they discover on this site. Send motivational 🔥 quotes from legendary players and epic coaches, challenge yourself and your friends with hockey 🧠 trivia games, support people you care about with H.U.G.s 💙. Hang out with fans who truly get it, who know, love, play the game and celebrate the moments that matter, and discover 🔍 what makes our hockey community so 🏆 special. Whether you&apos;re here for the stories, the stats, or the pure joy of the game, you belong here. 🏠✨
        </p>
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-[#4cc9f0] hover:text-[#60a5fa] transition-colors duration-300">
          Get in the Game
        </h2>
      </div>
    </section>
  );
}
