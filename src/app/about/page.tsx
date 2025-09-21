import { PageLayout } from '@/components';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Onlyhockey
            </h1>

          </div>

          {/* Content - Clean Format */}
          <div className="space-y-12">
            
            {/* Introduction */}
            <div>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
              We launched Onlyhockey as a tribute to the great Game of Hockey. You can challenge yourself and your friends with hockey trivia games, support people you care about with H.U.G.s You can find and share motivational quotes from legendary players and epic coaches as well as interesting facts, anecdotes, curiosities of hockey culture, all that we call hockey lore. We hope you will discover what makes our hockey community so special. Whether you are here for the stories, the stats, or the pure joy of the game, you belong here. 🏠✨</p>
            </div>
            
            {/* Our Mission */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">
              To create a fun, engaging, and safe community where players, fans, and parents can learn, play, and connect. 
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                What We Do
              </h2>
              <div className="space-y-4">
              <p className="text-lg text-[#a0aec0] leading-relaxed">We operate hockey themed trivia games site, where fans can enjoy bite-sized, shareable hockey themed safe content. We want to bring you engaging, easily shareable content in formats perfect for social media and fan conversations.</p>
              </div>
            </div>

            {/* Who We Serve */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Who We Serve
              </h2>
              <p className="text-lg text-[#a0aec0] leading-relaxed">We serve passionate hockey fans, the families who support them, and players at every level of the game. Whether you're a young Mini Mite, a Tier 1 (AAA) standout, a high school player, or a "beer leaguer" who just loves the sport, our community is for you. We also welcome the parents, grandparents, and family members who want to support and motivate their loved ones with content that celebrates the values and spirit of hockey.</p>
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
