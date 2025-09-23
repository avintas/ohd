'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Single slide data - Welcome slide only
const slideData = {
  id: 'welcome',
  title: 'THERE IS ONLY HOCKEY!',
  description: 'L❤️VE FOR THE GAME IS ALL YOU NEED TO HAVE FUN • 🔗 Share - &quot;Hockey facts worth sharing&quot; • 🔥 Motivate - &quot;Quotes that inspire greatness&quot; • 🧠 Challenge - &quot;Trivia for true fans&quot; • 💙 Support - &quot;Encouragement for players&quot;',
  image: '/gims/gim-00026.webp',
  ctaText: 'GET ON THE ICE',
  ctaUrl: '#how-it-works',
  emoji: '🏒'
};

// Animated emoji sequence
const emojiSequence = [
  { emoji: '🔗', label: 'Share' },
  { emoji: '🔥', label: 'Motivate' }, 
  { emoji: '🧠', label: 'Challenge' },
  { emoji: '💙', label: 'Support' }
];

export function HeroSection() {
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Rotate emojis every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prev) => (prev + 1) % emojiSequence.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Toggle video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Single Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[600px]">
          
          {/* Left Column - Content */}
          <div className="space-y-6 z-20 relative text-center lg:text-left">
            
            {/* Large Main Title */}
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                THERE IS<br />ONLY HOCKEY!
              </h1>
            </header>
            
            {/* Subtitle */}
            <div className="text-lg md:text-xl text-[#a0aec0] max-w-lg">
              <div className="flex justify-center lg:justify-start">
                <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider">
                  L❤️VE FOR THE GAME IS ALL YOU NEED
                </span>
              </div>
            </div>

            {/* Function List - No Bullets */}
            <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg pt-6">
              {[
                '🔗 Share - "Hockey facts worth sharing"',
                '🔥 Motivate - "Quotes that inspire greatness"',
                '🧠 Challenge - "Trivia for true fans"',
                '💙 Support - "Encouragement for players"'
              ].map((point, index) => {
                // Check if this function matches the current emoji
                const isActive = index === currentEmojiIndex;
                
                return (
                  <div key={index} className="flex justify-center lg:justify-start transition-all duration-500">
                    <span className={`transition-all duration-500 ${isActive ? 'text-white font-semibold transform scale-105' : ''}`}>
                      {point}
                    </span>
                  </div>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href={slideData.ctaUrl}
                className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
              >
                <span className="text-[#4cc9f0] mr-2">{slideData.emoji}</span>
                <span>{slideData.ctaText}</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Video with Emoji Overlay */}
          <div className="relative z-20">
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative">
              {/* Background Video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://nbrlopkg7zkkwadf.public.blob.vercel-storage.com/vgim-100.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Button */}
              <button
                onClick={toggleVideo}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 z-30"
                aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
              >
                {isVideoPlaying ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              
              {/* Emoji Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="text-center">
                  {/* Giant Rotating Emoji */}
                  <div className="text-6xl md:text-7xl lg:text-8xl mb-4 transition-all duration-300 transform hover:scale-110 drop-shadow-2xl">
                    {emojiSequence[currentEmojiIndex].emoji}
                  </div>
                  
                  {/* Optional Label */}
                  <div className="text-lg md:text-xl text-white font-bold drop-shadow-lg">
                    {emojiSequence[currentEmojiIndex].label}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
