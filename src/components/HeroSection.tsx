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

// Slide data array - All slides in Prime Video style
const slidesData: SlideData[] = [
  {
    id: 'welcome',
    title: 'THERE IS ONLY HOCKEY!',
    description: 'WHERE YOUR LOVE FOR THE GAME IS ALL YOU NEED • Share the good stuff you discover • Get motivated with legendary quotes • Challenge yourself with Hockey Trivia • Connect with heartfelt H.U.G.s • Discover what makes our community special',
    image: '/gims/gim-00026.webp',
    ctaText: 'Join the Community',
    ctaUrl: '#features',
    emoji: '🏒'
  },
  {
    id: 'trivia',
    title: 'HOCKEY TRIVIA ZONE',
    description: 'ORIGINAL SIX TO MODERN NHL • Test your knowledge with Samantha • Challenge friends and climb the leaderboard • Become a true hockey legend',
    image: '/gims/gim-00009.webp',
    ctaText: 'Start Playing',
    ctaUrl: '/trivia-zone',
    emoji: '🎯'
  },
  {
    id: 'hug',
    title: 'HOCKEY UNIVERSAL GREETINGS',
    description: 'SPREAD THE LOVE • Send digital H.U.G.s worldwide • Connect with Captain Heart and the hockey community • Show your support for fellow fans',
    image: '/pims/pim-1009.webp',
    ctaText: 'Send a H.U.G.',
    ctaUrl: '/captain-heart',
    emoji: '💙'
  },
  {
    id: 'support',
    title: 'IRON MIKE MOTIVATION',
    description: 'GET PUMPED UP • Inspiring quotes and hockey wisdom • Fuel your passion for the greatest game on ice • Let Iron Mike motivate you',
    image: '/video/gim-supporter-01.mp4',
    ctaText: 'Get Motivated',
    ctaUrl: '/iron-mike',
    emoji: '🔥'
  },
  {
    id: 'stories',
    title: 'HOCKEY STORIES & LEGENDS',
    description: 'BEHIND THE SCENES • Fascinating hockey tales and legendary moments • Stories that shaped the game we love • Discover hockey history',
    image: '/gims/gim-00013.webp',
    ctaText: 'Read Stories',
    ctaUrl: '/broadcaster-mike',
    emoji: '📖'
  },
  {
    id: 'crew',
    title: 'MEET THE CREW',
    description: 'YOUR HOCKEY GUIDES • Expert personalities behind OnlyHockey • Learn, play safer, and have more fun • Connect with your guides',
    image: '/gims/gim-00021.webp',
    ctaText: 'Meet The Crew',
    ctaUrl: '#crew-section',
    emoji: '👥'
  }
];

export function HeroSection() {
  // State management for slider
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Touch/swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Manual navigation handlers
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
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
        
        {/* Unified Two-Column Card */}
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Prime Video Style Layout for All Slides */}
          {(
            /* PRIME VIDEO STYLE LAYOUT */
            <>
              {/* Left Column - Prime Style Text */}
              <div className="space-y-6 z-20 relative">
                {/* Small Brand/Category Label */}
                <div className="flex items-center space-x-2 text-sm font-semibold text-[#4cc9f0] uppercase tracking-wider">
                  <span>OnlyHockey</span>
                  <span className="text-[#a0aec0]">•</span>
                  <span className="text-[#a0aec0]">Original Series</span>
                </div>
                
                {/* Large Main Title */}
                <header>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                    {currentSlideData.title}
                  </h1>
                </header>
                
                {/* Description with bullet points */}
                <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  {currentSlideData.description.split(' • ').map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {index === 0 ? (
                        <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                          {point}
                        </span>
                      ) : (
                        <>
                          <span className="text-[#4cc9f0] mt-2">•</span>
                          <span>{point}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* CTA Button - Prime Style */}
                <div className="pt-6">
                  <Link
                    href={currentSlideData.ctaUrl}
                    className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
                  >
                    <span className="mr-2">{currentSlideData.ctaText}</span>
                    <span className="text-[#4cc9f0]">{currentSlideData.emoji}</span>
                  </Link>
                </div>
              </div>

              {/* Right Column - Prime Style Visual (hide for welcome slide) */}
              {currentSlideData.id !== 'welcome' && (
                <div className="relative z-20">
                  {/* Light Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0e1a]/5 to-[#0a0e1a]/25 z-10 rounded-2xl"></div>
                  
                  {currentSlideData.image.endsWith('.mp4') ? (
                    <video
                      src={currentSlideData.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-contain rounded-2xl shadow-2xl"
                    />
                  ) : (
                      <div className={currentSlideData.id === 'trivia' ? 'relative' : ''}>
                        <Image
                          src={currentSlideData.id === 'trivia' ? '/gims/icerink.JPG' : currentSlideData.image}
                          alt={currentSlideData.title}
                          width={800}
                          height={600}
                          className={`w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-2xl ${
                            currentSlideData.id === 'hug' ? 'scale-x-[-1]' : ''
                          } ${
                            currentSlideData.id === 'trivia' ? 'scale-[0.8]' : ''
                          }`}
                          style={currentSlideData.id === 'trivia' ? {
                            clipPath: 'circle(40% at 50% 50%)'
                          } : {}}
                          priority
                        />
                        {currentSlideData.id === 'trivia' && (
                          <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              border: '4px solid red',
                              borderRadius: '50%',
                              width: '80%',
                              height: '80%',
                              top: '10%',
                              left: '10%'
                            }}
                          ></div>
                        )}
                      </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Manual Navigation - Arrows and Dots */}
        <div className="flex justify-center items-center mt-6 space-x-6">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] text-[#0a0e1a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex space-x-3">
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

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="bg-[#4cc9f0] hover:bg-[#3bb5e0] active:bg-[#2a9cc7] text-[#0a0e1a] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-[#4cc9f0] focus:outline-none"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
