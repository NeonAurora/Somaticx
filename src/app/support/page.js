'use client';

import Layout from '@/components/common/Layout';
import SupportHero from '@/components/SupportHero';
import SupportCategories from '@/components/SupportCategories';
import FAQ from '@/components/FAQ';
import ContactSupport from '@/components/ContactSupport';
import ResourceLinks from '@/components/ResourceLinks';

export default function SupportPage() {
  return (
    <Layout>
      <SupportHero />
      <SupportCategories />
      <FAQ />
      <ContactSupport />
      <ResourceLinks />
    </Layout>
  );
}