'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import type { HugMessage } from '@/lib/hugLoader';

interface CaptainHeartClientProps {
  hugMessages: HugMessage[];
}

export default function CaptainHeartClient({ hugMessages }: CaptainHeartClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey community message from Captain Heart - OnlyHockey.com:\n\n"${content}"\n\nHeart's Hub - Building the Hockey Family!`;
    const shareUrl = `${window.location.origin}/captain-heart`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Captain Heart - Heart's Hub`,
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

      {/* Hero Section */}
      <div className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <header>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Captain Heart&apos;s Hub
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  <p>Where the hockey family comes together! Celebrate achievements, support each other, and build the amazing community that makes hockey special.</p>
                  <p>Join Captain Heart in spreading positivity, encouragement, and the true spirit of hockey throughout our community.</p>
                  <p>Together, we make hockey better for everyone!</p>
                </div>
              </header>
              
              <div className="pt-4 flex justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    document.getElementById('hugs-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Share a HUG
                </button>
              </div>
            </div>

            {/* Right Side - Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/pims/pim-1009.webp"
                  alt="Captain Heart - Community Leader"
                  width={512}
                  height={512}
                  className="w-80 h-80 md:w-[32rem] md:h-[32rem] object-contain scale-x-[-1]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hub Activities Grid */}
      <div id="hugs-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Heart&apos;s Hub HUGS
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Share these Hockey Universal Greetings with your loved ones to spread positivity and build our hockey family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hugMessages.map((hug) => (
              <div key={hug.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{hug.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{hug.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {hug.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(hug.content, hug.shareTitle)}
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
