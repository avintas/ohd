import { PageLayout } from '@/components';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About
            </h1>
            <p className="text-xl text-[#a0aec0] leading-relaxed">
              OnlyHockey is a platform built for passionate hockey fans who want more than just highlights and basic news.
            </p>
          </div>

          {/* Content - Clean Format */}
          <div className="space-y-12">
            
            {/* Introduction */}
            <div>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                We built Onlyhockey as fans for fans. <span className="font-semibold text-[#4cc9f0]">Share</span> 🔗 the good stuff you discover, charge your batteries with <span className="font-semibold text-[#4cc9f0]">motivational</span> 🔥 quotes from legendary players and epic coaches, challenge yourself and your friends with <span className="font-semibold text-[#4cc9f0]">Hockey Trivia</span> and support people you know with heartfelt <span className="font-semibold text-[#4cc9f0]">h.u.g.s</span>. Hang out with fans who truly get it, who know, love, play the game and celebrate the moments that matter, and <span className="font-semibold text-[#4cc9f0]">discover</span> what makes our hockey community so special. Whether you&apos;re here for the stories, the stats, or the pure joy of the game, you belong here. 🏠✨
              </p>
            </div>
            
            {/* Our Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                OnlyHockey is a platform built for passionate hockey fans who want more than just highlights and basic news. We create bite-sized, shareable hockey content that goes beyond the surface—content that educates, motivates, and connects fans to the deeper stories of the game they love.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What We Do
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-[#a0aec0] leading-relaxed">
                  We solve a simple problem: hockey content is scattered across platforms and often too lengthy for quick consumption and sharing. OnlyHockey brings you engaging, easily shareable content in formats perfect for social media and fan conversations.
                </p>
                <p className="text-lg text-[#a0aec0] leading-relaxed">
                  Whether you&apos;re looking for fascinating hockey facts to share with fellow fans, motivational content to encourage the hockey players in your life, or insider insights that make you appreciate the sport even more, we&apos;re your one-stop destination for hockey content that sparks conversation and builds community.
                </p>
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                We&apos;re here for hockey fans who are active on social media and love sharing their passion for the game. We&apos;re also here for the parents, grandparents, and family members who want to support and motivate their hockey-playing loved ones with content that celebrates the values and spirit of hockey.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
                Hockey deserves content as dynamic and engaging as the sport itself. We&apos;re building a community where fans can discover, enjoy, and share the stories that make hockey the greatest game on earth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
