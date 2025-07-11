'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function CoreValues() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
    brand: 'brand.primary',
  });

  const values = [
    {
      title: 'Innovation Excellence',
      icon: '💡',
      description: 'We push boundaries and embrace cutting-edge technologies to create revolutionary solutions.',
      color: colors.brand.primary
    },
    {
      title: 'Sustainability Focus',
      icon: '🌿',
      description: 'Environmental responsibility and sustainable practices guide every decision we make.',
      color: colors.brand.secondary
    },
    {
      title: 'Ethical Standards',
      icon: '🤝',
      description: 'We maintain the highest ethical standards in animal welfare and business practices.',
      color: colors.status.success
    },
    {
      title: 'Scientific Rigor',
      icon: '🔬',
      description: 'Evidence-based approaches and scientific methodology drive our development process.',
      color: colors.status.info
    },
    {
      title: 'Customer Partnership',
      icon: '🎯',
      description: 'We build lasting partnerships by understanding and exceeding customer expectations.',
      color: colors.status.warning
    },
    {
      title: 'Continuous Learning',
      icon: '📚',
      description: 'We foster a culture of continuous learning and adaptation in our rapidly evolving field.',
      color: colors.accent.primary
    }
  ];

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
            Core Values
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: themeColors.text }}
                >
                  {value.title}
                </h3>
              </div>
              
              <p 
                className="text-sm leading-relaxed text-center"
                style={{ color: themeColors.textSecondary }}
              >
                {value.description}
              </p>
              
              <div 
                className="w-12 h-1 rounded-full mx-auto mt-6"
                style={{ backgroundColor: value.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}