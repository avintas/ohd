import { PageLayout } from '@/components';

export default function SupportPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Everything you need to know about refunds, copyright, and getting
              help.
            </p>
          </div>

          {/* Content - Clean Format */}
          <div className="space-y-12">
            {/* Copyright Notice */}
            <div>
              <div className="space-y-8">
                <p className="text-sm text-[#4cc9f0]">
                  Effective Date: September 09, 2025
                </p>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Reporting Copyright Infringement
                  </h3>
                  <p className="text-[#a0aec0] leading-relaxed mb-4">
                    If you believe your copyrighted work has been used without
                    permission, contact us with:
                  </p>
                  <ul className="text-[#a0aec0] leading-relaxed space-y-2 list-disc list-inside">
                    <li>Description of the copyrighted work</li>
                    <li>Location of the allegedly infringing content</li>
                    <li>Your contact information</li>
                    <li>Good faith statement that use is not authorized</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Email Support
                    </h4>
                    <p className="text-[#a0aec0]">
                      <a
                        href="mailto:team@onlyhockey.com"
                        className="text-[#4cc9f0] hover:text-white transition-colors"
                      >
                        team@onlyhockey.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mt-3 mb-3">
                      Business Hours
                    </h4>
                    <p className="text-[#a0aec0] mb-6">
                      Monday-Friday, 9 AM - 5 PM PST
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#2d3748] pt-6 mt-8">
                  <p className="text-sm text-[#718096] mb-2">
                    Last Updated: September 09, 2025
                  </p>
                  <p className="text-sm text-[#a0aec0]">
                    These policies apply to all OnlyHockey.com services and may
                    be updated periodically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
