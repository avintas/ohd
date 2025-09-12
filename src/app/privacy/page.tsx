import { PageLayout } from '@/components';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Your privacy matters to us. Here's how we protect and handle your information.
            </p>
          </div>

          {/* Content - Clean Format */}
          <div className="space-y-8">
            <p className="text-sm text-[#4cc9f0]">
              Effective Date: September 9, 2025
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <ul className="text-[#a0aec0] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong className="text-white">Account Information:</strong> Name, email address, and profile preferences when you create an account.</li>
                <li><strong className="text-white">Usage Data:</strong> How you interact with our content, sharing patterns, and browsing behavior.</li>
                <li><strong className="text-white">Device Information:</strong> Browser type, device type, and basic technical information.</li>
                <li><strong className="text-white">Payment Information:</strong> Credit card details for purchases (processed securely through third-party payment processors).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-4">We use your information to:</p>
              <ul className="text-[#a0aec0] leading-relaxed space-y-2 list-disc list-inside">
                <li>Provide and improve our OnlyHockey.com content and services.</li>
                <li>Process purchases and deliver digital products.</li>
                <li>Send important updates about your account and our services.</li>
                <li>Analyze usage to improve your user experience.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-4">
                We don&apos;t sell your personal information. We may share data with:
              </p>
              <ul className="text-[#a0aec0] leading-relaxed space-y-2 list-disc list-inside">
                <li><strong className="text-white">Service Providers:</strong> Payment processors, email services, and analytics tools.</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights.</li>
                <li><strong className="text-white">Business Transfers:</strong> In the event of a merger or acquisition of OnlyHockey.com.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-[#a0aec0] leading-relaxed mb-4">You have the right to:</p>
              <ul className="text-[#a0aec0] leading-relaxed space-y-2 list-disc list-inside">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request data portability.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                We use cookies to improve your experience, analyze usage, and remember your preferences. You can control cookie settings in your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
