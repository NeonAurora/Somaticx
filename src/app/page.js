'use client';

import HeroSection from '@/components/HeroSection';
import WhyUs from '@/components/WhyUs';
import StatsBar from '@/components/StatsBar';
import ProductDemoCarousel from '@/components/ProductDemoCarousel';
import NewsroomTicker from '@/components/NewsRoomTicker';
import SupportOverview from '@/components/SupportOverview';
import SocialRow from '@/components/SocialRow';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyUs />
      <StatsBar />
      <ProductDemoCarousel />
      <NewsroomTicker />
      <SupportOverview />
      <SocialRow />
    </main>
  );
}