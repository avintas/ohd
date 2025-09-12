'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function RefereeRileyPage() {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey Rule from Referee Riley - OnlyHockey.com:\n\n"${content}"\n\nRule Book - Know the Game Inside and Out!`;
    const shareUrl = `${window.location.origin}/referee-riley`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Referee Riley - Rule Book`,
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
              Rule Book
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1007.webp"
                alt="Referee Riley - Rules Expert"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Referee Riley</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Rules Expert</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Know the game inside and out! Master the rules, understand the calls, 
              and play with confidence. Fair play makes the game great for everyone.
            </p>
          </div>

          {/* Rules Content */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Rule Spotlight: Offside explained! A player is offside if they enter 
                the attacking zone before the puck. But here&apos;s the key: both skates must 
                completely cross the blue line!
              </p>
              <button
                onClick={() => handleShare(
                  "Rule Spotlight: Offside explained! A player is offside if they enter the attacking zone before the puck. But here&apos;s the key: both skates must completely cross the blue line!",
                  "Offside Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚖️ Fair Play Friday: Remember, hockey is about respect! 
                Respect your teammates, opponents, officials, and the game itself. 
                Good sportsmanship never goes out of style.
              </p>
              <button
                onClick={() => handleShare(
                  "Fair Play Friday: Remember, hockey is about respect! Respect your teammates, opponents, officials, and the game itself. Good sportsmanship never goes out of style.",
                  "Fair Play"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Icing Rule: When a player shoots the puck from behind the center line 
                and it crosses the opposing goal line without being touched, that&apos;s icing! 
                Play stops and the faceoff comes back to the defensive zone.
              </p>
              <button
                onClick={() => handleShare(
                  "Icing Rule: When a player shoots the puck from behind the center line and it crosses the opposing goal line without being touched, that&apos;s icing! Play stops and the faceoff comes back to the defensive zone.",
                  "Icing Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⏱️ Power Play Basics: When a player receives a minor penalty (2 minutes), 
                their team plays short-handed. The opposing team has a &quot;power play&quot; 
                advantage with an extra skater on the ice.
              </p>
              <button
                onClick={() => handleShare(
                  "Power Play Basics: When a player receives a minor penalty (2 minutes), their team plays short-handed. The opposing team has a \"power play\" advantage with an extra skater on the ice.",
                  "Power Play Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🔄 Faceoff Fundamentals: Only the two players taking the faceoff can enter 
                the faceoff circle initially. All other players must stay outside until 
                the puck is dropped and touched by a stick.
              </p>
              <button
                onClick={() => handleShare(
                  "Faceoff Fundamentals: Only the two players taking the faceoff can enter the faceoff circle initially. All other players must stay outside until the puck is dropped and touched by a stick.",
                  "Faceoff Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🛡️ Body Checking Guidelines: Legal body checks must be made with the shoulder 
                or hip, targeting the opponent&apos;s body (not the head). Timing matters - 
                the player must have possession or have just released the puck.
              </p>
              <button
                onClick={() => handleShare(
                  "Body Checking Guidelines: Legal body checks must be made with the shoulder or hip, targeting the opponent&apos;s body (not the head). Timing matters - the player must have possession or have just released the puck.",
                  "Body Checking Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🚫 High-Sticking Violation: If the puck goes in the net off a stick 
                that&apos;s above the crossbar height, no goal! However, if it deflects 
                off an opponent or their stick after the high-stick, the goal counts.
              </p>
              <button
                onClick={() => handleShare(
                  "High-Sticking Violation: If the puck goes in the net off a stick that&apos;s above the crossbar height, no goal! However, if it deflects off an opponent or their stick after the high-stick, the goal counts.",
                  "High-Sticking Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥅 Goaltender Interference: Players cannot make contact with the goalie 
                in their crease or impede their ability to move freely. Even incidental 
                contact can result in a goal being disallowed.
              </p>
              <button
                onClick={() => handleShare(
                  "Goaltender Interference: Players cannot make contact with the goalie in their crease or impede their ability to move freely. Even incidental contact can result in a goal being disallowed.",
                  "Goaltender Interference"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Delayed Penalty: When a team that doesn&apos;t have possession commits 
                a penalty, play continues until they touch the puck. The non-offending 
                team often pulls their goalie for an extra attacker during this time.
              </p>
              <button
                onClick={() => handleShare(
                  "Delayed Penalty: When a team that doesn&apos;t have possession commits a penalty, play continues until they touch the puck. The non-offending team often pulls their goalie for an extra attacker during this time.",
                  "Delayed Penalty"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🏒 Hand Pass Rule: Players can pass the puck with their hand to a teammate, 
                but only in their own defensive zone. In the neutral or attacking zones, 
                a hand pass stops play with a faceoff where the pass originated.
              </p>
              <button
                onClick={() => handleShare(
                  "Hand Pass Rule: Players can pass the puck with their hand to a teammate, but only in their own defensive zone. In the neutral or attacking zones, a hand pass stops play with a faceoff where the pass originated.",
                  "Hand Pass Rule"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this rule"
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