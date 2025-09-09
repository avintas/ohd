import { PageLayout } from '@/components';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Your privacy matters to us. Here&apos;s how we protect and handle your information.
            </p>
          </div>

          {/* Content Area */}
          <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-[#4cc9f0] mb-8">
                Effective Date: [Insert Date]
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li><strong className="text-white">Account Information:</strong> Name, email address, and profile preferences when you create an account</li>
                <li><strong className="text-white">Usage Data:</strong> How you interact with our content, sharing patterns, and browsing behavior</li>
                <li><strong className="text-white">Device Information:</strong> Browser type, device type, and basic technical information</li>
                <li><strong className="text-white">Payment Information:</strong> Credit card details for purchases (processed securely through third-party payment processors)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Provide and improve our hockey content and services</li>
                <li>Process purchases and deliver digital products</li>
                <li>Send important updates about your account and our services</li>
                <li>Analyze usage to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-4">
                We don&apos;t sell your personal information. We may share data with:
              </p>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li><strong className="text-white">Service Providers:</strong> Payment processors, email services, and analytics tools</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
                <li>Contact us with privacy concerns at <a href="mailto:privacy@onlyhockey.com" className="text-[#4cc9f0] hover:text-[#fbbf24] transition-colors">privacy@onlyhockey.com</a></li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                We use cookies to improve your experience, analyze usage, and remember your preferences. 
                You can control cookie settings in your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
