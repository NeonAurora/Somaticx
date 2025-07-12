'use client';

import Layout from '@/components/common/Layout/Layout';
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import WhyUs from '@/components/Home/WhyUs/WhyUs';
import StatsBar from '@/components/Home/StatsBar/StatsBar';
import ProductDemoCarousel from '@/components/Home/ProductDemoCarousel/ProductDemoCarousel';
import NewsroomTicker from "@/components/Home/NewsroomTicker/NewsroomTicker";
import SupportOverview from '@/components/Home/SupportOverview/SupportOverview';
import SocialRow from '@/components/Home/SocialRow/SocialRow';


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Layout>
        <HeroSection />
        <WhyUs />
        <StatsBar />
        <ProductDemoCarousel />
        <NewsroomTicker />
        <SupportOverview />
        <SocialRow />
      </Layout>
    </main>
  );
}