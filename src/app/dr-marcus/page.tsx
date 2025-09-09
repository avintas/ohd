import { PageLayout } from '@/components';
import Image from 'next/image';

export default function DrMarcusPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Med Bay
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1004.webp"
                alt="Dr. Marcus - Injury Prevention"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Dr. Marcus</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Injury Prevention</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Your go-to source for injury prevention, recovery tips, and staying healthy on the ice. 
              Play smart, play safe, play longer!
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1004.webp"
                  alt="Dr. Marcus"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Dr. Marcus</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🏥 Pre-Game Warm-up Tip: Always start with dynamic stretches! 
                    Leg swings, arm circles, and light skating prepare your muscles 
                    and reduce injury risk by up to 50%.
                  </p>
                  <div className="text-sm text-[#718096]">30 minutes ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1004.webp"
                  alt="Dr. Marcus"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Dr. Marcus</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ❄️ Recovery Reminder: Ice baths aren't just for pros! 
                    10-15 minutes in cold water after intense training helps reduce 
                    inflammation and speeds up recovery.
                  </p>
                  <div className="text-sm text-[#718096]">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
