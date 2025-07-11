'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout';
import NewsroomHero from '@/components/NewsroomHero';
import NewsFilter from '@/components/NewsFilter';
import NewsGrid from '@/components/NewsGrid';
import NewsletterSignup from '@/components/NewsletterSignup';
import { newsCategories, newsArticles } from '@/data/newsRoom';

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <Layout>
      <NewsroomHero />
      <NewsFilter 
        categories={newsCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewsGrid 
        articles={newsArticles}
        activeCategory={activeCategory}
      />
      <NewsletterSignup />
    </Layout>
  );
}