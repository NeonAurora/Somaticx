'use client';

import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsModal from '../NewsModal/NewsModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function NewsGrid({ articles, activeCategory }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.categoryId === activeCategory);

  // Sort by date (newest first)
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleArticleClick = (article) => {
    if (article.external && article.externalUrl) {
      window.open(article.externalUrl, '_blank');
    } else {
      setSelectedArticle(article);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {sortedArticles.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📰</div>
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              No News Found
            </h3>
            <p 
              className="text-lg"
              style={{ color: themeColors.textSecondary }}
            >
              Try selecting a different category to see more articles.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: themeColors.text }}
              >
                {activeCategory === 'all' ? 'All News' : `${sortedArticles[0]?.category} News`}
              </h2>
              <p 
                className="text-lg"
                style={{ color: themeColors.textSecondary }}
              >
                Showing {sortedArticles.length} article{sortedArticles.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  onClick={handleArticleClick}
                />
              ))}
            </div>
          </>
        )}

        {selectedArticle && (
          <NewsModal
            article={selectedArticle}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}