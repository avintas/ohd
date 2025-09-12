import { PageLayout } from '@/components';

export default function Academy() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OnlyHockey Academy
          </h1>
          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-[#4cc9f0]/20">
            <p className="text-[#a0aec0] text-lg mb-6">
              Welcome to the OnlyHockey Academy! Learn from the best and improve your hockey skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0a0e1a] p-6 rounded-lg border border-[#4cc9f0]/10">
                <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Skill Development</h3>
                <p className="text-[#a0aec0] mb-4">
                  Master the fundamentals and advanced techniques with our comprehensive training programs.
                </p>
                <ul className="text-[#a0aec0] space-y-2">
                  <li>• Skating techniques</li>
                  <li>• Stick handling drills</li>
                  <li>• Shooting accuracy</li>
                  <li>• Game strategy</li>
                </ul>
              </div>
              <div className="bg-[#0a0e1a] p-6 rounded-lg border border-[#4cc9f0]/10">
                <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Expert Coaching</h3>
                <p className="text-[#a0aec0] mb-4">
                  Learn from professional coaches and former NHL players who know what it takes to succeed.
                </p>
                <ul className="text-[#a0aec0] space-y-2">
                  <li>• One-on-one sessions</li>
                  <li>• Group training</li>
                  <li>• Video analysis</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#4cc9f0]/10 rounded-lg border border-[#4cc9f0]/20">
              <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Coming Soon</h3>
              <p className="text-[#a0aec0]">
                Our comprehensive training modules and interactive coaching sessions are currently being developed. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
