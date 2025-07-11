'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function ProductDemoCarousel() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    accent: 'brand.primary',
  });

  const demoContent = {
    title: "Featured Solutions",
    subtitle: "Explore Our Latest Innovations",
    demos: [
      {
        title: "Smart Livestock Monitoring",
        description: "Real-time health tracking and behavioral analysis for optimal livestock management.",
        category: "Animal Health",
        image: "🐄",
        status: "Demo Ready"
      },
      {
        title: "Precision Agriculture Platform",
        description: "Data-driven crop optimization using IoT sensors and machine learning algorithms.",
        category: "Plant Tech",
        image: "🌾",
        status: "Beta Testing"
      },
      {
        title: "Bio-Industry Analytics Suite",
        description: "Comprehensive data analytics for agricultural and livestock operations.",
        category: "Data Solutions",
        image: "📈",
        status: "Live Demo Available"
      }
    ],
    cta: {
      primary: "Request a Live Demo",
      secondary: "See More in Portfolio"
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
            {demoContent.title}
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            {demoContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {demoContent.demos.map((demo, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-6xl text-center mb-6">{demo.image}</div>
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 text-sm rounded-full mb-3"
                  style={{
                    backgroundColor: `${colors.brand.primary}20`,
                    color: colors.brand.primary,
                  }}
                >
                  {demo.category}
                </span>
                <span 
                  className="inline-block px-3 py-1 text-sm rounded-full mb-3 ml-2"
                  style={{
                    backgroundColor: `${colors.brand.secondary}20`,
                    color: colors.brand.secondary,
                  }}
                >
                  {demo.status}
                </span>
              </div>
              <h3 
                className="text-2xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                {demo.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: themeColors.textSecondary }}
              >
                {demo.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/demo"
              className="px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
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
              {demoContent.cta.primary}
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              style={{
                border: `2px solid ${colors.brand.primary}`,
                color: colors.brand.primary,
                backgroundColor: 'transparent',
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
              {demoContent.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}