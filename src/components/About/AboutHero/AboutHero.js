'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function AboutHero() {
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
            About Somaticx
          </h1>
          
          <p 
            className="text-xl lg:text-2xl mb-8"
            style={{ color: themeColors.brand }}
          >
            Pioneering the Next Generation of Bio-Industry Solutions
          </p>
          
          <p 
            className="text-lg lg:text-xl leading-relaxed mb-12"
            style={{ color: themeColors.textSecondary }}
          >
            We're a startup dedicated to revolutionizing agriculture and livestock industries through 
            innovative software and hardware solutions. Our mission is to create intelligent systems 
            that enhance productivity, sustainability, and animal welfare across bio-industries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🧬', title: 'Bio-Inspired', desc: 'Solutions rooted in biological principles' },
              { icon: '🚀', title: 'Innovation First', desc: 'Cutting-edge technology at our core' },
              { icon: '🌱', title: 'Sustainable Future', desc: 'Building for tomorrow\'s challenges' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ color: themeColors.text }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: themeColors.textSecondary }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}