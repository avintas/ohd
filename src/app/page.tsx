import {
  PageLayout,
  HeroSection,
  FeaturesSection,
  SocialProofSection,
  FeaturedContentSection,
  TheCrew,
  FinalWelcome,
} from '@/components';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <FeaturedContentSection />
      <TheCrew />
      <FinalWelcome />
    </PageLayout>
  );
}
