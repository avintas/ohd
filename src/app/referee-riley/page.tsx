import { PageLayout } from '@/components';
import Image from 'next/image';

export default function RefereeRileyPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Rule Book
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1007.webp"
                alt="Referee Riley - Rules Expert"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Referee Riley</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Rules Expert</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Know the game inside and out! Master the rules, understand the calls, 
              and play with confidence. Fair play makes the game great for everyone.
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1007.webp"
                  alt="Referee Riley"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Referee Riley</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🏒 Rule Spotlight: Offside explained! A player is offside if they enter 
                    the attacking zone before the puck. But here's the key: both skates must 
                    completely cross the blue line!
                  </p>
                  <div className="text-sm text-[#718096]">1 hour ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1007.webp"
                  alt="Referee Riley"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Referee Riley</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ⚖️ Fair Play Friday: Remember, hockey is about respect! 
                    Respect your teammates, opponents, officials, and the game itself. 
                    Good sportsmanship never goes out of style.
                  </p>
                  <div className="text-sm text-[#718096]">6 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
