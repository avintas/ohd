'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Slide data interface
interface SlideData {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaUrl: string;
  emoji: string;
}

// Slide data array - 5 slides with your specified content and images
const slidesData: SlideData[] = [
  {
    id: 'trivia',
    title: 'Master Hockey Trivia',
    description: 'Challenge yourself with our exciting hockey trivia games. From Original Six history to modern NHL stats, test your knowledge and become a true hockey legend.',
    image: '/gims/gim-00008.webp',
    ctaText: 'Play Trivia',
    ctaUrl: '/trivia-zone',
    emoji: '🧠'
  },
  {
    id: 'hug',
    title: 'Share the Hockey Love',
    description: 'Send a Hockey Universal Greeting (H.U.G.) to someone special. Spread positivity and show your support for fellow hockey fans around the world.',
    image: '/gims/gim-00009.webp',
    ctaText: 'Send a H.U.G.',
    ctaUrl: '/captain-heart',
    emoji: '❤️'
  },
  {
    id: 'motivation',
    title: 'Get Motivated',
    description: 'Fuel your passion with inspiring hockey quotes and motivational content. Let Iron Mike pump you up for your next game or challenge.',
    image: '/gims/gim-00012.webp',
    ctaText: 'Get Pumped',
    ctaUrl: '/iron-mike',
    emoji: '💪'
  },
  {
    id: 'stories',
    title: 'Discover Hockey Stories',
    description: 'Dive into fascinating hockey tales, behind-the-scenes stories, and legendary moments that shaped the game we all love.',
    image: '/gims/gim-00013.webp',
    ctaText: 'Read Stories',
    ctaUrl: '/broadcaster-mike',
    emoji: '📚'
  },
  {
    id: 'community',
    title: 'Join the Community',
    description: 'Connect with fellow hockey enthusiasts, share your passion, and be part of the OnlyHockey family. There is only hockey, and we are all in this together.',
    image: '/gims/gim-00026.webp',
    ctaText: 'Explore More',
    ctaUrl: '/about',
    emoji: '🏒'
  }
];

export function HeroSection() {
  // State management for slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality - advance slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Manual navigation handlers
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
      } else if (event.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % slidesData.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentSlideData = slidesData[currentSlide];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Static Header - "There is Only Hockey!" */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-[60px] font-bold mb-6 bg-gradient-to-r from-[#4cc9f0] via-[#60a5fa] to-[#fbbf24] bg-clip-text text-transparent leading-loose">
            There is Only Hockey!
          </h1>
          <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-3xl mx-auto">
            Where your ❤️ love for the game is all you need.
          </p>
        </div>

        {/* Dynamic Slider Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Dynamic Content */}
          <div className="space-y-8">
            <header>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{currentSlideData.emoji}</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                  {currentSlideData.title}
                </h2>
              </div>
              <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <p>{currentSlideData.description}</p>
              </div>
            </header>
            
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href={currentSlideData.ctaUrl}
                className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {currentSlideData.ctaText} {currentSlideData.emoji}
              </Link>
            </div>
          </div>

          {/* Right Side - Dynamic Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.title}
                width={512}
                height={512}
                className="w-64 h-64 md:w-80 md:h-80 object-contain transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Manual Navigation Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#4cc9f0] scale-125'
                  : 'bg-[#2d3748] hover:bg-[#4a5568]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter and Auto-play Indicator */}
        <div className="text-center mt-6">
          <div className="flex items-center justify-center space-x-4 text-sm text-[#a0aec0]">
            <span>
              {currentSlide + 1} / {slidesData.length}
            </span>
            <span className="text-[#4cc9f0]">•</span>
            <span className="flex items-center">
              {isAutoPlaying ? (
                <>
                  <span className="w-2 h-2 bg-[#4cc9f0] rounded-full animate-pulse mr-2"></span>
                  Auto-playing
                </>
              ) : (
                'Paused'
              )}
            </span>
          </div>
          <p className="text-xs text-[#718096] mt-2">
            Use arrow keys or click dots to navigate • Auto-advances every 5 seconds
          </p>
        </div>
      </div>
    </section>
  );
}
