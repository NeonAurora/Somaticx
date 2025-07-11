'use client';

import Layout from '@/components/common/Layout/Layout';
import ServicesHero from '@/components/Services/ServicesHero/ServicesHero';
import ServiceCategories from '@/components/Services/ServiceCategories/ServiceCategories';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServiceCategories services={services} />
    </Layout>
  );
}