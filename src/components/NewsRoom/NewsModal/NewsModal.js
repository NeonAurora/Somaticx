'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function NewsModal({ article, isOpen, onClose }) {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  if (!isOpen || !article) return null;

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

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: colors.surface.overlay }}
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ backgroundColor: themeColors.background }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ 
              backgroundColor: colors.surface.secondary,
              color: themeColors.text 
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.surface.tertiary;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.surface.secondary;
            }}
          >
            ✕
          </button>

          {/* Article Hero */}
          <div 
            className="h-64 rounded-xl mb-6 flex items-center justify-center text-8xl"
            style={{
              background: `linear-gradient(135deg, ${getCategoryColor(article.category)}20, ${getCategoryColor(article.category)}40)`,
            }}
          >
            {article.image || article.categoryIcon || '📰'}
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${getCategoryColor(article.category)}20`,
                color: getCategoryColor(article.category),
              }}
            >
              {article.category}
            </span>
            <span 
              className="text-sm"
              style={{ color: themeColors.textMuted }}
            >
              {formatDate(article.date)}
            </span>
            {article.readTime && (
              <span 
                className="text-sm"
                style={{ color: themeColors.textMuted }}
              >
                {article.readTime} read
              </span>
            )}
            {article.author && (
              <span 
                className="text-sm"
                style={{ color: themeColors.textMuted }}
              >
                By {article.author}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 
            className="text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: themeColors.text }}
          >
            {article.title}
          </h1>

          {/* Excerpt */}
          <p 
            className="text-xl leading-relaxed mb-8"
            style={{ color: themeColors.textSecondary }}
          >
            {article.excerpt}
          </p>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            {article.content ? (
              <div 
                className="leading-relaxed"
                style={{ color: themeColors.textSecondary }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <div className="space-y-6" style={{ color: themeColors.textSecondary }}>
                <p className="leading-relaxed">
                  This is the full article content. In a real implementation, this would contain 
                  the complete news article with proper formatting, quotes, and additional details 
                  about the announcement or update.
                </p>
                <p className="leading-relaxed">
                  The content would include more specific information about the topic, 
                  including quotes from leadership, technical details, impact on customers, 
                  and future roadmap items.
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && (
            <div className="mb-8">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg text-sm"
                    style={{
                      backgroundColor: colors.surface.secondary,
                      color: themeColors.textMuted,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Links */}
          {article.relatedLinks && (
            <div className="mb-8">
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Related Links
              </h3>
              <div className="space-y-3">
                {article.relatedLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg transition-colors duration-200 border"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: colors.border.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.surface.secondary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = themeColors.surface;
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <span 
                        className="font-semibold"
                        style={{ color: themeColors.text }}
                      >
                        {link.title}
                      </span>
                      <span className="text-sm">🔗</span>
                    </div>
                    {link.description && (
                      <p 
                        className="text-sm mt-1"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {link.description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t" style={{ borderColor: colors.border.primary }}>
            <button
              onClick={() => {
                navigator.share ? 
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                  }) :
                  navigator.clipboard.writeText(window.location.href)
              }}
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-colors duration-300"
              style={{
                backgroundColor: primaryColors.default,
                color: colors.text.inverse,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = primaryColors.hover;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = primaryColors.default;
              }}
            >
              Share Article
            </button>
            <a
              href="/newsroom"
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: getCategoryColor(article.category),
                border: `2px solid ${getCategoryColor(article.category)}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = getCategoryColor(article.category);
                e.target.style.color = colors.text.inverse;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = getCategoryColor(article.category);
              }}
            >
              Back to Newsroom
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}