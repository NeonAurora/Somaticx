'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function CompanyStory() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
    brand: 'brand.primary',
  });

  const timeline = [
    {
      year: '2023',
      title: 'The Beginning',
      description: 'Founded by a team of biotechnology and software engineering experts who saw the potential to revolutionize bio-industries through intelligent systems.',
      icon: '🌱'
    },
    {
      year: '2024',
      title: 'First Breakthrough',
      description: 'Developed our core technology platform and completed initial proof-of-concept projects in livestock monitoring and agricultural optimization.',
      icon: '🚀'
    },
    {
      year: '2025',
      title: 'Scaling Innovation',
      description: 'Expanding our technology stack, building strategic partnerships, and preparing for market launch of our flagship solutions.',
      icon: '📈'
    },
    {
      year: 'Future',
      title: 'Global Impact',
      description: 'Vision to become the leading platform for bio-industry innovation, transforming how agriculture and livestock industries operate worldwide.',
      icon: '🌍'
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
            Our Story
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            From startup vision to industry transformation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
              style={{ backgroundColor: colors.border.primary }}
            ></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10"
                       style={{ backgroundColor: themeColors.brand }}
                  ></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div 
                      className="p-6 rounded-xl shadow-sm"
                      style={{ backgroundColor: themeColors.surface }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <div>
                          <h3 
                            className="text-xl font-semibold"
                            style={{ color: themeColors.text }}
                          >
                            {item.title}
                          </h3>
                          <p 
                            className="text-sm font-medium"
                            style={{ color: themeColors.brand }}
                          >
                            {item.year}
                          </p>
                        </div>
                      </div>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}