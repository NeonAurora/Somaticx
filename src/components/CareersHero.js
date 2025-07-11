'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function CareersHero() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
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
            Join Our Mission
          </h1>
          
          <p 
            className="text-xl lg:text-2xl mb-8"
            style={{ color: themeColors.brand }}
          >
            Shape the Future of Bio-Industries
          </p>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed mb-12"
            style={{ color: themeColors.textSecondary }}
          >
            Be part of a passionate team that's revolutionizing agriculture and livestock 
            industries through innovative technology. We're looking for creative problem-solvers, 
            forward-thinkers, and passionate individuals who want to make a real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#open-positions"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
              View Open Positions
            </a>
            <a
              href="#culture"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
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
              Learn About Our Culture
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Team Members' },
              { number: '8', label: 'Open Positions' },
              { number: '4.8/5', label: 'Employee Rating' },
              { number: '100%', label: 'Remote Friendly' }
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