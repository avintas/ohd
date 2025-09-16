'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
export default function SamanthaPage() {

  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Samantha
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1008.webp"
                alt="Samantha - Trivia Master"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
         
            {/* Bio Section */}
            <div className="mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Master of Trivia</h3>
              <div className="text-[#a0aec0] space-y-4 leading-relaxed">
                <p>
                  Meet Samantha, your friendly neighborhood hockey trivia expert! With over a decade of experience covering the NHL and an encyclopedic knowledge of hockey history, she&apos;s the perfect guide for your trivia journey.
                </p>
                <p>
                  From the Original Six era to today&apos;s modern game, Samantha has studied every stat, memorized every record, and can tell you fascinating stories about legendary players, iconic moments, and little-known hockey facts that will amaze your friends.
                </p>
                
                <div className="text-center mt-6">
                  <span className="text-[#4cc9f0] font-semibold">🏒 &quot;Every hockey fan has a story. Let&apos;s discover yours!&quot; 🏒</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="flex flex-col items-center mb-8">
  {/* Curved Text Above Image */}
  <div className="mb-[-3rem]"> {/* Adjusted for a smaller overlap */}
    <svg width="400" height="80" viewBox="0 0 400 80" className="overflow-visible">
      <defs>
        <path id="curve" d="M 60 65 Q 200 15 340 65" fill="none" />
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4cc9f0" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <text className="text-4xl font-bold" fill="url(#textGradient)" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9)' }}>
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            PRESS FOR
          </textPath>
      </text>
    </svg>
  </div>

  <Link href="/trivia-zone" className="group rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
    <Image
      src="/gims/gim-00026.webp"
      alt="Hockey Trivia Challenge"
      width={400}
      height={300}
      className="rounded-lg group-hover:scale-105 transition-transform duration-300"
    />
  </Link>
</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
