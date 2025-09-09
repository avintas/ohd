import { PageLayout } from '@/components';
import Image from 'next/image';

export default function SamanthaPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Trivia Zone
            </h1>
          </div>

          {/* Persona Info */}
          <div className="text-center mb-12">
            <div className="relative mb-4">
              <Image
                src="/pims/pim-1008.webp"
                alt="Samantha - Trivia Master"
                width={100}
                height={100}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-[#4cc9f0]"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">Samantha</h2>
            <p className="text-sm text-[#4cc9f0] mb-4">Trivia Master</p>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Welcome to the ultimate hockey trivia headquarters! Test your knowledge, 
              learn amazing facts, and become a true hockey scholar.
            </p>
          </div>

          {/* Content Feed Placeholder */}
          <div className="space-y-6">
            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1008.webp"
                  alt="Samantha"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Samantha</h3>
                  <p className="text-[#a0aec0] mb-3">
                    🏒 Did you know? Wayne Gretzky holds 61 NHL records! Here&apos;s a fun fact: 
                    He has more career assists (1,963) than any other player has total points!
                  </p>
                  <div className="text-sm text-[#718096]">2 hours ago</div>
                </div>
              </div>
            </div>

            <div className="bg-[#16213e] rounded-lg p-6 border border-[#2d3748]">
              <div className="flex items-start space-x-4">
                <Image
                  src="/pims/pim-1008.webp"
                  alt="Samantha"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-[#4cc9f0]"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">Samantha</h3>
                  <p className="text-[#a0aec0] mb-3">
                    ⚡ Quick Trivia: Which team has won the most Stanley Cups? 
                    The Montreal Canadiens with 24 championships! 🏆
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
