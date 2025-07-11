'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function PortfolioHero() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  return (
    <section 
      className="py-20 lg:py-32"
      style={{
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: themeColors.text }}
          >
            Our Portfolio
          </h1>
          
          <p 
            className="text-xl lg:text-2xl mb-8"
            style={{ color: themeColors.brand }}
          >
            Transforming Bio-Industries Through Innovation
          </p>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed mb-12"
            style={{ color: themeColors.textSecondary }}
          >
            Explore our cutting-edge projects in agriculture, livestock management, 
            and bio-industry technology. Each solution is designed to enhance productivity, 
            sustainability, and operational efficiency.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Active Solutions' },
              { number: '4', label: 'Core Categories' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  style={{ color: themeColors.brand }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: themeColors.textSecondary }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}