'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useNavigationColors } from '@/hooks/useThemeColor';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navColors = useNavigationColors();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Demo', href: '/demo' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Careers', href: '/careers' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: `${navColors.background}F0`,
        borderBottom: `1px solid ${navColors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
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
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                style={{ 
                  color: navColors.text,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = navColors.textHover;
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = navColors.text;
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ 
                backgroundColor: navColors.background,
                color: navColors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = navColors.border;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = navColors.background;
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: navColors.text }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium"
                  style={{ color: navColors.text }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}