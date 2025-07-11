'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function DemoModal({ demo, isOpen, onClose }) {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  if (!isOpen || !demo) return null;

  const getEmbedUrl = (url) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : url;
  };

  const getDurationColor = (duration) => {
    if (duration === 'Short') return colors.status.success;
    if (duration === 'Medium') return colors.status.warning;
    return colors.status.info;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: colors.surface.overlay }}
      onClick={onClose}
    >
      <div
        className="max-w-6xl w-full max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ backgroundColor: themeColors.background }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
            style={{ 
              backgroundColor: colors.surface.secondary,
              color: themeColors.text 
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.surface.tertiary;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = colors.surface.secondary;
            }}
          >
            ✕
          </button>

          {/* Video Player */}
          <div className="aspect-video w-full rounded-xl overflow-hidden mb-6">
            <iframe
              src={getEmbedUrl(demo.videoUrl)}
              title={demo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Info */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${demo.category.color}20`,
                  color: demo.category.color,
                }}
              >
                {demo.category.name}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium text-white"
                style={{ backgroundColor: getDurationColor(demo.duration) }}
              >
                {demo.duration} • {demo.estimatedTime}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: colors.surface.secondary,
                  color: themeColors.textMuted,
                }}
              >
                {demo.difficulty}
              </span>
            </div>

            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: themeColors.text }}
            >
              {demo.title}
            </h2>

            <p 
              className="text-lg leading-relaxed"
              style={{ color: themeColors.textSecondary }}
            >
              {demo.fullDescription || demo.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* What You'll Learn */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demo.learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: demo.category.color }}
                  ></div>
                  <span 
                    className="text-sm leading-relaxed"
                    style={{ color: themeColors.textSecondary }}
                  >
                    {objective}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Topics Covered
            </h3>
            <div className="flex flex-wrap gap-3">
              {demo.topics.map((topic, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: `${demo.category.color}15`,
                    color: demo.category.color,
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          {demo.prerequisites && demo.prerequisites.length > 0 && (
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Prerequisites
              </h3>
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: colors.surface.secondary }}
              >
                <ul className="space-y-2">
                  {demo.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span 
                        className="text-sm"
                        style={{ color: colors.status.warning }}
                      >
                        ⚠️
                      </span>
                      <span 
                        className="text-sm"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {prereq}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Related Resources */}
          {demo.relatedResources && (
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Related Resources
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {demo.relatedResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    className="p-4 rounded-lg transition-colors duration-200 border"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: colors.border.primary,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.surface.secondary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = themeColors.surface;
                    }}
                  >
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: themeColors.text }}
                    >
                      {resource.title}
                    </h4>
                    <p 
                      className="text-sm"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {resource.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t" style={{ borderColor: colors.border.primary }}>
            <a
              href="/support"
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-colors duration-300"
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
              Get Help with This
            </a>
            <a
              href="/documentation"
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: demo.category.color,
                border: `2px solid ${demo.category.color}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = demo.category.color;
                e.target.style.color = colors.text.inverse;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = demo.category.color;
              }}
            >
              View Documentation
            </a>
            <button
              onClick={() => window.open(demo.videoUrl, '_blank')}
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.text,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.surface.tertiary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.surface.secondary;
              }}
            >
              Watch on YouTube
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}