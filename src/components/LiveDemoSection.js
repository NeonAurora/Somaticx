'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function LiveDemoSection() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const demoOptions = [
    {
      type: 'Personal Demo',
      icon: '👤',
      duration: '30 minutes',
      description: 'One-on-one demonstration tailored to your specific needs and use cases.',
      features: ['Personalized walkthrough', 'Q&A session', 'Custom scenarios', 'Follow-up materials']
    },
    {
      type: 'Group Demo',
      icon: '👥',
      duration: '45 minutes',
      description: 'Perfect for teams and organizations looking to evaluate our solutions.',
      features: ['Team-focused presentation', 'Multiple use cases', 'Group discussion', 'Implementation planning']
    },
    {
      type: 'Technical Deep Dive',
      icon: '🔧',
      duration: '60 minutes',
      description: 'In-depth technical demonstration for developers and technical teams.',
      features: ['API walkthrough', 'Integration examples', 'Technical architecture', 'Development support']
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
      id="live-demo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Schedule a Live Demo
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Get a personalized demonstration of our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {demoOptions.map((option, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: themeColors.text }}
              >
                {option.type}
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: themeColors.brand }}
              >
                {option.duration}
              </p>
              <p 
                className="text-sm leading-relaxed mb-6"
                style={{ color: themeColors.textSecondary }}
              >
                {option.description}
              </p>
              <div className="space-y-2 mb-6">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: themeColors.brand }}
                    ></div>
                    <span 
                      className="text-xs"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="w-full py-3 rounded-lg font-semibold transition-colors duration-300"
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
                Book {option.type}
              </button>
            </div>
          ))}
        </div>

        <div 
          className="text-center p-8 rounded-2xl"
          style={{ backgroundColor: themeColors.surface }}
        >
          <h3 
            className="text-2xl font-semibold mb-4"
            style={{ color: themeColors.text }}
          >
            Not sure which demo is right for you?
          </h3>
          <p 
            className="text-lg mb-6"
            style={{ color: themeColors.textSecondary }}
          >
            Let us help you choose the best demonstration format for your needs.
          </p>
          <a
            href="/support"
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300"
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
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}