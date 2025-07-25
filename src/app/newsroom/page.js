'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout/Layout';
import NewsroomHero from '@/components/NewsRoom/NewsroomHero/NewsroomHero';
import NewsFilter from '@/components/NewsRoom/NewsFilter/NewsFilter';
import NewsGrid from '@/components/NewsRoom/NewsGrid/NewsGrid';
import NewsletterSignup from '@/components/NewsRoom/NewsletterSignup/NewsletterSignup';
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