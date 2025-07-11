'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function WhyUs() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
  });

  const whyUsContent = {
    title: "Why Choose Somaticx?",
    subtitle: "Four Pillars of Excellence",
    features: [
      {
        icon: "🔬",
        title: "Innovation in Bio-IT",
        description: "Cutting-edge technology that bridges biology and information systems for breakthrough solutions."
      },
      {
        icon: "📈",
        title: "Proven Impact",
        description: "Measurable results that drive growth, efficiency, and sustainability across agricultural sectors."
      },
      {
        icon: "🤝",
        title: "Cross-disciplinary Expertise",
        description: "Our team combines biology, technology, and industry knowledge for comprehensive solutions."
      },
      {
        icon: "🛠️",
        title: "End-to-End Support",
        description: "From conception to implementation and beyond - we're with you every step of the journey."
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
            {whyUsContent.title}
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            {whyUsContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUsContent.features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                {feature.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: themeColors.textSecondary }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}