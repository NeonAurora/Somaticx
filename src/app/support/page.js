'use client';

import Layout from '@/components/common/Layout/Layout';
import SupportHero from '@/components/Support/SupportHero/SupportHero';
import SupportCategories from '@/components/Support/SupportCategories/SupportCategories';
import FAQ from '@/components/Support/FAQ/FAQ';
import ContactSupport from '@/components/Support/ContactSupport/ContactSupport';
import ResourceLinks from '@/components/Support/ResourceLinks/ResourceLinks';

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