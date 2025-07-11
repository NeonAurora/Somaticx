'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function Footer() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    brand: 'brand.primary',
    surface: 'surface.primary',
  });

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Newsroom', href: '/newsroom' },
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Demo', href: '/demo' },
        { name: 'Documentation', href: '/documentation' },
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Support', href: '/support' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Statistics', href: '/statistics' },
      ]
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Certificates', href: '/certificates' },
      ]
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'GitHub', href: '#', icon: '👨‍💻' },
    { name: 'YouTube', href: '#', icon: '📺' },
  ];

  return (
    <footer 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: themeColors.brand }}
              >
                <span className="text-white font-bold text-lg">🧬</span>
              </div>
              <span 
                className="text-xl font-bold"
                style={{ color: themeColors.text }}
              >
                Somaticx
              </span>
            </div>
            <p 
              className="text-sm mb-4 leading-relaxed"
              style={{ color: themeColors.textSecondary }}
            >
              Transforming bio-industries through intelligent innovation in agriculture and livestock technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ backgroundColor: themeColors.surface }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = colors.surface.tertiary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = themeColors.surface;
                  }}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 
                className="text-sm font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: themeColors.textSecondary }}
                      onMouseEnter={(e) => {
                        e.target.style.color = themeColors.brand;
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = themeColors.textSecondary;
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards & Partners Strip */}
        <div 
          className="py-8 mb-8 rounded-lg"
          style={{ backgroundColor: themeColors.surface }}
        >
          <div className="text-center mb-6">
            <h4 
              className="text-sm font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Trusted by Industry Leaders
            </h4>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-2xl">🏆</span>
              <span className="text-2xl">🥇</span>
              <span className="text-2xl">📜</span>
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: colors.border.primary }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p 
              className="text-sm"
              style={{ color: themeColors.textMuted }}
            >
              © 2025 Somaticx. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span 
                className="text-sm"
                style={{ color: themeColors.textMuted }}
              >
                Built with 💚 for the future of bio-industries
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}