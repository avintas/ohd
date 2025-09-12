import { PageLayout } from '@/components';

export default function Shop() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            OnlyHockey Shop
          </h1>
          <div className="bg-[#1a1f2e] rounded-lg p-8 border border-[#4cc9f0]/20">
            <p className="text-[#a0aec0] text-lg mb-6">
              Welcome to the OnlyHockey Shop! This page is currently under construction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#0a0e1a] p-6 rounded-lg border border-[#4cc9f0]/10">
                <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Hockey Gear</h3>
                <p className="text-[#a0aec0]">Premium hockey equipment and accessories</p>
              </div>
              <div className="bg-[#0a0e1a] p-6 rounded-lg border border-[#4cc9f0]/10">
                <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Apparel</h3>
                <p className="text-[#a0aec0]">OnlyHockey branded clothing and merchandise</p>
              </div>
              <div className="bg-[#0a0e1a] p-6 rounded-lg border border-[#4cc9f0]/10">
                <h3 className="text-xl font-semibold text-[#4cc9f0] mb-3">Training Tools</h3>
                <p className="text-[#a0aec0]">Equipment to improve your hockey skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
