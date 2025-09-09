import React from 'react';

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-8 md:px-12 py-16 md:py-24">
      <div className="text-center max-w-4xl">
      <h1 className="text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-[#4cc9f0] via-[#60a5fa] to-[#fbbf24] bg-clip-text text-transparent leading-loose">
  There&apos;s Only Hockey!
</h1>
        <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
          Where your love for the game is all you need. Find cool hockey facts,
          share the good stuff, and hang with fans who get it. Discover what
          makes hockey community special.
        </p>
      </div>
    </section>
  );
}
