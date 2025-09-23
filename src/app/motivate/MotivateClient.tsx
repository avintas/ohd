'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import type { MotivateMessage } from '@/lib/motivateLoader';

interface MotivateClientProps {
  motivateMessages: MotivateMessage[];
}

export default function MotivateClient({ motivateMessages }: MotivateClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `💪 Motivation from OnlyHockey.com:\n\n"${content}"\n\nGet motivated with Iron Mike!`;
    const shareUrl = `${window.location.origin}/motivate`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Hockey Motivation`,
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
                  HOCKEY MOTIVATION
                </h1>
              </header>
              
              {/* Description with bullet points */}
              <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                    IRON MIKE'S MOTIVATION
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Get fired up for the game</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Push through tough moments</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Build championship mindset</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    document.getElementById('motivation-section')?.scrollIntoView({ 
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

            {/* Right Column - Motivate Video */}
            <div className="relative z-20">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://nbrlopkg7zkkwadf.public.blob.vercel-storage.com/vgim-400.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Motivation Grid */}
      <div id="motivation-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              💪 Hockey Motivation
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Get fired up with Iron Mike's motivational messages to push through tough moments and build a championship mindset
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {motivateMessages.map((motivate) => (
              <div key={motivate.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{motivate.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{motivate.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {motivate.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(motivate.content, motivate.shareTitle)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  title="Share this message"
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

