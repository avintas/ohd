import { 
  PageLayout, 
  HeroSection,
  TheCrew,
  FinalWelcome
} from '@/components';

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <TheCrew />
      <FinalWelcome />
    </PageLayout>
  );
}
