import { PageLayout } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import publishedGames from '../../../content_trivia/published-games.json';

export default function TriviaZonePage() {
  const games = publishedGames.publishedGames;
  const featuredGames = games.filter(game => game.featured);
  const regularGames = games.filter(game => !game.featured);

  // Game type emojis mapping
  const gameTypeEmojis: { [key: string]: string } = {
    'quick-fire': '⚡',
    'true-false': '✓',
    'picture-quiz': '📸',
    'daily-quiz': '🏆',
    'goalie-masters': '🥅',
    'hockey-legends': '👑',
    'hockey-geography': '🌍',
    'original-six': '🏛️',
    'radio-video': '📻',
    'stanly-cup': '🏆'
  };

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

          {/* Player Stats */}
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

          {/* Featured Games */}
          {featuredGames.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-white text-center mb-8">🌟 Featured Challenges</h3>
              <div className="max-w-4xl mx-auto">
                {featuredGames.map((game) => (
                  <Link 
                    key={game.id} 
                    href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace('.md', '')}`}
                    className="group block"
                  >
                    <div className="bg-gradient-to-br from-[#4cc9f0]/20 to-[#fbbf24]/20 hover:from-[#4cc9f0]/30 hover:to-[#fbbf24]/30 border border-[#4cc9f0] hover:border-[#fbbf24] rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex flex-col md:flex-row md:h-64">
                        {/* Left: Trivia Shield Image */}
                        <div className="flex-shrink-0 bg-gradient-to-br from-[#16213e] to-[#0a0e1a] flex items-center justify-center md:w-64 md:h-64">
                          <Image
                            src="/gims/trivia-shield-1.png"
                            alt="Hockey Trivia Shield"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Right: Game Content */}
                        <div className="flex-1 p-6 md:p-8 md:h-64 flex flex-col justify-center">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-3xl group-hover:scale-110 transition-transform">
                              {gameTypeEmojis[game.type] || '🎯'}
                            </div>
                            <span className="bg-[#4cc9f0] text-[#0a0e1a] px-3 py-1 rounded-full text-sm font-bold">
                              {game.difficulty}
                            </span>
                          </div>
                          
                          <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#fbbf24] transition-colors">
                            {game.title}
                          </h4>
                          
                          <p className="text-[#a0aec0] mb-4 leading-relaxed">
                            {game.description}
                          </p>
                          
                          <div className="flex justify-between items-center text-sm text-[#a0aec0]">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <span className="text-[#4cc9f0] mr-1">📝</span>
                                {game.questions} Questions
                              </span>
                              <span className="flex items-center">
                                <span className="text-[#fbbf24] mr-1">⏱️</span>
                                {game.estimatedTime}
                              </span>
                            </div>
                            <div className="text-[#4cc9f0] font-semibold group-hover:text-[#fbbf24] transition-colors">
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
          )}

          {/* All Available Games */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white text-center mb-8">🎯 Choose Your Challenge</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regularGames.map((game) => (
                <Link 
                  key={game.id} 
                  href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace('.md', '')}`}
                  className="group"
                >
                  <div className="bg-[#16213e] hover:bg-[#1e2a4a] border border-[#2d3748] hover:border-[#4cc9f0] rounded-lg p-4 transition-all duration-300 text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                      {gameTypeEmojis[game.type] || '🎯'}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-[#4cc9f0] transition-colors">
                      {game.title}
                    </h4>
                    <p className="text-xs text-[#a0aec0] mb-2">{game.description}</p>
                    <div className="text-xs text-[#a0aec0] mb-2">
                      {game.questions} questions • {game.estimatedTime}
                    </div>
                    <span className="text-xs bg-[#2d3748] text-[#a0aec0] px-2 py-1 rounded">
                      {game.difficulty}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}