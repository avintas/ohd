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
              
              <div className="pt-4">
                <button className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Join the Hub
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
      <div className="py-16 px-4 md:px-6 bg-[#16213e]/30">
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
            {/* Parent Appreciation Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-lg font-bold text-white mb-3">Parent Appreciation</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Shoutout to all the parents who wake up at 5am for practice! Your dedication doesn&apos;t go unnoticed. You&apos;re the real MVPs of youth hockey! 🏆
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Community Spotlight: Shoutout to all the parents who wake up at 5am for practice! Your dedication doesn&apos;t go unnoticed. You&apos;re the real MVPs of youth hockey!",
                  "Parent Appreciation"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Supporting Beginners Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-white mb-3">Supporting Beginners</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Every player started somewhere. Be encouraging to beginners, celebrate small victories, and help build the next generation of hockey lovers. We&apos;re all in this together!
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Remember: Every player started somewhere. Be encouraging to beginners, celebrate small victories, and help build the next generation of hockey lovers. We&apos;re all in this together!",
                  "Supporting Beginners"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Hockey Values Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🏒</div>
                <h3 className="text-lg font-bold text-white mb-3">Hockey Values</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Respect, teamwork, perseverance, and sportsmanship. These aren&apos;t just hockey skills - they&apos;re life skills. What you learn on the ice makes you better off the ice too!
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Hockey Values: Respect, teamwork, perseverance, and sportsmanship. These aren&apos;t just hockey skills - they&apos;re life skills. What you learn on the ice makes you better off the ice too!",
                  "Hockey Values"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Volunteer Thanks Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-lg font-bold text-white mb-3">Volunteer Thanks</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  To all the coaches, referees, and volunteers who give their time - THANK YOU! Hockey happens because of people like you who care about the community and love of the game.
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Volunteer Appreciation: To all the coaches, referees, and volunteers who give their time - THANK YOU! Hockey happens because of people like you who care about the community and love of the game.",
                  "Volunteer Thanks"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Mental Health Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-lg font-bold text-white mb-3">Mental Health Matters</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Hockey can be tough - losses hurt, mistakes happen. It&apos;s okay to feel disappointed, but remember: you&apos;re more than your performance on ice. Take care of your mental game too!
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Mental Health Matters: Hockey can be tough - losses hurt, mistakes happen. It&apos;s okay to feel disappointed, but remember: you&apos;re more than your performance on ice. Take care of your mental game too!",
                  "Mental Health"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Celebrating Effort Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-lg font-bold text-white mb-3">Celebrating Effort</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Not every game ends in a win, not every shot goes in. But effort? That&apos;s something to celebrate every single time. Recognize the hustle, the heart, and the never-give-up attitude!
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Celebrate Effort: Not every game ends in a win, not every shot goes in. But effort? That&apos;s something to celebrate every single time. Recognize the hustle, the heart, and the never-give-up attitude!",
                  "Celebrating Effort"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* Inclusive Hockey Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-lg font-bold text-white mb-3">Inclusive Hockey</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Hockey is for everyone - all backgrounds, all skill levels, all ages. Let&apos;s make sure our rinks are welcoming spaces where everyone feels they belong. Diversity makes our sport stronger!
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "Inclusive Hockey: Hockey is for everyone - all backgrounds, all skill levels, all ages. Let&apos;s make sure our rinks are welcoming spaces where everyone feels they belong. Diversity makes our sport stronger!",
                  "Inclusive Hockey"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                title="Share this message"
              >
                📤
              </button>
            </div>

            {/* H.U.G. Reminder Card */}
            <div className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4">💙</div>
                <h3 className="text-lg font-bold text-white mb-3">H.U.G. Reminder</h3>
                <p className="text-[#a0aec0] text-sm leading-relaxed">
                  Send a Hockey Universal Greeting to someone who needs encouragement today. A simple &quot;You&apos;ve got this!&quot; or &quot;Great effort out there!&quot; can make someone&apos;s entire week. Spread the hockey love! 🏒
                </p>
              </div>
              <button
                onClick={() => handleShare(
                  "H.U.G. Reminder: Send a Hockey Universal Greeting to someone who needs encouragement today. A simple \"You&apos;ve got this!\" or \"Great effort out there!\" can make someone&apos;s entire week. Spread the hockey love!",
                  "H.U.G. Reminder"
                )}
                className="absolute top-3 right-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
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