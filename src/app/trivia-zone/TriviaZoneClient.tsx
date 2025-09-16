'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

interface Game {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  file: string;
  difficulty: string;
  questions: number;
  estimatedTime: string;
  featured?: boolean;
}

interface TriviaZoneClientProps {
  featuredGames: Game[];
  regularGames: Game[];
  gameTypeEmojis: { [key: string]: string };
}

export default function TriviaZoneClient({ featuredGames, regularGames, gameTypeEmojis }: TriviaZoneClientProps) {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <header>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Trivia Zone
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  <p>Welcome to the ultimate hockey trivia headquarters! Test your knowledge, learn amazing facts, and become a true hockey legend.</p>
                  <p>With Samantha as your expert guide, dive into challenging quizzes covering everything from Original Six history to modern NHL stats.</p>
                  <p>Ready to prove you&apos;re a hockey genius?</p>
                </div>
              </header>
              
              <div className="pt-4">
                <button 
                  onClick={() => {
                    document.getElementById(&apos;games-section&apos;)?.scrollIntoView({ 
                      behavior: &apos;smooth&apos;,
                      block: &apos;start&apos;
                    });
                  }}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Playing 🧠
                </button>
              </div>
            </div>

            {/* Right Side - Samantha Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/pims/pim-1008.webp"
                  alt="Samantha - Trivia Master"
                  width={512}
                  height={512}
                  className="w-80 h-80 md:w-[32rem] md:h-[32rem] object-contain scale-x-[-1]"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#4cc9f0] text-[#0a0e1a] px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  🧠 Trivia Master
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Games Section */}
      {featuredGames.length > 0 && (
        <div id="games-section" className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🌟 Featured Challenges
              </h2>
              <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
                Our most popular and challenging trivia games, handpicked by Samantha
              </p>
            </div>
            
            <div className="space-y-6">
              {featuredGames.map((game) => (
                <Link 
                  key={game.id} 
                  href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace(&apos;.md&apos;, &apos;&apos;)}`}
                  className="group block"
                >
                  <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <div className="flex flex-col md:flex-row">
                      {/* Left: Game Image/Icon */}
                      <div className="flex-shrink-0 bg-gradient-to-br from-[#4cc9f0]/20 to-[#fbbf24]/20 flex items-center justify-center md:w-48 h-32 md:h-48">
                        <div className="text-6xl md:text-8xl group-hover:scale-110 transition-transform duration-300">
                          {gameTypeEmojis[game.type] || &apos;🎯&apos;}
                        </div>
                      </div>
                      
                      {/* Right: Game Content */}
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#4cc9f0] transition-colors">
                              {game.title}
                            </h3>
                            <span className="bg-[#4cc9f0] text-[#0a0e1a] px-3 py-1 rounded-full text-sm font-bold">
                              {game.difficulty}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-[#a0aec0] mb-6 leading-relaxed text-base">
                          {game.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-6 text-sm text-[#a0aec0]">
                            <span className="flex items-center">
                              <span className="text-[#4cc9f0] mr-2">📝</span>
                              {game.questions} Questions
                            </span>
                            <span className="flex items-center">
                              <span className="text-[#fbbf24] mr-2">⏱️</span>
                              {game.estimatedTime}
                            </span>
                          </div>
                          <div className="text-[#4cc9f0] font-bold group-hover:text-[#fbbf24] transition-colors">
                            Start Challenge →
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* All Games Grid Section */}
      <div className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎯 Choose Your Challenge
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              From quick-fire rounds to deep hockey history - find the perfect trivia game for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularGames.map((game) => (
              <Link 
                key={game.id} 
                href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace(&apos;.md&apos;, &apos;&apos;)}`}
                className="group"
              >
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer text-center h-full flex flex-col">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {gameTypeEmojis[game.type] || &apos;🎯&apos;}
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#4cc9f0] transition-colors flex-grow">
                    {game.title}
                  </h4>
                  
                  <p className="text-[#a0aec0] text-sm mb-4 leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-[#a0aec0] mb-4">
                    <div>{game.questions} questions • {game.estimatedTime}</div>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="bg-[#2d3748] group-hover:bg-[#4cc9f0] group-hover:text-[#0a0e1a] text-[#a0aec0] px-3 py-1 rounded-full text-xs font-semibold transition-all">
                      {game.difficulty}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
