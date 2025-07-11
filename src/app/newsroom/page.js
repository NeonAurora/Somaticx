'use client';

import { useState } from 'react';
import Layout from '@/components/common/Layout/Layout';
import NewsroomHero from '@/components/Newsroom/NewsroomHero/NewsroomHero';
import NewsFilter from '@/components/Newsroom/NewsFilter/NewsFilter';
import NewsGrid from '@/components/Newsroom/NewsGrid/NewsGrid';
import NewsletterSignup from '@/components/Newsroom/NewsletterSignup/NewsletterSignup';
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