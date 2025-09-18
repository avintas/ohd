'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function FeaturedContentSection() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const correctAnswer = "B"; // Montreal Canadiens is the correct answer
  
  const handleAnswerClick = (answer: string) => {
    console.log('Answer clicked:', answer);
    setSelectedAnswer(answer);
    setShowResult(true);
  };
  
  const resetTrivia = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };
  
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience OnlyHockey
          </h2>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Get a taste of what makes our hockey community special
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Trivia Question of the Day */}
          <div className="bg-[#16213e] rounded-2xl p-8 shadow-lg border border-[#2d3748] h-full flex flex-col relative overflow-hidden">
            {/* Card Front */}
            <div className={`transition-all duration-700 ${showResult ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'} flex flex-col h-full`}>
              {/* Header */}
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🧠</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">Trivia Question of the Day</h3>
                  <p className="text-[#a0aec0]">Challenge your hockey knowledge</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Which Original Six team was the first to win the Stanley Cup after the NHL expansion in 1967?
                </h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => handleAnswerClick("A")}
                    className="w-full flex items-center p-3 bg-[#0a0e1a] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer text-left"
                  >
                    <span className="text-[#a0aec0] font-bold mr-3">A)</span>
                    <span className="text-[#a0aec0]">Boston Bruins</span>
                  </button>
                  <button 
                    onClick={() => handleAnswerClick("B")}
                    className="w-full flex items-center p-3 bg-[#0a0e1a] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer text-left"
                  >
                    <span className="text-[#a0aec0] font-bold mr-3">B)</span>
                    <span className="text-[#a0aec0]">Montreal Canadiens</span>
                  </button>
                  <button 
                    onClick={() => handleAnswerClick("C")}
                    className="w-full flex items-center p-3 bg-[#0a0e1a] rounded-lg hover:bg-[#1e2a4a] transition-colors cursor-pointer text-left"
                  >
                    <span className="text-[#a0aec0] font-bold mr-3">C)</span>
                    <span className="text-[#a0aec0]">Toronto Maple Leafs</span>
                  </button>
                </div>
              </div>
              
              {/* CTA Button */}
              <Link 
                href="/trivia-zone"
                className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 self-start"
              >
                Play More Trivia 🎯
              </Link>
            </div>

            {/* Card Back - Result */}
            <div className={`absolute inset-0 p-8 transition-all duration-700 ${showResult ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} flex flex-col justify-center items-center text-center`}>
              {selectedAnswer === correctAnswer ? (
                // Correct Answer
                <>
                  <div className="text-8xl mb-4 animate-bounce">🎉</div>
                  <h3 className="text-3xl font-bold text-[#4cc9f0] mb-4">Congratulations!</h3>
                  <p className="text-xl text-white mb-2">You got it right!</p>
                  <p className="text-[#a0aec0] mb-6">The Montreal Canadiens won the Stanley Cup in 1968, the first Original Six team to do so after the 1967 expansion.</p>
                  <div className="text-4xl mb-6">🏆 🎊 ⭐</div>
                </>
              ) : (
                // Wrong Answer
                <>
                  <div className="text-8xl mb-4">🤔</div>
                  <h3 className="text-3xl font-bold text-[#fbbf24] mb-4">Not quite!</h3>
                  <p className="text-xl text-white mb-2">Keep trying - you&apos;ve got this!</p>
                  <p className="text-[#a0aec0] mb-6">The correct answer is Montreal Canadiens. They won in 1968, becoming the first Original Six team to capture the Cup after the expansion.</p>
                  <div className="text-4xl mb-6">💪 🏒 📚</div>
                </>
              )}
              
              <button 
                onClick={resetTrivia}
                className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Try Again 🔄
              </button>
            </div>
          </div>

          {/* Sample H.U.G. Message */}
          <div className="bg-[#16213e] rounded-2xl p-8 shadow-lg border border-[#2d3748] h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">💙</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Sample H.U.G. Message</h3>
                <p className="text-[#a0aec0]">Spread the hockey love</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-grow mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Hockey Universal Greeting</h4>
              <div className="bg-[#0a0e1a] rounded-lg p-4 mb-4">
                <p className="text-[#a0aec0] leading-relaxed">
                  &quot;Hockey is for everyone - all backgrounds, all skill levels, all ages. Let&apos;s make sure our rinks are welcoming spaces where everyone feels they belong. Diversity makes our sport stronger! 🏒&quot;
                </p>
              </div>
              <p className="text-sm text-[#a0aec0]">
                Sent with love from the OnlyHockey community
              </p>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/captain-heart"
              className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 self-start"
            >
              Send a H.U.G. 💙
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

