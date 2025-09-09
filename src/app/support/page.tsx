import { PageLayout } from '@/components';

export default function SupportPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support
            </h1>
            <p className="text-lg text-[#a0aec0] max-w-2xl mx-auto">
              Everything you need to know about refunds, copyright, and getting help.
            </p>
          </div>

          {/* Copyright Notice */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Copyright Notice</h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-sm text-[#4cc9f0] mb-8">
                Effective Date: September 09, 2025
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Our Content</h3>
              <p className="text-[#a0aec0] leading-relaxed mb-4">
                All content on OnlyHockey, including but not limited to:
              </p>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Text, graphics, logos, and images</li>
                <li>Factoids, statoids, and motivoids</li>
                <li>Character illustrations and designs</li>
                <li>Software and website functionality</li>
              </ul>
              <p className="text-[#a0aec0] leading-relaxed mb-6">
                Is protected by copyright law and owned by OnlyHockey or used with permission.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Fair Use</h3>
              <p className="text-[#a0aec0] leading-relaxed mb-4">You may:</p>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Share our content on social media with proper attribution</li>
                <li>Use small excerpts for educational or commentary purposes</li>
                <li>Link to our content from other websites</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Prohibited Uses</h3>
              <p className="text-[#a0aec0] leading-relaxed mb-4">You may not:</p>
              <ul className="text-[#a0aec0] leading-relaxed mb-6 space-y-2">
                <li>Copy large portions of our content without permission</li>
                <li>Use our content for commercial purposes without licensing</li>
                <li>Remove copyright notices or attribution</li>
                <li>Create derivative works based on our content</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-4">Reporting Copyright Infringement</h3>
              <p className="text-[#a0aec0] leading-relaxed mb-4">
                If you believe your copyrighted work has been used without permission, contact us with:
              </p>
              <ul className="text-[#a0aec0] leading-relaxed space-y-2">
                <li>Description of the copyrighted work</li>
                <li>Location of the allegedly infringing content</li>
                <li>Your contact information</li>
                <li>Good faith statement that use is not authorized</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <h3 className="text-xl font-bold text-[#4cc9f0] mb-6">OnlyHockey Support</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Email Support</h4>
                  <div className="space-y-2 text-[#a0aec0]">
                    <p><strong className="text-white">General:</strong> <a href="mailto:team@onlyhockey.com" className="text-[#4cc9f0] hover:text-white transition-colors">team@onlyhockey.com</a></p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Business Hours</h4>
                  <p className="text-[#a0aec0] mb-4">Monday-Friday, 9 AM - 5 PM PST</p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Mailing Address</h4>
                  <div className="text-[#a0aec0] space-y-1">
                    <p>OnlyHockey.com</p>
                    <p>TBD</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#2d3748] pt-6">
                <p className="text-sm text-[#718096] mb-2">
                  Last Updated: September 09, 2025
                </p>
                <p className="text-sm text-[#a0aec0]">
                  These policies apply to all Onlyhockey.com services and may be updated periodically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
