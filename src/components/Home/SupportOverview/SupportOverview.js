'use client';

import { useTheme } from '@/context/ThemeContext';
import { useInteractiveColors, useThemeColors } from '@/hooks/useThemeColor';

export default function SupportOverview() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    accent: 'brand.primary',
  });

  const supportContent = {
    title: "Always Here For You",
    subtitle: "Comprehensive Support When You Need It",
    description: "Our dedicated support team ensures your success with round-the-clock assistance, comprehensive documentation, and personalized guidance.",
    features: [
      "24/7 Technical Support",
      "Comprehensive Documentation",
      "Live Demo Sessions",
      "Training & Onboarding"
    ],
    cta: "Get Support Now"
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: themeColors.text }}
          >
            {supportContent.title}
          </h2>
          
          <p 
            className="text-xl mb-8"
            style={{ color: themeColors.textSecondary }}
          >
            {supportContent.subtitle}
          </p>
          
          <p 
            className="text-lg mb-12 leading-relaxed"
            style={{ color: themeColors.textSecondary }}
          >
            {supportContent.description}
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {supportContent.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-sm"
                style={{ backgroundColor: themeColors.surface }}
              >
                <div 
                  className="font-semibold"
                  style={{ color: themeColors.accent }}
                >
                  ✓ {feature}
                </div>
              </div>
            ))}
          </div>
            <a
          
            href="/support"
            className="px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
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
            {supportContent.cta}
          </a>
        </div>
      </div>
    </section>
  );
}