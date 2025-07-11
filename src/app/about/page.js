'use client';

import Layout from '@/components/common/Layout/Layout';
import AboutHero from '@/components/About/AboutHero/AboutHero';
import MissionVision from '@/components/About/MissionVision/MissionVision';
import CoreValues from '@/components/About/CoreValues/CoreValues';
import Leadership from '@/components/About/Leadership/Leadership';
import CompanyStory from '@/components/About/CompanyStory/CompanyStory';

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