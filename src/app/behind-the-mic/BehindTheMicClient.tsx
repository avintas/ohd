'use client';

import { PageLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';
import type { StoryMessage } from '@/lib/storiesLoader';

interface BehindTheMicClientProps {
  storyMessages: StoryMessage[];
  layoutInfo: { name: string; description: string; theme: string } | null;
}

export default function BehindTheMicClient({ storyMessages, layoutInfo }: BehindTheMicClientProps) {
  const [shareMessage, setShareMessage] = useState('');

  const handleShare = async (content: string, title: string) => {
    const shareText = `🎙️ Broadcasting insight from Don "The Mic" - OnlyHockey.com:\n\n"${content}"\n\nBehind the Mic - Stories from the Broadcast Booth!`;
    const shareUrl = `${window.location.origin}/behind-the-mic`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | Don "The Mic" - Behind the Mic`,
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
                  Behind the Mic
                </h1>
                <div className="space-y-4 text-lg md:text-xl text-[#a0aec0] max-w-lg">
                  <p>Step into the broadcast booth with Don &quot;The Mic&quot; and discover the stories behind the stories. From legendary calls to behind-the-scenes moments that never make it on air.</p>
                  <p>Experience hockey through the eyes of a veteran broadcaster who&apos;s witnessed history unfold, one play-by-play call at a time.</p>
                  <p>Ready to hear the real stories?</p>
                </div>
              </header>
              
              <div className="pt-4 flex justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    document.getElementById('stories-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Hear the Stories 🎙️
                </button>
              </div>
            </div>

            {/* Right Side - Don "The Mic" Character */}
            <div className="flex justify-center lg:justify-end">
              <div className="text-center">
                <Image
                  src="/pims/pim-1011.webp"
                  alt="Don The Mic - Broadcaster"
                  width={512}
                  height={512}
                  className="w-64 h-64 md:w-80 md:h-80 object-contain scale-x-[-1]"
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Don &quot;The Mic&quot;</h3>
                  <p className="text-[#4cc9f0] font-semibold">Voice of Hockey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcasting Stories Section */}
      <div id="stories-section" className="py-16 px-4 md:px-6 bg-[#16213e]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {layoutInfo ? layoutInfo.name : 'From the Broadcast Booth'}
            </h2>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              {layoutInfo ? layoutInfo.description : 'Stories, insights, and wisdom from decades behind the microphone calling hockey\'s greatest moments'}
            </p>
            {layoutInfo && (
              <div className="mt-4">
                <span className="bg-[#4cc9f0] text-[#0a0e1a] px-4 py-2 rounded-full text-sm font-bold">
                  Today&apos;s Theme: {layoutInfo.theme}
                </span>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {storyMessages.map((story) => (
              <div key={story.id} className="bg-[#16213e] hover:bg-[#1e2a4a] rounded-2xl p-8 pt-8 pb-20 transition-all duration-300 hover:scale-105 cursor-pointer group relative">
                <div className="text-center space-y-2">
                  <div className="text-3xl mb-2">{story.emoji}</div>
                  <h3 className="text-base font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-[#a0aec0] text-xs leading-snug">
                    {story.content}
                  </p>
                </div>
                <button
                  onClick={() => handleShare(story.content, story.shareTitle)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  title="Share this broadcasting story"
                >
                  📤
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
