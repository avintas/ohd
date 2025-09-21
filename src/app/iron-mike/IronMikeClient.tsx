'use client';

import { PageLayout } from '@/components';
import { useState } from 'react';
import type { MotivateMessage } from '@/lib/motivateLoader';

interface IronMikeClientProps {
  motivateMessages: MotivateMessage[];
}

export default function IronMikeClient({ motivateMessages }: IronMikeClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `💪 Hockey Wisdom & Motivation from OnlyHockey.com:\n\n"${content}"\n\nGet motivated with Iron Mike!`;
    const shareUrl = `${window.location.origin}/iron-mike`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Hockey Wisdom & Motivation`,
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
                  HOCKEY WISDOM & MOTIVATION
                </h1>
              </header>
              
              {/* Description with bullet points */}
              <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                    COACH&apos;S CORNER
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Championship mindset and mental toughness</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Expert coaching tips from Iron Mike</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Build winning habits on and off ice</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    document.getElementById('coaching-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
                >
                  <span className="text-[#4cc9f0] mr-2">💪</span>
                  <span>Get Motivated</span>
                </button>
              </div>
            </div>

            {/* Right Column - Empty placeholder */}
            <div className="relative z-20">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-[#1a1f2e] rounded-2xl shadow-2xl border border-[#2d3748]">
                {/* Empty placeholder - same size for consistency */}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Coaching Tips Section */}
      <div id="coaching-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💪 Coach&apos;s Corner
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Championship-level wisdom and motivation to elevate your game and build mental toughness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {motivateMessages.map((message) => (
              <div key={message.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{message.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{message.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {message.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(message.content, message.shareTitle)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  title="Share this coaching tip"
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
