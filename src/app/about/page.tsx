import { PageLayout } from '@/components';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About OnlyHockey
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#4cc9f0] mb-6">
              A Passion Project Born from Pure Hockey Love
            </h2>
            <p className="text-xl text-[#a0aec0] max-w-3xl mx-auto leading-relaxed">
              OnlyHockey isn&apos;t your typical startup story. There&apos;s no boardroom, no investors, 
              and no corporate strategy meetings. It&apos;s just me—a hockey fanatic who believes 
              the greatest sport on earth deserves content as dynamic and engaging as the game itself.
            </p>
          </div>

          {/* Founder's Story */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              The Solo Journey
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748] mb-8">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-4">
                I&apos;m a solo entrepreneur driven by one simple belief: hockey fans deserve better than 
                recycled highlights and stale statistics. We deserve content that captures the heart, 
                soul, and intelligence of hockey culture. Content worth sharing with fellow fans, 
                family members, and anyone who needs to understand why we&apos;re so passionate about this incredible game.
              </p>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                This project grows from genuine hockey obsession, not market research. Every factoid, 
                motivoid, and statoid comes from countless hours watching games, reading hockey history, 
                and discovering the amazing stories that make hockey more than just a sport.
              </p>
            </div>
          </div>

          {/* Innovation Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Innovation Through Experience
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                OnlyHockey.com has been my proving ground for years. Through that platform, I&apos;ve learned 
                what hockey fans truly want and developed innovative approaches to product development and 
                logistics that put the fan experience first. This new chapter builds on those lessons 
                while focusing on what I do best: creating shareable hockey content that connects people 
                to the game they love.
              </p>
            </div>
          </div>

          {/* Why Passion Over Profit */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Why Passion Over Profit
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748] mb-8">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-6">
                Sure, I could chase venture capital and rapid scaling. But that would change everything 
                about what makes OnlyHockey special. When you&apos;re driven by passion rather than quarterly 
                reports, you make different decisions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0a0e1a] rounded-lg p-6 border border-[#2d3748]">
                  <h3 className="text-lg font-semibold text-[#4cc9f0] mb-3">Quality over quantity</h3>
                  <p className="text-[#a0aec0] text-sm">
                    Every piece of content is crafted to be worth sharing
                  </p>
                </div>
                
                <div className="bg-[#0a0e1a] rounded-lg p-6 border border-[#2d3748]">
                  <h3 className="text-lg font-semibold text-[#4cc9f0] mb-3">Community over customers</h3>
                  <p className="text-[#a0aec0] text-sm">
                    Building relationships with hockey fans, not just transactions
                  </p>
                </div>
                
                <div className="bg-[#0a0e1a] rounded-lg p-6 border border-[#2d3748]">
                  <h3 className="text-lg font-semibold text-[#4cc9f0] mb-3">Authenticity over algorithms</h3>
                  <p className="text-[#a0aec0] text-sm">
                    Creating content that feels genuine because it comes from genuine hockey love
                  </p>
                </div>
                
                <div className="bg-[#0a0e1a] rounded-lg p-6 border border-[#2d3748]">
                  <h3 className="text-lg font-semibold text-[#4cc9f0] mb-3">Sustainability over speed</h3>
                  <p className="text-[#a0aec0] text-sm">
                    Growing at a pace that maintains quality and personal connection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Vision */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              The Vision
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-4">
                I envision OnlyHockey becoming the go-to source for hockey fans who want more than basic 
                news and stats. A place where you discover fascinating hockey facts you never knew, find 
                motivation from the game&apos;s greatest wisdom, and access shareable content that sparks 
                conversations and connections.
              </p>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                Whether you&apos;re sharing a mind-blowing statoid with your hockey group chat, sending a 
                motivational hockey quote to your kid before their game, or just learning something new 
                about the sport you love—OnlyHockey exists to enhance your hockey experience.
              </p>
            </div>
          </div>

          {/* Personal Mission */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Personal Mission
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-4">
                Every successful hockey team needs players who do the little things that don&apos;t show up 
                in box scores but make everyone else better. That&apos;s what I aim to be for hockey culture: 
                the person creating content that makes hockey conversations richer, family connections 
                stronger, and fan experiences more meaningful.
              </p>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                Hockey has given me incredible joy, taught me valuable lessons, and connected me with 
                amazing people. OnlyHockey is my way of giving back to the hockey community that has 
                shaped who I am.
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Connect With Me
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748]">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-6 text-center">
                This is a personal journey, and I love connecting with fellow hockey fans. Whether you 
                have content ideas, want to share how OnlyHockey has enhanced your hockey experience, 
                or just want to talk hockey, I'm always eager to hear from the community.
              </p>
              <div className="text-center space-y-2">
                <p className="text-[#4cc9f0]">Email: hello@onlyhockey.com</p>
                <p className="text-[#a0aec0] text-sm">Follow the journey on social media</p>
              </div>
            </div>
          </div>

          {/* Bottom Line & Quote */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Bottom Line
            </h2>
            <div className="bg-[#16213e] rounded-lg p-8 border border-[#2d3748] mb-8">
              <p className="text-lg text-[#a0aec0] leading-relaxed mb-6">
                OnlyHockey exists because hockey deserves content as passionate, intelligent, and 
                engaging as the fans who love it. This isn&apos;t about building the next big tech company—it&apos;s 
                about building something meaningful for the hockey community.
              </p>
              <p className="text-xl font-semibold text-[#4cc9f0] mb-6">
                One fan, one passion project, infinite hockey love.
              </p>
              <blockquote className="text-lg italic text-[#fbbf24] border-l-4 border-[#4cc9f0] pl-6">
                &quot;The best hockey content comes from someone who truly loves the game, 
                not someone who loves the business of the game.&quot;
              </blockquote>
            </div>
            
            <div className="bg-[#0a0e1a] rounded-lg p-6 border border-[#2d3748]">
              <p className="text-[#4cc9f0] font-semibold mb-2">Ready to meet the crew?</p>
              <p className="text-[#a0aec0]">
                Head back to our home page and click on any crew member to explore their expertise!
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
