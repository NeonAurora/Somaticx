'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function NewsroomHero() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const latestNews = {
    headline: "Somaticx Raises $5M Series A to Accelerate Bio-Industry Innovation",
    date: "December 15, 2024",
    category: "Funding",
    excerpt: "Leading the next generation of agricultural and livestock technology solutions with expanded R&D capabilities."
  };

  return (
    <section 
      className="py-20 lg:py-32"
      style={{
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: themeColors.text }}
          >
            Newsroom
          </h1>
          
          <p 
            className="text-xl lg:text-2xl mb-8"
            style={{ color: themeColors.brand }}
          >
            Latest Updates & Company News
          </p>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed mb-12"
            style={{ color: themeColors.textSecondary }}
          >
            Stay informed about our latest developments, product launches, partnerships, 
            and industry insights. Your source for all Somaticx news and announcements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#subscribe"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
              Subscribe to Updates
            </a>
            <a
              href="#press-kit"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: colors.brand.primary,
                border: `2px solid ${colors.brand.primary}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.brand.primary;
                e.target.style.color = colors.text.inverse;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = colors.brand.primary;
              }}
            >
              Press Kit
            </a>
          </div>
        </div>

        {/* Featured News */}
        <div 
          className="max-w-4xl mx-auto p-8 rounded-2xl"
          style={{ backgroundColor: colors.surface.primary }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${colors.status.success}20`,
                color: colors.status.success,
              }}
            >
              Latest News
            </span>
            <span 
              className="text-sm"
              style={{ color: themeColors.textSecondary }}
            >
              {latestNews.date}
            </span>
          </div>
          <h2 
            className="text-2xl lg:text-3xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            {latestNews.headline}
          </h2>
          <p 
            className="text-lg leading-relaxed mb-6"
            style={{ color: themeColors.textSecondary }}
          >
            {latestNews.excerpt}
          </p>
          <a
            href="#latest-article"
            className="inline-flex items-center space-x-2 font-semibold transition-colors duration-200"
            style={{ color: themeColors.brand }}
            onMouseEnter={(e) => {
              e.target.style.color = colors.brand.primaryDark;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = themeColors.brand;
            }}
          >
            <span>Read Full Story</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}