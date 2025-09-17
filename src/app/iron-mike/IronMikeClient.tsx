'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import type { MotivateMessage } from '@/lib/motivateLoader';

interface IronMikeClientProps {
  motivateMessages: MotivateMessage[];
}

export default function IronMikeClient({ motivateMessages }: IronMikeClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey coaching tip from Iron Mike - OnlyHockey.com:\n\n"${content}"\n\nCoach's Corner - Training Tips & Motivation!`;
    const shareUrl = `${window.location.origin}/iron-mike`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Iron Mike - Coach's Corner`,
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
                  Coach&apos;s Corner
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  <p>Welcome to the coach&apos;s office! Get expert training tips, motivation, and the winning mindset you need to dominate on the ice.</p>
                  <p>Iron Mike brings decades of coaching experience to help you elevate your game, build mental toughness, and develop championship habits.</p>
                  <p>Ready to train like a champion?</p>
                </div>
              </header>
              
              <div className="pt-4 flex justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    document.getElementById('coaching-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Motivated 💪
                </button>
              </div>
            </div>

            {/* Right Side - Iron Mike Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <Image
                  src="/pims/pim-1001.webp"
                  alt="Iron Mike - Head Coach"
                  width={512}
                  height={512}
                  className="w-64 h-64 md:w-80 md:h-80 object-contain scale-x-[-1]"
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Iron Mike</h3>
                  <p className="text-[#4cc9f0] font-semibold">Head Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Tips Section */}
      <div id="coaching-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Coach&apos;s Playbook
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Championship-level coaching tips and motivation to elevate your game and mindset
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
