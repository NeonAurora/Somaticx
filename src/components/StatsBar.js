'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function StatsBar() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'brand.primary',
    text: 'text.inverse',
    textSecondary: 'text.inverse',
  });

  const statsContent = {
    title: "Impact by Numbers",
    stats: [
      { number: "500+", label: "Active Partners", icon: "🤝" },
      { number: "150+", label: "Projects Delivered", icon: "📊" },
      { number: "25+", label: "Industries Served", icon: "🌍" },
      { number: "98%", label: "Client Satisfaction", icon: "⭐" }
    ]
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          style={{ color: themeColors.text }}
        >
          {statsContent.title}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsContent.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2"
                style={{ color: themeColors.text }}
              >
                {stat.number}
              </div>
              <div 
                className="text-lg"
                style={{ color: `${colors.text.inverse}CC` }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}