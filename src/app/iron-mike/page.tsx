'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function IronMikePage() {
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
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      try {
        const textWithUrl = `${shareText}\n\n${shareUrl}`;
        await navigator.clipboard.writeText(textWithUrl);
        setShareMessage('Copied to clipboard!');
        setTimeout(() => setShareMessage(''), 2000);
      } catch (err) {
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
              Coach&apos;s Corner
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1001.webp"
                alt="Iron Mike - Coach"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Iron Mike</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Head Coach</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Welcome to the coach&apos;s office! Get expert training tips, motivation, 
              and the winning mindset you need to dominate on the ice.
            </p>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                💪 Monday Motivation: &quot;Champions aren&apos;t made in the comfort zone. 
                Every practice, every drill, every moment on the ice is your chance to get better!&quot;
              </p>
              <button
                onClick={() => handleShare(
                  "Monday Motivation: \"Champions aren't made in the comfort zone. Every practice, every drill, every moment on the ice is your chance to get better!\"",
                  "Monday Motivation"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Skill Development: Perfect your wrist shot technique. 
                Keep your bottom hand firm, snap those wrists, and follow through! 
                Practice makes permanent - so make sure you&apos;re practicing correctly.
              </p>
              <button
                onClick={() => handleShare(
                  &quot;Skill Development: Perfect your wrist shot technique. Keep your bottom hand firm, snap those wrists, and follow through! Practice makes permanent - so make sure you&apos;re practicing correctly.&quot;,
                  "Wrist Shot Technique"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-gradient-to-r from-[#1a2332] to-[#16213e] border border-[#4cc9f0]/20 rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20 mb-3">
                📚 Coach&apos;s Recommendation: Want to learn from one of hockey&apos;s greatest coaches? 
                Mike Keenan&apos;s book is a masterclass in leadership, strategy, and winning mentality. 
                A must-read for serious students of the game!
                <br />
                <a 
                  href="https://a.co/d/efzK68g" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4cc9f0] hover:text-white transition-colors underline inline-flex items-center gap-1 mt-2"
                >
                  Get Mike Keenan&apos;s Book → 📖
                </a>
              </p>
              <button
                onClick={() => handleShare(
                  "Coach's Recommendation: Want to learn from one of hockey's greatest coaches? Mike Keenan's book is a masterclass in leadership, strategy, and winning mentality. A must-read for serious students of the game!",
                  "Mike Keenan Book"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🧠 Mental Game: &quot;Hockey is 90% mental, and the other half is physical.&quot; 
                Stay focused, visualize success, and never let one bad shift ruin your game. 
                Champions have short memories for mistakes!
              </p>
              <button
                onClick={() => handleShare(
                  "Mental Game: \"Hockey is 90% mental, and the other half is physical.\" Stay focused, visualize success, and never let one bad shift ruin your game. Champions have short memories for mistakes!",
                  "Mental Game"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Power Play Positioning: Communication is everything! Call for the puck, 
                move your feet, and create space. A good power play looks like organized chaos - 
                everyone moving with purpose.
              </p>
              <button
                onClick={() => handleShare(
                  "Power Play Positioning: Communication is everything! Call for the puck, move your feet, and create space. A good power play looks like organized chaos - everyone moving with purpose.",
                  "Power Play Strategy"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Defensive Fundamentals: Stay between your man and the net. Keep your stick on the ice, 
                take away passing lanes, and force them to the outside. Defense wins championships!
              </p>
              <button
                onClick={() => handleShare(
                  "Defensive Fundamentals: Stay between your man and the net. Keep your stick on the ice, take away passing lanes, and force them to the outside. Defense wins championships!",
                  "Defensive Strategy"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🔥 Conditioning Truth: &quot;You can&apos;t fake being in shape.&quot; 
                The third period is where games are won. When your legs are fresh and theirs are tired, 
                that&apos;s when you strike!
              </p>
              <button
                onClick={() => handleShare(
                  &quot;Conditioning Truth: \&quot;You can&apos;t fake being in shape.\&quot; The third period is where games are won. When your legs are fresh and theirs are tired, that&apos;s when you strike!&quot;,
                  "Conditioning Importance"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🎯 Practice Philosophy: &quot;Perfect practice makes perfect.&quot; 
                Going through the motions teaches you to go through the motions. 
                Every rep counts - make them all count!
              </p>
              <button
                onClick={() => handleShare(
                  "Practice Philosophy: \"Perfect practice makes perfect.\" Going through the motions teaches you to go through the motions. Every rep counts - make them all count!",
                  "Practice Philosophy"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏆 Leadership Lesson: &quot;Be the player your teammates can count on.&quot; 
                Leadership isn&apos;t about wearing a letter on your jersey - it&apos;s about your actions, 
                your effort, and lifting others up when they&apos;re down.
              </p>
              <button
                onClick={() => handleShare(
                  &quot;Leadership Lesson: \&quot;Be the player your teammates can count on.\&quot; Leadership isn&apos;t about wearing a letter on your jersey - it&apos;s about your actions, your effort, and lifting others up when they&apos;re down.&quot;,
                  "Leadership"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
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