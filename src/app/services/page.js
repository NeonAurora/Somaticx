'use client';

import Layout from '@/components/common/Layout';
import ServicesHero from '@/components/ServicesHero';
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