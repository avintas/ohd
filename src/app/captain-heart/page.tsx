'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function CaptainHeartPage() {
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
              Heart&apos;s Hub
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto bg-orange-500 border-4 border-[#4cc9f0] flex items-center justify-center">
                <Image
                  src="/pims/pim-1009.webp"
                  alt="Captain Heart - Community Leader"
                  width={100}
                  height={100}
                  className="w-18 h-18 md:w-26 md:h-26 rounded-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Captain Heart</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Community Leader</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Where the hockey family comes together! Celebrate achievements, support each other, 
              and build the amazing community that makes hockey special.
            </p>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ❤️ Community Spotlight: Shoutout to all the parents who wake up at 5am 
                for practice! Your dedication doesn&apos;t go unnoticed. 
                You&apos;re the real MVPs of youth hockey! 🏆
              </p>
              <button
                onClick={() => handleShare(
                  "Community Spotlight: Shoutout to all the parents who wake up at 5am for practice! Your dedication doesn't go unnoticed. You're the real MVPs of youth hockey!",
                  "Parent Appreciation"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🤝 Remember: Every player started somewhere. Be encouraging to beginners, 
                celebrate small victories, and help build the next generation of hockey lovers. 
                We&apos;re all in this together!
              </p>
              <button
                onClick={() => handleShare(
                  "Remember: Every player started somewhere. Be encouraging to beginners, celebrate small victories, and help build the next generation of hockey lovers. We're all in this together!",
                  "Supporting Beginners"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Hockey Values: Respect, teamwork, perseverance, and sportsmanship. 
                These aren&apos;t just hockey skills - they&apos;re life skills. 
                What you learn on the ice makes you better off the ice too!
              </p>
              <button
                onClick={() => handleShare(
                  &quot;Hockey Values: Respect, teamwork, perseverance, and sportsmanship. These aren&apos;t just hockey skills - they&apos;re life skills. What you learn on the ice makes you better off the ice too!&quot;,
                  "Hockey Values"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🌟 Volunteer Appreciation: To all the coaches, referees, and volunteers who give their time - 
                THANK YOU! Hockey happens because of people like you who care about the community 
                and love of the game.
              </p>
              <button
                onClick={() => handleShare(
                  "Volunteer Appreciation: To all the coaches, referees, and volunteers who give their time - THANK YOU! Hockey happens because of people like you who care about the community and love of the game.",
                  "Volunteer Thanks"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                💪 Mental Health Matters: Hockey can be tough - losses hurt, mistakes happen. 
                It&apos;s okay to feel disappointed, but remember: you&apos;re more than your performance on ice. 
                Take care of your mental game too!
              </p>
              <button
                onClick={() => handleShare(
                  &quot;Mental Health Matters: Hockey can be tough - losses hurt, mistakes happen. It&apos;s okay to feel disappointed, but remember: you&apos;re more than your performance on ice. Take care of your mental game too!&quot;,
                  "Mental Health"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🎉 Celebrate Effort: Not every game ends in a win, not every shot goes in. 
                But effort? That&apos;s something to celebrate every single time. 
                Recognize the hustle, the heart, and the never-give-up attitude!
              </p>
              <button
                onClick={() => handleShare(
                  "Celebrate Effort: Not every game ends in a win, not every shot goes in. But effort? That's something to celebrate every single time. Recognize the hustle, the heart, and the never-give-up attitude!",
                  "Celebrating Effort"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🤗 Inclusive Hockey: Hockey is for everyone - all backgrounds, all skill levels, all ages. 
                Let&apos;s make sure our rinks are welcoming spaces where everyone feels they belong. 
                Diversity makes our sport stronger!
              </p>
              <button
                onClick={() => handleShare(
                  "Inclusive Hockey: Hockey is for everyone - all backgrounds, all skill levels, all ages. Let's make sure our rinks are welcoming spaces where everyone feels they belong. Diversity makes our sport stronger!",
                  "Inclusive Hockey"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                💙 H.U.G. Reminder: Send a Hockey Universal Greeting to someone who needs encouragement today. 
                A simple &quot;You&apos;ve got this!&quot; or &quot;Great effort out there!&quot; can make someone&apos;s entire week. 
                Spread the hockey love! 🏒
              </p>
              <button
                onClick={() => handleShare(
                  "H.U.G. Reminder: Send a Hockey Universal Greeting to someone who needs encouragement today. A simple \"You've got this!\" or \"Great effort out there!\" can make someone's entire week. Spread the hockey love!",
                  "H.U.G. Reminder"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
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