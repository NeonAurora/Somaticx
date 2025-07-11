'use client';

import { useState } from 'react';
import DemoCard from '../DemoCard/DemoCard';
import DemoModal from '../DemoModal/DemoModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function DemoGrid({ demos, activeCategory }) {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredDemos = activeCategory === 'all' 
    ? demos 
    : demos.filter(demo => demo.category.id === activeCategory);

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDemo(null), 300);
  };

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {filteredDemos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎥</div>
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              No Demos Found
            </h3>
            <p 
              className="text-lg"
              style={{ color: themeColors.textSecondary }}
            >
              Try selecting a different category to see more tutorials.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: themeColors.text }}
              >
                {activeCategory === 'all' ? 'All Tutorials' : `${filteredDemos[0]?.category.name} Tutorials`}
              </h2>
              <p 
                className="text-lg"
                style={{ color: themeColors.textSecondary }}
              >
                Showing {filteredDemos.length} tutorial{filteredDemos.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDemos.map((demo) => (
                <DemoCard
                  key={demo.id}
                  demo={demo}
                  onClick={handleDemoClick}
                />
              ))}
            </div>
          </>
        )}

        {selectedDemo && (
          <DemoModal
            demo={selectedDemo}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}