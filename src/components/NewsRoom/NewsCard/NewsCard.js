'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function NewsCard({ article, onClick }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Product Updates': colors.status.info,
      'Funding': colors.status.success,
      'Partnerships': colors.status.warning,
      'Awards': colors.brand.primary,
      'Press Coverage': colors.brand.secondary,
      'Research': colors.accent.primary,
      'Events': colors.status.info
    };
    return categoryColors[category] || colors.brand.primary;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <article
      onClick={() => onClick(article)}
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      style={{ backgroundColor: themeColors.surface }}
    >
      {/* Article Image */}
      <div 
        className="h-48 flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, ${getCategoryColor(article.category)}20, ${getCategoryColor(article.category)}40)`,
        }}
      >
        {article.image || article.categoryIcon || '📰'}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex justify-between items-center mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${getCategoryColor(article.category)}20`,
              color: getCategoryColor(article.category),
            }}
          >
            {article.category}
          </span>
          <div className="text-right">
            <div 
              className="text-xs"
              style={{ color: themeColors.textMuted }}
            >
              {formatDate(article.date)}
            </div>
            <div 
              className="text-xs"
              style={{ color: themeColors.textMuted }}
            >
              {getTimeAgo(article.date)}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-semibold mb-3 line-clamp-2"
          style={{ color: themeColors.text }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p 
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: themeColors.textSecondary }}
        >
          {article.excerpt}
        </p>

        {/* Tags */}
        {article.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: colors.surface.secondary,
                  color: themeColors.textMuted,
                }}
              >
                #{tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span
                className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: colors.surface.secondary,
                  color: themeColors.textMuted,
                }}
              >
                +{article.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: colors.border.primary }}>
          <div className="flex items-center space-x-2">
            {article.author && (
              <>
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                  <span className="text-white">{article.author.charAt(0)}</span>
                </div>
                <span 
                  className="text-xs"
                  style={{ color: themeColors.textMuted }}
                >
                  {article.author}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center space-x-3">
            {article.readTime && (
              <span 
                className="text-xs flex items-center space-x-1"
                style={{ color: themeColors.textMuted }}
              >
                <span>⏱️</span>
                <span>{article.readTime}</span>
              </span>
            )}
            {article.external && (
              <span 
                className="text-xs flex items-center space-x-1"
                style={{ color: getCategoryColor(article.category) }}
              >
                <span>🔗</span>
                <span>External</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}