import { PageLayout } from '@/components';

export default function FAQPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FAQ
            </h1>
            <p className="text-lg text-[#a0aec0]">
              Everything you need to know about OnlyHockey.com and our hockey content.
            </p>
          </div>

          {/* FAQ Content - Simple List */}
          <div className="space-y-8">
            
            <div>
              <h2 className="text-xl font-bold text-white mb-3">What is OnlyHockey.com?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                OnlyHockey.com is a platform dedicated to creating shareable hockey content including factoids, motivational quotes, and statistics that enhance the fan experience and spark conversation among hockey enthusiasts.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Who are the crew members?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                Our crew consists of hockey personalities each with their own expertise: Broadcaster Mike (stories and history), Samantha (trivia and brain training), Iron Mike (motivation and coaching), and Captain Heart (community and support).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How can I share content from the site?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                Most of our content includes built-in sharing features. Look for share icons on individual stories and posts that allow you to share via your device&apos;s native sharing options or copy content to your clipboard.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Is the content free to use?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                You may share our content on social media with proper attribution and use small excerpts for educational or commentary purposes. For commercial use or large portions of content, please contact us for licensing information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How do I contact support?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                You can reach us at team@onlyhockey.com for general inquiries. Our business hours are Monday-Friday, 9 AM - 5 PM PST.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">What&apos;s the history behind OnlyHockey.com?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                OnlyHockey.com began in the mid-2000s as an e-commerce platform. We were pioneers in publishing comprehensive hockey stick pattern databases and providing &quot;pro-returns&quot; - actual professional equipment used by the pros. Today, we focus on creating engaging hockey content for fans.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">How often is new content added?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                We regularly update our content with new hockey stories, trivia, and motivational content. Follow us to stay updated with the latest additions from our crew members.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Can I suggest content ideas?</h2>
              <p className="text-[#a0aec0] leading-relaxed">
                Absolutely! We love hearing from our community. Send your content suggestions, story ideas, or feedback to team@onlyhockey.com and we&apos;ll consider them for future content.
              </p>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
