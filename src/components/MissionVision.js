'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function MissionVision() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const content = {
    mission: {
      title: 'Our Mission',
      icon: '🎯',
      description: 'To transform bio-industries through intelligent innovation, creating solutions that enhance productivity, sustainability, and welfare across agriculture and livestock sectors.',
      highlights: [
        'Enhance agricultural productivity',
        'Improve animal welfare standards',
        'Drive sustainable practices',
        'Enable data-driven decisions'
      ]
    },
    vision: {
      title: 'Our Vision',
      icon: '🔮',
      description: 'To become the leading provider of bio-industry technology solutions, setting new standards for innovation and sustainability in agriculture and livestock management.',
      highlights: [
        'Global technology leadership',
        'Industry standard setter',
        'Sustainable innovation pioneer',
        'Trusted partner worldwide'
      ]
    }
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
            Mission & Vision
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Driving the future of bio-industries with purpose and clarity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(content).map(([key, item]) => (
            <div 
              key={key}
              className="p-8 rounded-2xl"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeColors.text }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: themeColors.textSecondary }}
                >
                  {item.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {item.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: themeColors.brand }}
                    ></div>
                    <span 
                      className="text-sm"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}