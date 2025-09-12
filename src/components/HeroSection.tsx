import React from 'react';
import Image from 'next/image';

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
          We launched 🚀 Onlyhockey as fans for fans to <span className="bg-yellow-300 text-black px-1 rounded">share 📤</span> the good stuff they discover on this site. Send motivational <span className="bg-yellow-300 text-black px-1 rounded">🔥 quotes</span> from legendary players and epic coaches with Iron Mike, challenge yourself and your friends with hockey 🧠 trivia games alongside{' '}
          <Image 
            src="/pims/pim-1001.webp" 
            alt="Samantha" 
            width={32} 
            height={32} 
            className="inline-block rounded-full mx-1 align-middle"
          />{' '}
          Samantha, support people you care about with <span className="bg-yellow-300 text-black px-1 rounded">H.U.G.s 💙</span> from{' '}
          <Image 
            src="/pims/avintas_cartoon_gently_smiling_heart_wearing_mini_hockey_helm_3d57920b-4966-4287-9597-1a3d2a7dafac_0.png" 
            alt="Captain Heart" 
            width={32} 
            height={32} 
            className="inline-block rounded-full mx-1 align-middle"
          />{' '}
          Captain Heart. Hang out with fans who truly get it, who know, love, play the game and celebrate the moments that matter, and{' '}
          <Image 
            src="/pims/pim-1008.webp" 
            alt="Iron Mike" 
            width={150} 
            height={150} 
            className="float-right rounded-full ml-6 mb-4 shadow-lg"
          />{' '}
          discover 🔍 what makes our hockey community so <span className="bg-yellow-300 text-black px-1 rounded">🏆 special</span>. Whether you're here for the stories, the stats, or the pure joy of the game, you belong here. 🏠✨
        </p>
        <h2 className="mt-8 text-2xl md:text-4xl font-bold text-[#4cc9f0] hover:text-[#60a5fa] transition-colors duration-300">
          Get in the Game
        </h2>
      </div>
    </section>
  );
}
