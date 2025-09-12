'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SamanthaPage() {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey trivia from Samantha - OnlyHockey.com:\n\n"${content}"\n\nTrivia Zone - Test Your Hockey Knowledge!`;
    const shareUrl = `${window.location.origin}/samantha`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Samantha - Trivia Zone`,
          text: shareText,
          url: shareUrl,
        });
      } catch {
        console.log('Share cancelled');
      }
    } else {
      try {
        const textWithUrl = `${shareText}\n\n${shareUrl}`;
        await navigator.clipboard.writeText(textWithUrl);
        setShareMessage('Copied to clipboard!');
        setTimeout(() => setShareMessage(''), 2000);
      } catch {
        console.error('Failed to copy');
      }
    }
  };

  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Share Message */}
          {shareMessage && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50">
              {shareMessage}
            </div>
          )}

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
              Welcome to the ultimate hockey trivia headquarters! Test your knowledge, 
              learn amazing facts, and become a true hockey scholar.
            </p>
            
            {/* Trivia Challenge Button */}
            <div className="text-center">
              <Link 
                href="/trivia-test"
                className="inline-flex items-center bg-gradient-to-r from-[#4cc9f0] to-[#3bb5e0] hover:from-[#3bb5e0] hover:to-[#2aa3d0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🧠 Start Hockey Trivia Challenge
              </Link>
            </div>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Did you know? Wayne Gretzky holds 61 NHL records! Here&apos;s a fun fact: 
                He has more career assists (1,963) than any other player has total points!
              </p>
              <button
                onClick={() => handleShare(
                  "Did you know? Wayne Gretzky holds 61 NHL records! Here&apos;s a fun fact: He has more career assists (1,963) than any other player has total points!",
                  "Gretzky Records"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Quick Trivia: Which team has won the most Stanley Cups? 
                The Montreal Canadiens with 24 championships! Their dynasty years were truly legendary. 🏆
              </p>
              <button
                onClick={() => handleShare(
                  "Quick Trivia: Which team has won the most Stanley Cups? The Montreal Canadiens with 24 championships! Their dynasty years were truly legendary.",
                  "Stanley Cup Records"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Goalie Trivia: Martin Brodeur holds the record for most career wins by a goaltender with 691! 
                He also holds the record for most shutouts (125) and most games played by a goalie (1,266).
              </p>
              <button
                onClick={() => handleShare(
                  "Goalie Trivia: Martin Brodeur holds the record for most career wins by a goaltender with 691! He also holds the record for most shutouts (125) and most games played by a goalie (1,266).",
                  "Brodeur Records"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏆 Original Six Fun Fact: The term &quot;Original Six&quot; is actually misleading! 
                The NHL started with 4 teams in 1917. The &quot;Original Six&quot; era refers to 1942-1967 
                when only 6 teams existed.
              </p>
              <button
                onClick={() => handleShare(
                  "Original Six Fun Fact: The term \"Original Six\" is actually misleading! The NHL started with 4 teams in 1917. The \"Original Six\" era refers to 1942-1967 when only 6 teams existed.",
                  "Original Six History"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Speed Demon: Connor McDavid&apos;s fastest recorded speed is 25.1 mph (40.4 km/h)! 
                That&apos;s faster than most people can run, and he&apos;s doing it while controlling a puck on ice!
              </p>
              <button
                onClick={() => handleShare(
                  "Speed Demon: Connor McDavid&apos;s fastest recorded speed is 25.1 mph (40.4 km/h)! That&apos;s faster than most people can run, and he&apos;s doing it while controlling a puck on ice!",
                  "McDavid Speed"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Penalty Shot History: The penalty shot was first used in the NHL in 1934. 
                The first penalty shot goal was scored by Ralph &quot;Scotty&quot; Bowman (not the famous coach!) 
                of the St. Louis Eagles.
              </p>
              <button
                onClick={() => handleShare(
                  "Penalty Shot History: The penalty shot was first used in the NHL in 1934. The first penalty shot goal was scored by Ralph \"Scotty\" Bowman (not the famous coach!) of the St. Louis Eagles.",
                  "Penalty Shot History"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Zamboni Fact: The ice resurfacing machine was invented by Frank Zamboni in 1949. 
                Before that, rinks were cleaned by hand with scrapers and hoses - it took over an hour!
              </p>
              <button
                onClick={() => handleShare(
                  "Zamboni Fact: The ice resurfacing machine was invented by Frank Zamboni in 1949. Before that, rinks were cleaned by hand with scrapers and hoses - it took over an hour!",
                  "Zamboni History"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏆 Playoff Beard Tradition: The playoff beard tradition started with the New York Islanders 
                in 1980 during their first Stanley Cup run. It&apos;s now a beloved superstition across all of hockey!
              </p>
              <button
                onClick={() => handleShare(
                  "Playoff Beard Tradition: The playoff beard tradition started with the New York Islanders in 1980 during their first Stanley Cup run. It&apos;s now a beloved superstition across all of hockey!",
                  "Playoff Beard Origin"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this trivia"
              >
                📤
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}