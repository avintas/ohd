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
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Trivia Master</h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto mb-8">
              Welcome to the ultimate hockey trivia headquarters! Test your knowledge, learn amazing facts, and become a true hockey legend.
            </p>

            {/* Bio Section */}
            <div className="mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">About Samantha</h3>
              <div className="text-[#a0aec0] space-y-4 leading-relaxed">
                <p>
                  Meet Samantha, your friendly neighborhood hockey trivia expert! With over a decade of experience covering the NHL and an encyclopedic knowledge of hockey history, she's the perfect guide for your trivia journey.
                </p>
                <p>
                  From the Original Six era to today's modern game, Samantha has studied every stat, memorized every record, and can tell you fascinating stories about legendary players, iconic moments, and little-known hockey facts that will amaze your friends.
                </p>
                <p>
                  When she's not creating challenging trivia questions, you'll find Samantha at the local rink, cheering on her favorite team, or diving deep into hockey archives to uncover the next great trivia gem. Her passion for the game is infectious, and her goal is simple: make learning about hockey as fun and exciting as playing it!
                </p>
                <div className="text-center mt-6">
                  <span className="text-[#4cc9f0] font-semibold">🏒 "Every hockey fan has a story. Let's discover yours!" 🏒</span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="flex flex-col items-center mb-8">
              {/* Curved Text Above Image */}
              <div className="mb-1">
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