'use client';

import { PageLayout } from '@/components';
import Link from 'next/link';
import { useState } from 'react';
import type { DailyTriviaData } from '@/lib/dailyTriviaLoader';

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
  dailyTrivia: DailyTriviaData | null;
}

export default function TriviaZoneClient({
  featuredGames,
  regularGames,
  gameTypeEmojis,
  dailyTrivia,
}: TriviaZoneClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Filter out daily quiz from featured games and take first 3 regular games for featured
  const filteredFeaturedGames = featuredGames.filter(
    (game) => game.type !== 'daily-quiz'
  );
  const newFeaturedGames = [
    ...filteredFeaturedGames,
    ...regularGames.slice(0, 3),
  ];
  const remainingRegularGames = regularGames.slice(3);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (
      dailyTrivia &&
      currentQuestionIndex < dailyTrivia.questions.length - 1
    ) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetTrivia = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };
  return (
    <PageLayout>
      {/* Hero Section - From Slide #2 */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[500px]">
            {/* Left Column - Content */}
            <div className="space-y-6 z-20 relative text-center lg:text-left">
              {/* Large Main Title */}
              <header>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                  HOCKEY TRIVIA ZONE
                </h1>
              </header>

              {/* Description with bullet points */}
              <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                    ORIGINAL SIX TO MODERN NHL
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Test your knowledge with Samantha
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Challenge friends and climb the leaderboard
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Become a true hockey legend
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    document.getElementById('games-section')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
                >
                  <span className="text-[#4cc9f0] mr-2">🎯</span>
                  <span>Start Playing</span>
                </button>
              </div>
            </div>

            {/* Right Column - Daily Trivia Mini Game */}
            <div className="relative z-20">
              {dailyTrivia && dailyTrivia.questions.length > 0 ? (
                <div className="bg-[#16213e] rounded-2xl p-8 shadow-2xl border border-[#2d3748] h-[300px] md:h-[400px] lg:h-[500px] flex flex-col">
                  <div className="relative w-full h-full perspective-1000">
                    {/* Card Front - Question */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ${showResult ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'} flex flex-col`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-3xl mr-3">🏆</span>
                          <div>
                            <h3 className="text-lg font-bold text-white">
                              Daily Trivia
                            </h3>
                            <p className="text-sm text-[#a0aec0]">
                              Question {currentQuestionIndex + 1} of{' '}
                              {dailyTrivia.questions.length}
                            </p>
                          </div>
                        </div>
                        <div className="text-sm text-[#4cc9f0] font-semibold">
                          {dailyTrivia.category}
                        </div>
                      </div>

                      {/* Question */}
                      <div className="flex-grow mb-4">
                        <h4 className="text-base md:text-lg font-semibold text-white mb-4 leading-tight">
                          {dailyTrivia.questions[currentQuestionIndex].question}
                        </h4>
                        <div className="space-y-2">
                          {dailyTrivia.questions[
                            currentQuestionIndex
                          ].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswerClick(option)}
                              className="w-full flex items-center p-2 bg-[#0a0e1a] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer text-left text-sm"
                            >
                              <span className="text-[#a0aec0] font-bold mr-2">
                                {String.fromCharCode(65 + index)})
                              </span>
                              <span className="text-[#a0aec0]">{option}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Back - Result */}
                    <div
                      className={`absolute inset-0 transition-all duration-700 ${showResult ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} flex flex-col justify-center items-center text-center p-4`}
                    >
                      {selectedAnswer ===
                      dailyTrivia.questions[currentQuestionIndex].answer ? (
                        // Correct Answer
                        <>
                          <div className="text-6xl mb-3 animate-bounce">🎉</div>
                          <h3 className="text-2xl font-bold text-[#4cc9f0] mb-3">
                            Correct!
                          </h3>
                          <p className="text-sm text-[#a0aec0] mb-4 leading-relaxed">
                            {
                              dailyTrivia.questions[currentQuestionIndex]
                                .explanation
                            }
                          </p>
                          <div className="text-2xl mb-4">🏆 ⭐ 🎊</div>
                        </>
                      ) : (
                        // Wrong Answer
                        <>
                          <div className="text-6xl mb-3">🤔</div>
                          <h3 className="text-2xl font-bold text-[#fbbf24] mb-3">
                            Not quite!
                          </h3>
                          <p className="text-sm text-white mb-2">
                            The answer is:{' '}
                            <strong>
                              {
                                dailyTrivia.questions[currentQuestionIndex]
                                  .answer
                              }
                            </strong>
                          </p>
                          <p className="text-sm text-[#a0aec0] mb-4 leading-relaxed">
                            {
                              dailyTrivia.questions[currentQuestionIndex]
                                .explanation
                            }
                          </p>
                          <div className="text-2xl mb-4">💪 🏒 📚</div>
                        </>
                      )}

                      <div className="flex gap-2">
                        <button
                          onClick={resetTrivia}
                          className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                        >
                          Try Again 🔄
                        </button>
                        {currentQuestionIndex <
                          dailyTrivia.questions.length - 1 && (
                          <button
                            onClick={nextQuestion}
                            className="bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                          >
                            Next Question ➡️
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[#1a1f2e] rounded-2xl shadow-2xl border border-[#2d3748] flex items-center justify-center">
                  <p className="text-[#a0aec0]">No daily trivia available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      {newFeaturedGames.length > 0 && (
        <div id="games-section" className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🌟 Featured Challenges
              </h2>
              <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
                Our most popular and challenging trivia games, handpicked by
                Samantha
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {newFeaturedGames.map((game) => (
                <Link
                  key={game.id}
                  href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace('.md', '')}`}
                  className="group"
                >
                  <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer text-center h-full flex flex-col w-64">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {gameTypeEmojis[game.type] || '🎯'}
                    </div>

                    <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#4cc9f0] transition-colors flex-grow">
                      {game.title}
                    </h4>

                    <p className="text-[#a0aec0] text-sm mb-4 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="mt-auto space-y-2">
                      <div className="flex justify-center items-center space-x-4 text-xs text-[#a0aec0]">
                        <span className="flex items-center">
                          <span className="text-[#4cc9f0] mr-1">📝</span>
                          {game.questions}Q
                        </span>
                        <span className="flex items-center">
                          <span className="text-[#fbbf24] mr-1">⏱️</span>
                          {game.estimatedTime}
                        </span>
                      </div>
                      <span className="bg-[#4cc9f0] text-[#0a0e1a] px-3 py-1 rounded-full text-xs font-bold">
                        {game.difficulty}
                      </span>
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
              From quick-fire rounds to deep hockey history - find the perfect
              trivia game for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {remainingRegularGames.map((game) => (
              <Link
                key={game.id}
                href={`/trivia-zone/${game.type}/${game.category}/${game.file.replace('.md', '')}`}
                className="group"
              >
                <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer text-center h-full flex flex-col">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {gameTypeEmojis[game.type] || '🎯'}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#4cc9f0] transition-colors flex-grow">
                    {game.title}
                  </h4>

                  <p className="text-[#a0aec0] text-sm mb-4 leading-relaxed">
                    {game.description}
                  </p>

                  <div className="space-y-2 text-xs text-[#a0aec0] mb-4">
                    <div>
                      {game.questions} questions • {game.estimatedTime}
                    </div>
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
