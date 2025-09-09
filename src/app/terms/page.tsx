import { PageLayout } from '@/components';

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Onlyhockey.com Terms of Service
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              The terms and conditions for using Onlyhockey.com services.
            </p>
          </div>

          {/* Content Area */}
          <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-[#4cc9f0] mb-8">
                Effective Date: September 9, 2025
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                By using Onlyhockey.com, you agree to these Terms of Service. If you don&apos;t agree, please don&apos;t use our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Onlyhockey.com provides shareable hockey content, including factoids, statistics, motivational content, and digital products for hockey fans.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>You must provide accurate information when creating an account.</li>
                <li>You&apos;re responsible for maintaining account security.</li>
                <li>One account per person.</li>
                <li>You must be 13 years or older to create an account (users under 18 require parental consent).</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Content and Intellectual Property</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li><strong className="text-white">Our Content:</strong> All Onlyhockey.com content is protected by copyright and is owned by us.</li>
                <li><strong className="text-white">Your Use:</strong> You may share our content for personal, non-commercial use with proper attribution.</li>
                <li><strong className="text-white">Prohibited Uses:</strong> You may not commercially redistribute, modify, or claim ownership of our content.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-4">You agree not to:</p>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Post harmful, offensive, or inappropriate content.</li>
                <li>Harass other users or spread misinformation.</li>
                <li>Attempt to hack or disrupt our services.</li>
                <li>Use our platform for illegal activities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Purchases and Refunds</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Digital products are delivered immediately upon purchase.</li>
                <li>Physical products ship within 5-7 business days.</li>
                <li>Refunds are available within 30 days for unused digital products.</li>
                <li>Physical products may be returned within 30 days in original condition.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Onlyhockey.com content is for entertainment and educational purposes.</li>
                <li>We don&apos;t guarantee the accuracy of all statistical information.</li>
                <li>Services are provided &quot;as is&quot; without warranties.</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Onlyhockey.com&apos;s liability is limited to the amount you paid for our services in the past 12 months.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                We may update these terms with 30 days&apos; notice. Your continued use of our services constitutes your acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
