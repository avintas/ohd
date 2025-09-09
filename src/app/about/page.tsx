import { PageLayout } from '@/components';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Onlyhockey.com
            </h1>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
              Onlyhockey.com began in the mid-2000s as an e-commerce platform born from a pure love for the game. We&apos;ve always loved to innovate, and this project was the proving ground where we pushed the boundaries of what was possible.
            </p>
          </div>

          {/* Our Legacy of Firsts */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Our Legacy of Firsts
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-4">
                We were the first to publish a comprehensive database of professional hockey stick patterns. Most importantly, we were the first to provide the public with &quot;pro-returns&quot;—the actual professional equipment used by the pros.
              </p>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                This platform was a proving ground where we developed a revolutionary logistics system. Using advanced optimization algorithms, we created an innovative system for shipping and packaging that dramatically improved efficiency.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Our Mission
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                Today, we continue to innovate by creating content that reflects the depth and intelligence of the sport. Onlyhockey.com focuses on shareable factoids, motivational quotes, and statistics that enhance the fan experience and spark conversation. Our goal is to be a reliable source for hockey fans who want a deeper connection to the game they love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
