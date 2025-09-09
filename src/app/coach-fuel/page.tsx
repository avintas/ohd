import { PageLayout } from '@/components';
import Image from 'next/image';

export default function CoachFuelPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Fuel Station
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1010.webp"
                alt="Coach Fuel - Nutritionist"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Coach Fuel</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Nutritionist</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Power up your performance with proper nutrition! Learn what to eat, 
              when to eat it, and how to fuel your body for peak hockey performance.
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1010.webp"
                  alt="Coach Fuel"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Coach Fuel</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ⚡ Pre-Game Fuel: Eat a balanced meal 3-4 hours before the game. 
                    Think: whole grain pasta, lean protein, and vegetables. 
                    Your body needs quality fuel for peak performance!
                  </p>
                  <div className="text-sm text-[#718096]">45 minutes ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1010.webp"
                  alt="Coach Fuel"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Coach Fuel</h3>
                  <p className="text-[#a0aec0] mb-3">
                    💧 Hydration Station: Did you know you can lose 2-3 pounds of water 
                    during a hockey game? Start hydrating 2 hours before and keep sipping 
                    throughout the game!
                  </p>
                  <div className="text-sm text-[#718096]">4 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
