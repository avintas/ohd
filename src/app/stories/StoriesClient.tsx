'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';

interface Story {
  id: string;
  title: string;
  content: string;
  emoji: string;
  shareTitle: string;
}

interface StoriesClientProps {
  stories: Story[];
}

export default function StoriesClient({ stories }: StoriesClientProps) {

  return (
    <PageLayout>

      {/* Hero Section - From Slide #2 */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start min-h-[500px]">
            
            {/* Left Column - Content */}
            <div className="space-y-6 z-20 relative text-center lg:text-left">
              
              {/* Large Main Title */}
              <header>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                  HOCKEY LORE
                </h1>
              </header>
              
              {/* Description with bullet points */}
              <div className="space-y-3 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider mt-1">
                    STORIES WORTH SHARING
                  </span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Fascinating hockey tales and moments</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Stories that shaped the game we love</span>
                </div>
                <div className="flex items-start space-x-3 justify-center lg:justify-start">
                  <span className="text-[#4cc9f0] mt-2">•</span>
                  <span className="whitespace-nowrap">Discover rich hockey history</span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    document.getElementById('stories-grid')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="inline-flex items-center bg-[#232f3e] hover:bg-[#37475a] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-xl border border-[#4cc9f0]/30 hover:border-[#4cc9f0]"
                >
                  <span className="text-[#4cc9f0] mr-2">📖</span>
                  <span>Jump to Stories</span>
                </button>
              </div>
            </div>

            {/* Right Column - Hockey Puck Character */}
            <div className="relative z-20">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/gims/gim-100.jpg"
                  alt="Hockey storytelling character with puck head"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stories Grid - Direct from content_stories */}
      <div id="stories-grid" className="py-16 md:py-20 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stories.map((story) => (
              <div key={story.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{story.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {story.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
