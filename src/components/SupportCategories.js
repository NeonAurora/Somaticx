'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function SupportCategories() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const supportCategories = [
    {
      title: 'Getting Started',
      description: 'Setup guides, initial configuration, and first steps with your Somaticx solutions.',
      icon: '🚀',
      color: colors.status.success,
      links: [
        'Installation Guide',
        'Quick Start Tutorial',
        'Account Setup',
        'Initial Configuration'
      ]
    },
    {
      title: 'Hardware Support',
      description: 'Troubleshooting, maintenance, and optimization for all Somaticx hardware devices.',
      icon: '⚙️',
      color: colors.status.warning,
      links: [
        'Device Troubleshooting',
        'Sensor Calibration',
        'Connectivity Issues',
        'Maintenance Schedules'
      ]
    },
    {
      title: 'Software Help',
      description: 'Application features, dashboard navigation, and software-related questions.',
      icon: '💻',
      color: colors.status.info,
      links: [
        'Dashboard Guide',
        'Feature Documentation',
        'Mobile App Help',
        'Data Export'
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Understanding your data, reports, insights, and analytics features.',
      icon: '📊',
      color: colors.brand.primary,
      links: [
        'Data Interpretation',
        'Custom Reports',
        'Analytics Setup',
        'Export Options'
      ]
    },
    {
      title: 'Integration Support',
      description: 'API documentation, third-party integrations, and custom development help.',
      icon: '🔗',
      color: colors.brand.secondary,
      links: [
        'API Documentation',
        'Integration Guides',
        'Webhook Setup',
        'Custom Development'
      ]
    },
    {
      title: 'Billing & Account',
      description: 'Subscription management, billing questions, and account administration.',
      icon: '💳',
      color: colors.accent.primary,
      links: [
        'Billing Information',
        'Plan Changes',
        'Account Settings',
        'Invoice History'
      ]
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
            Browse by Category
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Find the help you need quickly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              style={{ backgroundColor: themeColors.surface }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${category.color}20`,
                }}
              >
                {category.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: themeColors.text }}
              >
                {category.title}
              </h3>

              <p 
                className="text-sm leading-relaxed mb-6 text-center"
                style={{ color: themeColors.textSecondary }}
              >
                {category.description}
              </p>

              {/* Quick Links */}
              <div className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 px-3 rounded transition-colors duration-200 text-sm"
                    style={{
                      color: themeColors.textSecondary,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.surface.secondary;
                      e.target.style.color = category.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = themeColors.textSecondary;
                    }}
                  >
                    → {link}
                  </a>
                ))}
              </div>

              {/* View All Button */}
              <button
                className="w-full mt-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = category.color;
                  e.target.style.color = colors.text.inverse;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = `${category.color}20`;
                  e.target.style.color = category.color;
                }}
              >
                View All Articles
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}