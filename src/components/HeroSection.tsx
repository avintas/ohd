'use client';

import React, { useState, useEffect } from 'react';

// TypeScript interfaces for Wisdom from Tango CMS
interface WisdomItem {
  id: string;
  title: string;
  musing: string;
  from_the_box?: string;
  theme?: string;
  category?: string;
  attribution?: string;
}

interface WisdomResponse {
  success: boolean;
  data: WisdomItem[];
  count?: number;
  error?: string;
}

// Single navy blue glassy card theme
const cardTheme =
  'bg-gradient-to-br from-[#1e3a8a]/20 to-[#1e40af]/10 border border-[#4cc9f0]/30 backdrop-blur-sm bg-[#0f172a]/80';

// Emoji for wisdom messages
const WISDOM_EMOJI = '💎';

// Fallback content if API fails
const FALLBACK_WISDOM: WisdomItem[] = [
  {
    id: '1',
    title: 'Hockey Wisdom',
    musing: 'Hockey teaches us that every shift matters',
    from_the_box:
      'Every moment on the ice is an opportunity to make a difference.',
  },
  {
    id: '2',
    title: 'Hockey Fact',
    musing: 'Did you know the first hockey puck was made of wood?',
    from_the_box:
      'The game has evolved from wooden pucks to modern vulcanized rubber.',
  },
  {
    id: '3',
    title: 'Encouragement',
    musing: 'Every player deserves encouragement on the ice',
    from_the_box: 'Support your teammates and celebrate their successes.',
  },
  {
    id: '4',
    title: 'Championship Mindset',
    musing: 'Champions learn from every game they play',
    from_the_box: 'Growth comes from reflection and continuous improvement.',
  },
  {
    id: '5',
    title: 'Hard Work',
    musing: "Hard work beats talent when talent doesn't work hard",
    from_the_box: 'Dedication and effort are the foundations of success.',
  },
  {
    id: '6',
    title: 'Stanley Cup',
    musing: 'The Stanley Cup weighs 34.5 pounds',
    from_the_box: 'Lifting the Cup is a testament to a season of dedication.',
  },
  {
    id: '7',
    title: 'Unique Journey',
    musing: 'Your hockey journey is unique and valuable',
    from_the_box: 'Every player brings something special to the game.',
  },
];

export function HeroSection() {
  // State management for wisdom messages
  const [wisdom, setWisdom] = useState<WisdomItem[]>(FALLBACK_WISDOM);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch wisdom messages from Tango CMS
  const fetchWisdomMessages = async (showLoading = false) => {
    try {
      if (showLoading) {
        setLoading(true);
      }
      setError(null);

      // Fetch more items (20) and randomly select 7 for variety
      const apiUrl = '/api/wisdom?limit=20';

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} - ${response.statusText}`
        );
      }

      const data: WisdomResponse = await response.json();

      // Validate response structure
      if (
        !data.success ||
        !data.data ||
        !Array.isArray(data.data) ||
        data.data.length === 0
      ) {
        throw new Error('Invalid response: No wisdom available');
      }

      // Randomly select 7 items from the fetched results for variety
      // Use Fisher-Yates shuffle for better randomization
      const shuffled = [...data.data];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const selectedWisdom = shuffled.slice(0, 7);

      // Log for debugging
      const selectedIds = selectedWisdom.map((w) => w.id).join(', ');
      console.log(
        `✅ Loaded ${selectedWisdom.length} wisdom messages (from ${data.data.length} available)`
      );
      console.log(`📋 Selected IDs: ${selectedIds}`);

      // Update state with randomly selected wisdom (this will cause React to re-render just this section)
      // Force a new array reference to ensure React detects the change
      setWisdom([...selectedWisdom]);
    } catch (error) {
      console.error('Error fetching wisdom:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to load wisdom'
      );

      // Use fallback content on error
      setWisdom(FALLBACK_WISDOM);
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  // Load content on component mount
  useEffect(() => {
    fetchWisdomMessages(true); // Show loading on initial load
  }, []);

  // Refresh function to get new wisdom messages (no loading state to avoid flicker)
  const refreshContent = async () => {
    await fetchWisdomMessages(false); // Don't show loading spinner, just update content
  };

  // Share function using Web Share API with fallback
  const handleShare = async (item: WisdomItem) => {
    const shareText = item.from_the_box || item.musing;

    const shareData = {
      title: 'OnlyHockey Wisdom',
      text: `${shareText} - Shared from OnlyHockey.com`,
      url: window.location.href,
    };

    try {
      // Check if Web Share API is supported
      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(
          `${shareText} - Shared from OnlyHockey.com (${window.location.href})`
        );
        alert('Content copied to clipboard! 📋');
      } else {
        // Final fallback - open Twitter share
        const text = encodeURIComponent(`${shareText} - OnlyHockey.com`);
        const url = encodeURIComponent(window.location.href);
        window.open(
          `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
          '_blank'
        );
      }
    } catch (error) {
      console.log('Sharing failed:', error);
      // Fallback to clipboard if sharing was cancelled or failed
      try {
        await navigator.clipboard.writeText(`${shareText} - OnlyHockey.com`);
        alert('Content copied to clipboard! 📋');
      } catch (clipboardError) {
        console.log('Clipboard fallback failed:', clipboardError);
      }
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Separated Sections Layout */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Section 1: Main Title */}
          <header className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
              THERE IS
              <br />
              ONLY HOCKEY!
            </h1>
          </header>

          {/* Section 2: Tagline */}
          <div className="text-lg md:text-xl text-[#a0aec0]">
            <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider">
              L❤️VE FOR THE GAME IS ALL YOU NEED
            </span>
          </div>

          {/* Section 3: Compact Funnel-Shaped Explanation */}
          <div className="text-base md:text-lg text-[#a0aec0] leading-relaxed">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center max-w-4xl">
                We launched 🏒 Onlyhockey as fans for fans to share 📊 the good
                stuff they discover on this site. Send motivational 🔥 quotes
                from legendary players and epic coaches,
              </div>
              <div className="text-center max-w-3xl">
                challenge yourself and your friends with hockey 🧠 trivia games,
                support people you care about with H.U.G.s 💙. Hang out with
                fans who truly get it,
              </div>
              <div className="text-center max-w-2xl">
                who know, love, play the game and celebrate the moments that
                matter, and discover 🔍 what makes our hockey community so 🏆
                special.
              </div>
              <div className="text-center max-w-xl">
                Whether you&apos;re here for the stories, the stats, or the pure
                joy of the game, you belong here. 🏠✨
              </div>
            </div>
          </div>

          {/* Section 4: Get in the Game */}
          <div className="w-full max-w-2xl pt-8">
            {/* Dynamic Title with Refresh Button */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#4cc9f0] text-center">
                Get in the Game
              </h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  refreshContent();
                }}
                disabled={loading}
                className="bg-[#4cc9f0]/20 hover:bg-[#4cc9f0]/30 text-[#4cc9f0] p-2 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Load new content"
                title="🎲 Show Me More"
                type="button"
              >
                🎲
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-center text-[#a0aec0] text-sm mb-4 opacity-75">
              Hockey Essentials
            </p>

            {/* Error State */}
            {error && (
              <div className="text-center py-2 mb-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs">⚠️ {error}</p>
              </div>
            )}

            {/* Wisdom Messages List - Always show, updates smoothly on refresh */}
            <div className="w-full">
              {loading && wisdom.length === 0 ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#4cc9f0]"></div>
                  <p className="text-[#a0aec0] mt-2">Loading fresh wisdom...</p>
                </div>
              ) : (
                <div
                  className={`overflow-hidden rounded-md ${cardTheme} shadow-xl`}
                >
                  <ul role="list" className="divide-y divide-[#4cc9f0]/20">
                    {wisdom.map((item) => (
                      <li
                        key={item.id}
                        className="px-6 py-4 transition-all duration-300 hover:bg-[#4cc9f0]/10 flex items-center justify-between"
                      >
                        {/* Left side: Emoji + Content */}
                        <div className="flex items-start space-x-3 flex-1 min-w-0">
                          <div className="text-xl flex-shrink-0 mt-0.5">
                            {WISDOM_EMOJI}
                          </div>
                          <div className="text-white text-sm font-medium leading-tight text-left flex-1 min-w-0">
                            {item.from_the_box || item.musing}
                          </div>
                        </div>

                        {/* Right side: Share Button */}
                        <button
                          onClick={() => handleShare(item)}
                          className="ml-4 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-lg w-10 h-10 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                          aria-label={`Share: ${item.from_the_box || item.musing}`}
                          title="Share this wisdom"
                        >
                          📤
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
