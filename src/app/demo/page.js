'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout';
import DemoHero from '@/components/DemoHero';
import DemoFilter from '@/components/DemoFilter';
import DemoGrid from '@/components/Demo/DemoGrid/DemoGrid';
import LiveDemoSection from '@/components/LiveDemoSection';
import { demoCategories, demos } from '@/data/demos';

export default function DemoPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      <DemoHero />
      <LiveDemoSection />
      <DemoFilter 
        categories={demoCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <DemoGrid 
        demos={demos}
        activeCategory={activeCategory}
      />
    </Layout>
  );
}