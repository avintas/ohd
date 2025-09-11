'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function CoachFuelPage() {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🏒 Hockey nutrition tip from Coach Fuel - OnlyHockey.com:\n\n"${content}"\n\nFuel Station - Power Up Your Performance!`;
    const shareUrl = `${window.location.origin}/coach-fuel`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Coach Fuel - Fuel Station`,
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
              Fuel Station
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1010.webp"
                alt="Coach Fuel - Nutritionist"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Coach Fuel</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Performance Nutritionist</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Power up your performance with proper nutrition! Learn what to eat, 
              when to eat it, and how to fuel your body for peak hockey performance.
            </p>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                ⚡ Pre-Game Fuel: Eat a balanced meal 3-4 hours before the game. 
                Think: whole grain pasta, lean protein, and vegetables. 
                Your body needs quality fuel for peak performance!
              </p>
              <button
                onClick={() => handleShare(
                  "Pre-Game Fuel: Eat a balanced meal 3-4 hours before the game. Think: whole grain pasta, lean protein, and vegetables. Your body needs quality fuel for peak performance!",
                  "Pre-Game Nutrition"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                💧 Hydration Station: Did you know you can lose 2-3 pounds of water 
                during a hockey game? Start hydrating 2 hours before and keep sipping 
                throughout the game!
              </p>
              <button
                onClick={() => handleShare(
                  "Hydration Station: Did you know you can lose 2-3 pounds of water during a hockey game? Start hydrating 2 hours before and keep sipping throughout the game!",
                  "Hydration Strategy"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🍌 Recovery Power: Within 30 minutes post-game, eat a 3:1 ratio of carbs to protein. 
                Chocolate milk, banana with peanut butter, or a protein smoothie are perfect choices 
                to kickstart muscle recovery!
              </p>
              <button
                onClick={() => handleShare(
                  "Recovery Power: Within 30 minutes post-game, eat a 3:1 ratio of carbs to protein. Chocolate milk, banana with peanut butter, or a protein smoothie are perfect choices to kickstart muscle recovery!",
                  "Post-Game Recovery"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥩 Protein Power: Hockey players need 1.2-1.7g of protein per kg of body weight daily. 
                Spread it throughout the day - aim for 20-30g per meal. Lean meats, fish, eggs, 
                and dairy are your best friends!
              </p>
              <button
                onClick={() => handleShare(
                  "Protein Power: Hockey players need 1.2-1.7g of protein per kg of body weight daily. Spread it throughout the day - aim for 20-30g per meal. Lean meats, fish, eggs, and dairy are your best friends!",
                  "Daily Protein Needs"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🔋 Energy Management: Avoid sugar crashes! Choose complex carbs like oats, quinoa, 
                and sweet potatoes over simple sugars. They provide steady energy that lasts 
                throughout your entire game or practice.
              </p>
              <button
                onClick={() => handleShare(
                  "Energy Management: Avoid sugar crashes! Choose complex carbs like oats, quinoa, and sweet potatoes over simple sugars. They provide steady energy that lasts throughout your entire game or practice.",
                  "Smart Carb Choices"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🧊 Game Day Timing: Stop eating solid food 2 hours before puck drop. 
                Your last snack should be easily digestible - think banana, toast with honey, 
                or sports drink. Let your stomach focus on the game, not digestion!
              </p>
              <button
                onClick={() => handleShare(
                  "Game Day Timing: Stop eating solid food 2 hours before puck drop. Your last snack should be easily digestible - think banana, toast with honey, or sports drink. Let your stomach focus on the game, not digestion!",
                  "Game Day Timing"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                💪 Creatine Facts: This supplement can boost explosive power and reduce fatigue. 
                Take 3-5g daily, timing doesn&apos;t matter. It&apos;s one of the most researched 
                and effective supplements for hockey players!
              </p>
              <button
                onClick={() => handleShare(
                  "Creatine Facts: This supplement can boost explosive power and reduce fatigue. Take 3-5g daily, timing doesn't matter. It's one of the most researched and effective supplements for hockey players!",
                  "Creatine Benefits"
                )}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                title="Share this tip"
              >
                📤
              </button>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 group relative">
              <p className="text-[#a0aec0] pr-20">
                🥤 Electrolyte Balance: Plain water isn&apos;t enough during intense games. 
                You need sodium, potassium, and magnesium. Sports drinks work, but coconut water 
                with a pinch of sea salt is a natural alternative!
              </p>
              <button
                onClick={() => handleShare(
                  "Electrolyte Balance: Plain water isn't enough during intense games. You need sodium, potassium, and magnesium. Sports drinks work, but coconut water with a pinch of sea salt is a natural alternative!",
                  "Electrolyte Strategy"
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