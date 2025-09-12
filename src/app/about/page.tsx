import { PageLayout } from '@/components';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About
            </h1>
            <p className="text-xl text-[#a0aec0] leading-relaxed">
              OnlyHockey.com began in the mid-2000s as an e-commerce platform born from a pure love for the game. We've always loved to innovate, and this project was the proving ground where we pushed the boundaries of what was possible.
            </p>
          </div>

          {/* Content - Clean Format */}
          <div className="space-y-12">
            
            {/* Our Legacy of Firsts */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Legacy of Firsts
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-[#a0aec0] leading-relaxed">
                  We were the first to publish a comprehensive database of professional hockey stick patterns. Most importantly, we were the first to provide the public with "pro-returns"—the actual professional equipment used by the pros.
                </p>
                <p className="text-lg text-[#a0aec0] leading-relaxed">
                  This platform was a proving ground where we developed a revolutionary logistics system. Using advanced optimization algorithms, we created an innovative system for shipping and packaging that dramatically improved efficiency.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                Today, we continue to innovate by creating content that reflects the depth and intelligence of the sport. OnlyHockey.com focuses on shareable factoids, motivational quotes, and statistics that enhance the fan experience and spark conversation. Our goal is to be a reliable source for hockey fans who want a deeper connection to the game they love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
