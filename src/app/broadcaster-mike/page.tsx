"use client";

import { PageLayout } from '@/components';
import Image from 'next/image';

export default function BroadcasterMikePage() {
  const handleShare = async (type: string, text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hockey Story from Broadcaster Mike',
          text: text
          // Removed URL so it only shares the formatted text
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(text);
        alert('Story copied to clipboard!');
      } catch (error) {
        // Final fallback
        prompt('Copy this text:', text);
      }
    }
  };
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Behind the Mic
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1011.webp"
                alt="Broadcaster Mike - Hockey Storyteller"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Broadcaster Mike</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Hockey Storyteller</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Welcome behind the microphone! Discover the legendary stories, inspiring moments, 
              and rich history that make hockey the greatest game on earth.
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1011.webp"
                  alt="Broadcaster Mike"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Broadcaster Mike</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🎙️ Legendary Moment: &quot;Do you believe in miracles? YES!&quot; 
                    Al Michaels&apos; call during the 1980 Miracle on Ice remains one of the most 
                    iconic moments in sports broadcasting history.
                    <br />
                    <a 
                      href="https://www.youtube.com/shorts/0WNVhbEDsAU" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#4cc9f0] hover:text-white transition-colors underline"
                    >
                      Watch Al Michaels&apos; iconic call →
                    </a>
                  </p>
                  
                  {/* Share Icons Row */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-xs text-[#718096]">Share:</span>
                    <button 
                      onClick={() => handleShare('simple', 'Legendary Moment: "Do you believe in miracles? YES!" Al Michaels\' call during the 1980 Miracle on Ice remains one of the most iconic moments in sports broadcasting history.\n\nShared from Broadcaster Mike on Onlyhockey.com')}
                      className="text-lg hover:scale-110 transition-transform" 
                      title="Simple Share"
                    >
                      📤
                    </button>
                    <button 
                      onClick={() => handleShare('branded', '🏒 From Broadcaster Mike on Onlyhockey.com:\n\n"Do you believe in miracles? YES!" - Al Michaels\' call during the 1980 Miracle on Ice remains one of the most iconic moments in sports broadcasting history.\n\nRead more hockey stories: ' + window.location.href)}
                      className="text-lg hover:scale-110 transition-transform" 
                      title="Branded Share"
                    >
                      🏒
                    </button>
                    <button 
                      onClick={() => handleShare('social', '🎙️ LEGENDARY MOMENT: Al Michaels\' "Do you believe in miracles? YES!" call from the 1980 Miracle on Ice - one of sports broadcasting\'s most iconic moments.\n\nVia Onlyhockey.com 🏒')}
                      className="text-lg hover:scale-110 transition-transform" 
                      title="Social Media Style"
                    >
                      📱
                    </button>
                    <button 
                      onClick={() => handleShare('minimal', '"Do you believe in miracles? YES!"\n\nAl Michaels\' iconic call from the 1980 Miracle on Ice.\n\n- Broadcaster Mike, Onlyhockey.com')}
                      className="text-lg hover:scale-110 transition-transform" 
                      title="Clean & Minimal"
                    >
                      ✨
                    </button>
                    <button 
                      onClick={() => handleShare('rich', '🏒 Hockey History Moment\n\n"Do you believe in miracles? YES!" - Al Michaels during the 1980 USA vs USSR Olympic hockey game. This call became one of the most iconic moments in sports broadcasting history.\n\nDiscover more legendary hockey moments at Onlyhockey.com')}
                      className="text-lg hover:scale-110 transition-transform" 
                      title="Rich Context"
                    >
                      🎯
                    </button>
                  </div>
                  
                  <div className="text-sm text-[#718096]">3 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1011.webp"
                  alt="Broadcaster Mike"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Broadcaster Mike</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🏒 Hockey History: Before the forward pass was allowed in all three zones (1929), 
                    hockey was a completely different game. Players had to rely on individual rushes 
                    and short passes - imagine Gretzky playing under those rules!
                  </p>
                  <div className="text-sm text-[#718096]">6 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1011.webp"
                  alt="Broadcaster Mike"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Broadcaster Mike</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ✨ Inspiration: Maurice &quot;Rocket&quot; Richard once said, &quot;I played hockey because I loved it, 
                    not because it was a way to make a living.&quot; That passion is what separates legends 
                    from simply talented players.
                  </p>
                  <div className="text-sm text-[#718096]">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
