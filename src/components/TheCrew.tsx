import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function TheCrew() {
  return (
<section id="crew-section" className="py-8 md:py-12 px-4 md:px-6 bg-[#0a0e1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          The Crew
        </h2>
        <p className="text-lg text-[#a0aec0] mb-8 max-w-2xl mx-auto">
          Meet your hockey guides! Our crew of friendly experts is here to help you learn, 
          play safer, and have more fun with the greatest game on ice.
        </p>
        
        {/* Crew Avatar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Samantha - Trivia Master */}
          <Link href="/trivia-zone" className="text-center group block">
            <div className="relative mb-3">
              <Image
                src="/pims/pim-1008.webp"
                alt="Samantha - Trivia Master"
                width={100}
                height={100}
                className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Samantha</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Trivia Master</p>
          </Link>

          {/* Iron Mike - Coach */}
          <Link href="/iron-mike" className="text-center group block">
            <div className="relative mb-3">
              <Image
                src="/pims/pim-1001.webp"
                alt="Iron Mike - The Coach"
                width={100}
                height={100}
                className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Iron Mike</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Coach</p>
          </Link>

          {/* Coach Fuel - Nutritionist */}
          <Link href="/coach-fuel" className="text-center group block">
            <div className="relative mb-3">
              <Image
                src="/pims/pim-1010.webp"
                alt="Coach Fuel - Performance Nutrition Expert"
                width={100}
                height={100}
                className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Coach Fuel</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Nutritionist</p>
          </Link>

          {/* Don The Mic - Hockey Storyteller */}
          <Link href="/behind-the-mic" className="text-center group block">
            <div className="relative mb-3">
              <Image
                src="/pims/pim-1011.webp"
                alt="Don The Mic - Hockey Storyteller"
                width={100}
                height={100}
                className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Don The Mic</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Hockey Storyteller</p>
          </Link>

          {/* Referee Riley - Rules Expert */}
          <Link href="/referee-riley" className="text-center group block">
            <div className="relative mb-3">
              <Image
                src="/pims/pim-1007.webp"
                alt="Referee Riley - Rules Expert"
                width={100}
                height={100}
                className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer"
              />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Referee Riley</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Rules Expert</p>
          </Link>

          {/* Captain Heart - Community Leader */}
          <Link href="/captain-heart" className="text-center group block">
            <div className="relative mb-3">
              <div className="w-16 h-16 md:w-25 md:h-25 rounded-full mx-auto bg-orange-500 border-3 border-[#4cc9f0] group-hover:border-[#fbbf24] transition-colors duration-300 cursor-pointer flex items-center justify-center">
                <Image
                  src="/pims/pim-1009.webp"
                  alt="Captain Heart - Community Leader"
                  width={100}
                  height={100}
                  className="w-14 h-14 md:w-23 md:h-23 rounded-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">Captain Heart</h3>
            <p className="text-xs text-[#a0aec0] group-hover:text-[#fbbf24] transition-colors duration-300">Community Leader</p>
          </Link>

        </div>
      </div>
    </section>
  );
}
