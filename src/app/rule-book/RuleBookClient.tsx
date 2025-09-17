'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import type { RuleMessage } from '@/lib/rulesLoader';

interface RuleBookClientProps {
  ruleMessages: RuleMessage[];
}

export default function RuleBookClient({ ruleMessages }: RuleBookClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey rule explanation from Referee Riley - OnlyHockey.com:\n\n"${content}"\n\nRule Book - Understanding Hockey&apos;s Rules!`;
    const shareUrl = `${window.location.origin}/rule-book`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Referee Riley - Rule Book`,
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
                  Rule Book
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  <p>Master the game by understanding its rules! Referee Riley breaks down hockey&apos;s most important rules in simple, easy-to-understand terms.</p>
                  <p>From basic penalties to complex situations, get the official word on what&apos;s legal, what&apos;s not, and why it matters for the game we all love.</p>
                  <p>Ready to referee like a pro?</p>
                </div>
              </header>
              
              <div className="pt-4">
                <button 
                  onClick={() => {
                    document.getElementById('rules-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Learn the Rules ⚖️
                </button>
              </div>
            </div>

            {/* Right Side - Referee Riley Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <Image
                  src="/pims/pim-1007.webp"
                  alt="Referee Riley - Official"
                  width={512}
                  height={512}
                  className="w-64 h-64 md:w-80 md:h-80 object-contain scale-x-[-1]"
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Referee Riley</h3>
                  <p className="text-[#4cc9f0] font-semibold">Head Official</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hockey Rules Section */}
      <div id="rules-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Official Rule Guide
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Clear explanations of hockey&apos;s most important rules, penalties, and situations from a certified official
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ruleMessages.map((rule) => (
              <div key={rule.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{rule.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{rule.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {rule.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(rule.content, rule.shareTitle)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  title="Share this rule explanation"
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
