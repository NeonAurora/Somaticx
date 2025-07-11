'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ResourceLinks() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides, API docs, and technical resources',
      icon: '📚',
      color: colors.status.info,
      links: [
        { name: 'API Documentation', url: '/documentation/api' },
        { name: 'Installation Guides', url: '/documentation/installation' },
        { name: 'User Manuals', url: '/documentation/user-guides' },
        { name: 'Troubleshooting', url: '/documentation/troubleshooting' }
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all Somaticx solutions',
      icon: '🎥',
      color: colors.status.warning,
      links: [
        { name: 'Getting Started Series', url: '/demo?category=getting-started' },
        { name: 'Hardware Setup', url: '/demo?category=hardware' },
        { name: 'Software Training', url: '/demo?category=software' },
        { name: 'Advanced Features', url: '/demo?category=advanced' }
      ]
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      icon: '👥',
      color: colors.status.success,
      links: [
        { name: 'General Discussion', url: '#' },
        { name: 'Technical Q&A', url: '#' },
        { name: 'Feature Requests', url: '#' },
        { name: 'Best Practices', url: '#' }
      ]
    },
    {
      title: 'System Status',
      description: 'Real-time status and maintenance updates',
      icon: '📊',
      color: colors.brand.primary,
      links: [
        { name: 'Service Status', url: '#' },
        { name: 'Maintenance Schedule', url: '#' },
        { name: 'Incident History', url: '#' },
        { name: 'Subscribe to Updates', url: '#' }
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
            Additional Resources
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Everything you need to succeed with Somaticx
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${resource.color}20`,
                }}
              >
                {resource.icon}
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: themeColors.text }}
              >
                {resource.title}
              </h3>

              <p 
                className="text-sm leading-relaxed mb-6 text-center"
                style={{ color: themeColors.textSecondary }}
              >
                {resource.description}
              </p>

              {/* Links */}
              <div className="space-y-3">
                {resource.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="block py-2 px-3 rounded transition-colors duration-200 text-sm"
                    style={{
                      color: themeColors.textSecondary,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${resource.color}20`;
                      e.target.style.color = resource.color;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = themeColors.textSecondary;
                    }}
                  >
                    → {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Support */}
        <div 
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ 
            backgroundColor: `${colors.status.error}10`,
            border: `2px solid ${colors.status.error}20`
          }}
        >
          <div className="text-4xl mb-4">🚨</div>
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Emergency Support
          </h3>
          <p 
            className="text-lg mb-6"
            style={{ color: themeColors.textSecondary }}
          >
            For critical issues affecting your farm operations, contact our emergency hotline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-800-SOMATICX"
              className="px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              style={{
                backgroundColor: colors.status.error,
                color: colors.text.inverse,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.status.errorDark;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.status.error;
              }}
            >
              📞 Emergency Hotline
            </a>
            <span 
              className="flex items-center text-sm"
              style={{ color: themeColors.textSecondary }}
            >
              Available 24/7 for critical issues
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}