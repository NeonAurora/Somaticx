'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout/Layout';
import PartnersHero from '@/components/Partners/PartnersHero/PartnersHero';
import PartnerFilter from '@/components/Partners/PartnerFilter/PartnerFilter';
import PartnerGrid from '@/components/Partners/PartnerGrid/PartnerGrid';
import PartnershipBenefits from '@/components/Partners/PartnershipBenefits/PartnershipBenefits';
import { partnerCategories, partners } from '@/data/partners';

export default function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      <PartnersHero />
      <PartnerFilter 
        categories={partnerCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <PartnerGrid 
        partners={partners}
        activeCategory={activeCategory}
      />
      <PartnershipBenefits />
    </Layout>
  );
}