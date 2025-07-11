'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function HeroSection() {
  const { colors } = useTheme();
  const interactiveColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    accent: 'brand.primary',
  });

  const heroContent = {
    headline: "Transforming Bio-Industries Through Intelligent Innovation",
    subheadline: "Pioneering the Future of Agriculture & Livestock",
    valueProposition: "We develop cutting-edge software and hardware solutions that revolutionize how the agricultural and livestock industries operate, grow, and thrive in an increasingly connected world.",
    ctaButtons: [
      { text: "Explore Our Solutions", href: "/services", primary: true },
      { text: "See Our Work", href: "/portfolio", primary: false }
    ]
  };

  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 
          className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: themeColors.text }}
        >
          {heroContent.headline}
        </h1>
        
        <h2 
          className="text-2xl lg:text-3xl font-semibold mb-8"
          style={{ color: themeColors.accent }}
        >
          {heroContent.subheadline}
        </h2>
        
        <p 
          className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ color: themeColors.textSecondary }}
        >
          {heroContent.valueProposition}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {heroContent.ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: button.primary ? interactiveColors.default : 'transparent',
                color: button.primary ? colors.text.inverse : colors.brand.primary,
                border: button.primary ? 'none' : `2px solid ${colors.brand.primary}`,
              }}
              onMouseEnter={(e) => {
                if (button.primary) {
                  e.target.style.backgroundColor = interactiveColors.hover;
                } else {
                  e.target.style.backgroundColor = colors.brand.primary;
                  e.target.style.color = colors.text.inverse;
                }
              }}
              onMouseLeave={(e) => {
                if (button.primary) {
                  e.target.style.backgroundColor = interactiveColors.default;
                } else {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = colors.brand.primary;
                }
              }}
            >
              {button.text}
            </a>
          ))}
        </div>
        
        <div className="mt-16 relative">
          <div 
            className="w-full h-96 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, ${colors.brand.primary}20, ${colors.brand.secondary}20)`,
            }}
          >
            <p style={{ color: themeColors.textSecondary }} className="text-lg">
              🧬 Bio-Inspired Animation Placeholder 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}