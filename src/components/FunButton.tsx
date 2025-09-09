"use client";

import React, { useState } from 'react';

export function FunButton() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  
  const hockeyQuotes = [
    "Hockey is life!",
    "Puck yeah!",
    "Ice to meet you!",
    "That's how we roll... on ice!",
    "Stick with it!",
    "Goal-den moment!",
    "Ice cold moves!",
    "Slapshot spectacular!"
  ];

  const handleClick = () => {
    setIsClicked(true);
    setClickCount(prev => prev + 1);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-[#0a0e1a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Need Some Hockey Spirit?
        </h2>
        <p className="text-lg text-[#a0aec0] mb-8 max-w-2xl mx-auto">
          Click the button for some hockey motivation!
        </p>
        
        <div className="space-y-6">
          <button
            onClick={handleClick}
            className={`
              bg-[#4cc9f0] hover:bg-[#3bb5e0] text-[#0a0e1a] font-bold 
              py-4 px-8 rounded-full text-lg transition-all duration-200
              transform hover:scale-105 active:scale-95
              ${isClicked ? 'animate-pulse scale-110' : ''}
            `}
          >
            {isClicked ? '🏒 PUCK YEAH! 🏒' : 'Get Pumped!'}
          </button>
          
          {clickCount > 0 && (
            <div className="text-[#a0aec0] text-sm animate-fade-in">
              <p className="mb-2">"{hockeyQuotes[clickCount % hockeyQuotes.length]}"</p>
              <p>Clicks: {clickCount}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
