'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function NewsroomTicker() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.secondary',
    accent: 'brand.primary',
  });

  const newsContent = {
    title: "What's New at Somaticx",
    subtitle: "Stay Updated with Our Latest Developments",
    news: [
      {
        type: "Product Update",
        title: "Smart Monitoring System 2.0 Released",
        date: "July 2025",
        description: "Enhanced AI capabilities for livestock health prediction.",
        badge: "New Release"
      },
      {
        type: "Partnership",
        title: "Strategic Alliance with AgriTech Leaders",
        date: "June 2025",
        description: "Expanding our reach in sustainable agriculture solutions.",
        badge: "Partnership"
      },
      {
        type: "Award",
        title: "Innovation Excellence Award 2025",
        date: "May 2025",
        description: "Recognized for outstanding contributions to bio-technology.",
        badge: "Achievement"
      },
      {
        type: "Research",
        title: "Breakthrough in Precision Agriculture",
        date: "April 2025",
        description: "New algorithms improve crop yield predictions by 40%.",
        badge: "Research"
      }
    ]
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            {newsContent.title}
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            {newsContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsContent.news.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{
                background: `linear-gradient(135deg, ${colors.surface.primary}, ${colors.surface.secondary})`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <span 
                  className="text-sm"
                  style={{ color: themeColors.textMuted }}
                >
                  {item.type}
                </span>
                <span 
                  className="px-2 py-1 text-xs rounded-full"
                  style={{
                    backgroundColor: `${colors.brand.primary}20`,
                    color: colors.brand.primary,
                  }}
                >
                  {item.badge}
                </span>
              </div>
              
              <h3 
                className="text-lg font-semibold mb-3"
                style={{ color: themeColors.text }}
              >
                {item.title}
              </h3>
              
              <p 
                className="text-sm mb-4 leading-relaxed"
                style={{ color: themeColors.textSecondary }}
              >
                {item.description}
              </p>
              
              <div 
                className="text-sm"
                style={{ color: themeColors.textMuted }}
              >
                {item.date}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/newsroom"
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
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
            View All Updates
          </a>
        </div>
      </div>
    </section>
  );
}