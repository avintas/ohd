'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  
  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlideData = slidesData[currentSlide];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Layout - Static Title Left, Dynamic Slider Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[600px]">
          
          {/* Left Side - Static Title */}
          <div className="space-y-8 pt-8 lg:pt-0">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-[#4cc9f0] via-[#60a5fa] to-[#fbbf24] bg-clip-text text-transparent leading-tight">
                There is<br />Only Hockey!
              </h1>
              <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-lg mx-auto lg:mx-0">
                Where your ❤️ love for the game is all you need.
              </p>
            </div>
          </div>

          {/* Right Side - Dynamic Slider Content */}
          <div className="relative">
            {/* Mobile Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#4cc9f0]/80 hover:bg-[#4cc9f0] text-[#0a0e1a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 md:hidden shadow-lg"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#4cc9f0]/80 hover:bg-[#4cc9f0] text-[#0a0e1a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 md:hidden shadow-lg"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              className="space-y-8 text-center lg:text-left"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Dynamic Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src={currentSlideData.image}
                    alt={currentSlideData.title}
                    width={512}
                    height={512}
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain transition-all duration-500"
                    priority
                  />
                </div>
              </div>
              
              {/* Dynamic Content Below Image */}
              <div className="space-y-6">
                <header>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-lg md:text-xl text-[#a0aec0] leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {currentSlideData.description}
                  </p>
                </header>
                
                <div className="pt-4">
                  <Link
                    href={currentSlideData.ctaUrl}
                    className="inline-block bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {currentSlideData.ctaText} {currentSlideData.emoji}
                  </Link>
                </div>
              </div>
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
      </div>
    </section>
  );
}
