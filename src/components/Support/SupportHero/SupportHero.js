'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function SupportHero() {
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
            How Can We Help?
          </h1>
          
          <p 
            className="text-xl lg:text-2xl mb-8"
            style={{ color: themeColors.brand }}
          >
            Get the support you need to succeed
          </p>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed mb-12"
            style={{ color: themeColors.textSecondary }}
          >
            Our dedicated support team is here to help you get the most out of your 
            Somaticx solutions. Find answers, get help, or connect with our experts.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or documentation..."
                className="w-full px-6 py-4 pr-12 rounded-lg border focus:outline-none focus:ring-2 text-lg"
                style={{
                  backgroundColor: colors.surface.primary,
                  borderColor: colors.border.primary,
                  color: themeColors.text,
                }}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors duration-200"
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
                🔍
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact-support"
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
              Contact Support
            </a>
            <a
              href="/documentation"
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
              Browse Documentation
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '24/7', label: 'Support Available' },
              { number: '<2hrs', label: 'Average Response Time' },
              { number: '98%', label: 'Customer Satisfaction' },
              { number: '500+', label: 'Help Articles' }
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