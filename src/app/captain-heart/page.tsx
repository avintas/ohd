import { PageLayout } from '@/components';
import Image from 'next/image';

export default function CaptainHeartPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Heart&apos;s Hub
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto bg-orange-500 border-4 border-[#4cc9f0] flex items-center justify-center">
                <Image
                  src="/pims/pim-1009.webp"
                  alt="Captain Heart - Community Leader"
                  width={100}
                  height={100}
                  className="w-18 h-18 md:w-26 md:h-26 rounded-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Captain Heart</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Community Leader</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Where the hockey family comes together! Celebrate achievements, support each other, 
              and build the amazing community that makes hockey special.
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-[#4cc9f0] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/pims/pim-1009.webp"
                    alt="Captain Heart"
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Captain Heart</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ❤️ Community Spotlight: Shoutout to all the parents who wake up at 5am 
                    for practice! Your dedication doesn&apos;t go unnoticed. 
                    You&apos;re the real MVPs of youth hockey! 🏆
                  </p>
                  <div className="text-sm text-[#718096]">2 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-[#4cc9f0] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/pims/pim-1009.webp"
                    alt="Captain Heart"
                    width={40}
                    height={40}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Captain Heart</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🤝 Remember: Every player started somewhere. Be encouraging to beginners, 
                    celebrate small victories, and help build the next generation of hockey lovers. 
                    We&apos;re all in this together!
                  </p>
                  <div className="text-sm text-[#718096]">5 hours ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
