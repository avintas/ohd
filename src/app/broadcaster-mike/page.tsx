'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function BroadcasterMikePage() {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey story from Broadcaster Mike - OnlyHockey.com:\n\n"${content}"\n\nBehind the Mic - Legendary Stories & History`;
    const shareUrl = `${window.location.origin}/broadcaster-mike`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Broadcaster Mike - Behind the Mic`,
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
              Behind the Mic
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1011.webp"
                alt="Broadcaster Mike - Hockey Storyteller"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Broadcaster Mike</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Hockey Storyteller</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Welcome behind the microphone! Discover the legendary stories, inspiring moments, 
              and rich history that make hockey the greatest game on earth.
            </p>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20 mb-3">
                🎙️ Legendary Moment: &quot;Do you believe in miracles? YES!&quot; 
                Al Michaels&apos; call during the 1980 Miracle on Ice remains one of the most 
                iconic moments in sports broadcasting history.
                <br />
                <a 
                  href="https://www.youtube.com/shorts/0WNVhbEDsAU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#4cc9f0] hover:text-white transition-colors underline inline-flex items-center gap-1"
                >
                  Watch Al Michaels&apos; iconic call → 📺
                </a>
              </p>
              <button
                onClick={() => handleShare(
                  "Legendary Moment: \"Do you believe in miracles? YES!\" Al Michaels&apos; call during the 1980 Miracle on Ice remains one of the most iconic moments in sports broadcasting history.",
                  "Miracle on Ice"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Hockey History: Before the forward pass was allowed in all three zones (1929), 
                hockey was a completely different game. Players had to rely on individual rushes 
                and short passes - imagine Gretzky playing under those rules!
              </p>
              <button
                onClick={() => handleShare(
                  "Hockey History: Before the forward pass was allowed in all three zones (1929), hockey was a completely different game. Players had to rely on individual rushes and short passes - imagine Gretzky playing under those rules!",
                  "Forward Pass History"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ✨ Inspiration: Maurice &quot;Rocket&quot; Richard once said, &quot;I played hockey because I loved it, 
                not because it was a way to make a living.&quot; That passion is what separates legends 
                from simply talented players.
              </p>
              <button
                onClick={() => handleShare(
                  "Inspiration: Maurice \"Rocket\" Richard once said, \"I played hockey because I loved it, not because it was a way to make a living.\" That passion is what separates legends from simply talented players.",
                  "Rocket Richard Quote"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏆 Championship Story: The 1994 New York Rangers ended their 54-year Stanley Cup drought 
                with one of the most emotional victories in hockey history. Mark Messier&apos;s guarantee 
                and leadership that playoffs became the stuff of legends.
              </p>
              <button
                onClick={() => handleShare(
                  "Championship Story: The 1994 New York Rangers ended their 54-year Stanley Cup drought with one of the most emotional victories in hockey history. Mark Messier&apos;s guarantee and leadership that playoffs became the stuff of legends.",
                  "1994 Rangers Cup"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Goalie Lore: Jacques Plante was the first NHL goalie to regularly wear a mask (1959). 
                When asked why, he famously said, &quot;How would you like a job where, if you made a mistake, 
                a big red light goes on and 18,000 people boo?&quot;
              </p>
              <button
                onClick={() => handleShare(
                  "Goalie Lore: Jacques Plante was the first NHL goalie to regularly wear a mask (1959). When asked why, he famously said, \"How would you like a job where, if you made a mistake, a big red light goes on and 18,000 people boo?\"",
                  "Jacques Plante Mask"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🇨🇦 Original Six Era: From 1942-1967, the NHL had just six teams. Players often worked 
                summer jobs because hockey salaries weren&apos;t enough to live on year-round. 
                Gordie Howe famously worked construction in the off-season!
              </p>
              <button
                onClick={() => handleShare(
                  "Original Six Era: From 1942-1967, the NHL had just six teams. Players often worked summer jobs because hockey salaries weren&apos;t enough to live on year-round. Gordie Howe famously worked construction in the off-season!",
                  "Original Six Era"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Speed Record: The fastest recorded shot in NHL history belongs to Zdeno Chara at 108.8 mph. 
                But here&apos;s the kicker - goalies have just 0.4 seconds to react to a shot from the point. 
                The human eye can barely track it!
              </p>
              <button
                onClick={() => handleShare(
                  "Speed Record: The fastest recorded shot in NHL history belongs to Zdeno Chara at 108.8 mph. But here&apos;s the kicker - goalies have just 0.4 seconds to react to a shot from the point. The human eye can barely track it!",
                  "Fastest Shot Record"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🎩 Hat Trick Tradition: The tradition of throwing hats on the ice after three goals 
                started in the 1950s. A hat store owner in Toronto offered a free hat to any player 
                who scored three goals in a game. The tradition stuck and spread worldwide!
              </p>
              <button
                onClick={() => handleShare(
                  "Hat Trick Tradition: The tradition of throwing hats on the ice after three goals started in the 1950s. A hat store owner in Toronto offered a free hat to any player who scored three goals in a game. The tradition stuck and spread worldwide!",
                  "Hat Trick Origin"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this story"
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