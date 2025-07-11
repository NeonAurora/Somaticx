'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ProjectFilter({ categories, activeCategory, onCategoryChange }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  return (
    <section 
      className="py-12"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 
            className="text-2xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Filter by Category
          </h2>
          <p 
            className="text-lg"
            style={{ color: themeColors.textSecondary }}
          >
            Discover solutions tailored to specific industry needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
                style={{
                  backgroundColor: isActive ? themeColors.brand : themeColors.surface,
                  color: isActive ? colors.text.inverse : themeColors.text,
                  border: `2px solid ${isActive ? themeColors.brand : 'transparent'}`,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = colors.surface.secondary;
                    e.target.style.borderColor = colors.border.secondary;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.backgroundColor = themeColors.surface;
                    e.target.style.borderColor = 'transparent';
                  }
                }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span 
                  className="px-2 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: isActive ? `${colors.text.inverse}20` : `${themeColors.brand}20`,
                    color: isActive ? colors.text.inverse : themeColors.brand,
                  }}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}