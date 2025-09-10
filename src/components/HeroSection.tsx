import React from 'react';

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-8 md:px-12 py-16 md:py-24">
      <div className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-[#4cc9f0] via-[#60a5fa] to-[#fbbf24] bg-clip-text text-transparent leading-loose">
  There is Only Hockey!
</h1>
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
          Where your ❤️ love for the game is all you need.
        </p>
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto mt-6">
          This site is built by fans, for fans. Here, you can <span className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 px-1 py-0.5 rounded font-semibold">share 📤</span> the good stuff you discover, motivate fellow fans with powerful quotes from legendary players and coaches, challenge your knowledge with <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 px-1 py-0.5 rounded font-semibold">Hockey Trivia</span>, and support the community with heartfelt Hockey Universal Greetings (H.U.G.s). Hang out with fans who truly get it, celebrate the moments that matter, and <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-1 py-0.5 rounded font-semibold">discover</span> what makes our hockey community so special. Whether you&apos;re here for the stories, the stats, or the pure joy of the game, you belong here. 🏠✨
        </p>
      </div>
    </section>
  );
}
