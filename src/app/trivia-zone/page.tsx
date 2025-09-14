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
              Trivia Zone
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
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Samantha</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Trivia Master</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto mb-8">
              Welcome to the ultimate hockey trivia headquarters! Test your knowledge, learn amazing facts, and become a true hockey legend.
            </p>
          </div>

          {/* Player Stats (Fake Local Storage Data) */}
          <div className="bg-[#16213e] rounded-lg p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 text-center">🏒 Your Trivia Stats</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#4cc9f0]">7</div>
                <div className="text-xs text-[#a0aec0]">Games Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#fbbf24]">850</div>
                <div className="text-xs text-[#a0aec0]">Best Score</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#fb923c]">12</div>
                <div className="text-xs text-[#a0aec0]">Win Streak</div>
              </div>
            </div>
          </div>

          {/* Featured Game Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white text-center mb-8">🎯 Choose Your Challenge</h3>
            
            {/* 3x2 Grid Layout */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              
              {/* Quick Fire */}
              <Link href="/trivia-zone/quickfire/legends/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">Quick Fire</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">10 Questions</p>
                  <p className="text-xs text-[#a0aec0]">2-3 minutes</p>
                </div>
              </Link>

              {/* True/False */}
              <Link href="/trivia-zone/truefalse/geography/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">✓</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">True/False</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Lightning</p>
                  <p className="text-xs text-[#a0aec0]">1 minute</p>
                </div>
              </Link>

              {/* Fill Blanks */}
              <Link href="/trivia-zone/fillblanks/originalsix/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📝</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">Fill Blanks</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Brain Teaser</p>
                  <p className="text-xs text-[#a0aec0]">5 minutes</p>
                </div>
              </Link>

              {/* Picture Quiz */}
              <Link href="/trivia-zone/picturequiz/legends/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📸</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">Picture Quiz</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Visual Fun</p>
                  <p className="text-xs text-[#a0aec0]">3 minutes</p>
                </div>
              </Link>

              {/* Timeline Challenge */}
              <Link href="/trivia-zone/timeline/history/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📅</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">Timeline Challenge</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">History Buff</p>
                  <p className="text-xs text-[#a0aec0]">4+ minutes</p>
                </div>
              </Link>

              {/* Daily Quiz */}
              <Link href="/trivia-zone/daily/mixed/today" className="group">
                <div className="bg-gradient-to-br from-[#4cc9f0]/20 to-[#fbbf24]/20 hover:from-[#4cc9f0]/30 hover:to-[#fbbf24]/30 border border-[#4cc9f0] hover:border-[#fbbf24] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Daily Quiz</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">New Daily</p>
                  <p className="text-xs text-[#a0aec0]">5-7 minutes</p>
                </div>
              </Link>

            </div>
          </div>

          {/* Topic Categories Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white text-center mb-8">🏒 Pick Your Topic</h3>
            
            {/* 3x2 Topic Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              
              {/* Original Six */}
              <Link href="/trivia-zone/quickfire/originalsix/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#fb923c] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏛️</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#fb923c] transition-colors">Original Six</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Team History</p>
                  <p className="text-xs text-[#a0aec0]">1942-1967</p>
                </div>
              </Link>

              {/* Hockey Legends */}
              <Link href="/trivia-zone/quickfire/legends/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#fbbf24] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">👑</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Hockey Legends</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Player Focus</p>
                  <p className="text-xs text-[#a0aec0]">Hall of Fame</p>
                </div>
              </Link>

              {/* Hockey Geography */}
              <Link href="/trivia-zone/truefalse/geography/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#60a5fa] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🌍</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#60a5fa] transition-colors">Hockey Geography</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Locations</p>
                  <p className="text-xs text-[#a0aec0]">Arenas & Cities</p>
                </div>
              </Link>

              {/* Radio/Video */}
              <Link href="/trivia-zone/picturequiz/media/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#ec4899] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📻</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#ec4899] transition-colors">Radio/Video</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Media</p>
                  <p className="text-xs text-[#a0aec0]">Famous Calls</p>
                </div>
              </Link>

              {/* Goalie Masters */}
              <Link href="/trivia-zone/fillblanks/goalies/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#10b981] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🥅</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#10b981] transition-colors">Goalie Masters</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Netminders</p>
                  <p className="text-xs text-[#a0aec0]">Between Pipes</p>
                </div>
              </Link>

              {/* Stanley Cup */}
              <Link href="/trivia-zone/timeline/stanleycup/1" className="group">
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#fbbf24] rounded-lg p-4 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🏆</div>
                  <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#fbbf24] transition-colors">Stanley Cup</h4>
                  <p className="text-xs text-[#a0aec0] mb-2">Championship</p>
                  <p className="text-xs text-[#a0aec0]">Ultimate Prize</p>
                </div>
              </Link>

            </div>
          </div>


          {/* Recent Activity */}
          <div className="mt-8 bg-[#0a0e1a] rounded-lg p-6">
            <h3 className="text-white font-semibold mb-4">🕒 Recent Activity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#a0aec0]">Quick Fire Challenge</span>
                <span className="text-[#4cc9f0] font-semibold">850 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#a0aec0]">Original Six Masters</span>
                <span className="text-[#fbbf24] font-semibold">720 pts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#a0aec0]">Hockey Legends</span>
                <span className="text-[#fb923c] font-semibold">650 pts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}