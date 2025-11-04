'use client';

import { PageLayout } from '@/components';
import { useState } from 'react';

// Hardcoded greeting card messages
const greetingCards = [
  {
    id: 'birthday-champion',
    title: 'Birthday Champion',
    content:
      'Another year older, another year closer to hockey greatness! May your birthday be filled with perfect passes, clutch goals, and championship moments. Keep skating toward your dreams!',
    emoji: '🎂',
    shareTitle: 'Birthday Champion Hockey Greeting',
  },
  {
    id: 'good-luck-game',
    title: 'Game Day Luck',
    content:
      "The ice is calling and you're ready to answer! Trust your training, play with heart, and remember - champions are made in moments like these. Good luck out there!",
    emoji: '🍀',
    shareTitle: 'Good Luck Hockey Greeting',
  },
  {
    id: 'congratulations-win',
    title: 'Victory Celebration',
    content:
      'What an incredible performance! Your hard work, dedication, and team spirit paid off in the best way possible. Congratulations on your well-deserved victory!',
    emoji: '🏆',
    shareTitle: 'Congratulations Hockey Greeting',
  },
  {
    id: 'holiday-wishes',
    title: 'Holiday Hockey Wishes',
    content:
      'Wishing you a holiday season filled with the joy of hockey - the thrill of the game, the warmth of teammates, and the magic of winter ice. Happy holidays from our hockey family to yours!',
    emoji: '🎄',
    shareTitle: 'Holiday Hockey Greeting',
  },
];

export default function ShopClient() {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey Greeting Card from OnlyHockey.com:\n\n"${content}"\n\nSpread hockey love with our greeting cards!`;
    const shareUrl = `${window.location.origin}/shop`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | OnlyHockey Shop`,
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
      {/* Share Message */}
      {shareMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50">
          {shareMessage}
        </div>
      )}

      {/* Hero Section - From Slide #2 */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[500px]">
            {/* Left Column - Content */}
            <div className="space-y-6 z-20 relative text-center lg:text-left">
              {/* Large Main Title */}
              <header>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                  ONLYHOCKEY SHOP
                </h1>
              </header>

              {/* Description with bullet points */}
              <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                    GREETING CARDS & MORE
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Hockey-themed greeting cards
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Perfect for birthdays and celebrations
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">
                    Share the hockey spirit with loved ones
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    document.getElementById('cards-grid')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
                >
                  <span className="text-[#4cc9f0] mr-2">🛒</span>
                  <span>Browse Cards</span>
                </button>
              </div>
            </div>

            {/* Right Column - Empty placeholder for future images */}
            <div className="relative z-20">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[#1a1f2e] rounded-2xl shadow-2xl border border-[#2d3748]">
                {/* Empty placeholder - same size for consistency */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Cards Grid */}
      <div
        id="cards-grid"
        className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎁 Hockey Greeting Cards
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Spread hockey love with our specially crafted greeting cards for
              every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {greetingCards.map((card) => (
              <div
                key={card.id}
                className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative"
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{card.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {card.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(card.content, card.shareTitle)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  title="Share this greeting card"
                >
                  📤
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
