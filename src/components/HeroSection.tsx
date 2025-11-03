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
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-start min-h-[500px]">
          {/* Left Column - Content */}
          <div className="space-y-6 z-20 relative text-center lg:text-left">
            {/* Large Main Title */}
            <header>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none tracking-tight">
                THERE IS
                <br />
                ONLY HOCKEY!
              </h1>
            </header>

            {/* Tagline */}
            <div className="text-lg md:text-xl text-[#a0aec0]">
              <span className="text-[#fbbf24] font-bold text-sm uppercase tracking-wider">
                L❤️VE FOR THE GAME IS ALL YOU NEED
              </span>
            </div>

            {/* Funnel-Shaped Explanation */}
            <div className="text-base md:text-lg text-[#a0aec0] leading-relaxed">
              <p>
                We launched 🏒 Onlyhockey as fans for fans to share 📊 the good
                stuff they discover on this site. Send motivational 🔥 quotes
                from legendary players and epic coaches, challenge yourself and
                your friends with hockey 🧠 trivia games, support people you
                care about with H.U.G.s 💙. Hang out with fans who truly get it,
                who know, love, play the game and celebrate the moments that
                matter, and discover 🔍 what makes our hockey community so 🏆
                special. Whether you&apos;re here for the stories, the stats, or
                the pure joy of the game, you belong here. 🏠✨
              </p>
            </div>
          </div>

          {/* Right Column - Wisdom Card */}
          <div className="relative z-20">
            <div className="bg-[#16213e] rounded-2xl p-8 shadow-2xl border border-[#2d3748] flex flex-col">
              {/* Header with Title and Refresh Button */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{WISDOM_EMOJI}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Get in the Game
                    </h3>
                    <p className="text-sm text-[#a0aec0]">Hockey Essentials</p>
                  </div>
                </div>
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

              {/* Error State */}
              {error && (
                <div className="mb-4 bg-red-900/20 border border-red-500/30 rounded-lg p-2">
                  <p className="text-red-400 text-xs">⚠️ {error}</p>
                </div>
              )}

              {/* Wisdom Messages List */}
              <div>
                {loading && wisdom.length === 0 ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#4cc9f0]"></div>
                      <p className="text-[#a0aec0] mt-2 text-sm">
                        Loading fresh wisdom...
                      </p>
                    </div>
                  </div>
                ) : (
                  <ul
                    role="list"
                    className="divide-y divide-[#2d3748] space-y-0"
                  >
                    {wisdom.map((item) => (
                      <li
                        key={item.id}
                        className="py-4 transition-all duration-300 hover:bg-[#1e2a4a] flex items-start justify-between"
                      >
                        {/* Left side: Content */}
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium leading-tight text-left">
                            {item.from_the_box || item.musing}
                          </div>
                        </div>

                        {/* Right side: Share Button */}
                        <button
                          onClick={() => handleShare(item)}
                          className="ml-3 bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] hover:text-black transition-all cursor-pointer text-base w-8 h-8 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
                          aria-label={`Share: ${item.from_the_box || item.musing}`}
                          title="Share this wisdom"
                        >
                          📤
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
