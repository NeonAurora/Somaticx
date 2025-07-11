 
'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout/Layout';
import PortfolioHero from '@/components/Portfolio/PortfolioHero/PortfolioHero';
import ProjectFilter from '@/components/Portfolio/ProjectFilter/ProjectFilter';
import ProjectGrid from '@/components/Portfolio/ProjectGrid/ProjectGrid';
import { projectCategories, projects } from '@/data/projects';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      <PortfolioHero />
      <ProjectFilter 
        categories={projectCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ProjectGrid 
        projects={projects}
        activeCategory={activeCategory}
      />
    </Layout>
  );
}