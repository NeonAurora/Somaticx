'use client';

import Layout from '@/components/common/Layout';
import AboutHero from '@/components/AboutHero';
import MissionVision from '@/components/MissionVision';
import CoreValues from '@/components/CoreValues';
import Leadership from '@/components/Leadership';
import CompanyStory from '@/components/CompanyStory';

export default function AboutPage() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <CompanyStory />
    </Layout>
  );
}