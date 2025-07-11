'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function ServiceCard({ service, onLearnMore }) {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  return (
    <div
      className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ backgroundColor: themeColors.surface }}
    >
      {/* Icon & Header */}
      <div className="text-center mb-8">
        <div 
          className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl"
          style={{
            background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
          }}
        >
          {service.icon}
        </div>
        <h3 
          className="text-2xl font-bold mb-4"
          style={{ color: themeColors.text }}
        >
          {service.title}
        </h3>
        <p 
          className="text-lg leading-relaxed"
          style={{ color: themeColors.textSecondary }}
        >
          {service.description}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h4 
          className="text-lg font-semibold mb-4"
          style={{ color: themeColors.text }}
        >
          Key Features
        </h4>
        <div className="space-y-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div 
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: service.color }}
              ></div>
              <span 
                className="text-sm leading-relaxed"
                style={{ color: themeColors.textSecondary }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-8">
        <h4 
          className="text-lg font-semibold mb-4"
          style={{ color: themeColors.text }}
        >
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${service.color}20`,
                color: service.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Indicator */}
      <div className="mb-8 p-4 rounded-lg" style={{ backgroundColor: colors.surface.secondary }}>
        <div className="flex justify-between items-center">
          <span 
            className="text-sm font-medium"
            style={{ color: themeColors.textMuted }}
          >
            Starting from
          </span>
          <span 
            className="text-xl font-bold"
            style={{ color: service.color }}
          >
            {service.pricing}
          </span>
        </div>
        <p 
          className="text-xs mt-1"
          style={{ color: themeColors.textMuted }}
        >
          {service.pricingNote}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={() => onLearnMore(service)}
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
          Learn More
        </button>
        <a
          href="/demo"
          className="w-full py-3 rounded-lg font-semibold text-center transition-all duration-300"
          style={{
            backgroundColor: 'transparent',
            color: service.color,
            border: `2px solid ${service.color}`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = service.color;
            e.target.style.color = colors.text.inverse;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = service.color;
          }}
        >
          Request Demo
        </a>
      </div>
    </div>
  );
}