'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function SocialRow() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'surface.primary',
    backgroundHover: 'surface.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    accent: 'brand.primary',
  });

  const socialContent = {
    title: "Connect With Us",
    subtitle: "Follow our journey and stay updated",
    platforms: [
      { name: "LinkedIn", icon: "💼", href: "#", handle: "@somaticx" },
      { name: "Twitter/X", icon: "🐦", href: "#", handle: "@somaticx" },
      { name: "Facebook", icon: "📘", href: "#", handle: "somaticx" },
      { name: "YouTube", icon: "📺", href: "#", handle: "somaticx" },
      { name: "Instagram", icon: "📸", href: "#", handle: "@somaticx" },
      { name: "GitHub", icon: "👨‍💻", href: "#", handle: "somaticx" }
    ],
    cta: "Follow Us"
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: colors.surface.primary }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 
          className="text-3xl lg:text-4xl font-bold mb-4"
          style={{ color: themeColors.text }}
        >
          {socialContent.title}
        </h2>
        
        <p 
          className="text-xl mb-12"
          style={{ color: themeColors.textSecondary }}
        >
          {socialContent.subtitle}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {socialContent.platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.href}
              className="p-6 rounded-xl transition-colors duration-300 group"
              style={{ 
                backgroundColor: colors.surface.secondary,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.surface.tertiary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.surface.secondary;
              }}
            >
              <div className="text-4xl mb-3">{platform.icon}</div>
              <div 
                className="font-semibold mb-1"
                style={{ color: themeColors.text }}
              >
                {platform.name}
              </div>
              <div 
                className="text-sm"
                style={{ color: themeColors.textSecondary }}
              >
                {platform.handle}
              </div>
            </a>
          ))}
        </div>
        
        <div style={{ color: themeColors.textSecondary }}>
          <p className="mb-4">Join thousands of innovators shaping the future of bio-industries</p>
          <div className="inline-flex items-center space-x-2">
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.brand.primary }}
            ></span>
            <span>We're actively sharing insights and updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}