'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function DemoCard({ demo, onClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getVideoThumbnail = (url) => {
    // Extract video ID from YouTube URL
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
  };

  const getDurationColor = (duration) => {
    if (duration === 'Short') return colors.status.success;
    if (duration === 'Medium') return colors.status.warning;
    return colors.status.info;
  };

  return (
    <div
      onClick={() => onClick(demo)}
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      style={{ backgroundColor: themeColors.surface }}
    >
      {/* Video Thumbnail */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        {isLoading && (
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: colors.surface.secondary }}
          >
            <div className="text-4xl">{demo.category.icon}</div>
          </div>
        )}
        <img
          src={getVideoThumbnail(demo.videoUrl)}
          alt={demo.title}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl"
            style={{ backgroundColor: colors.brand.primary }}
          >
            ▶️
          </div>
        </div>

        {/* Duration Badge */}
        <div 
          className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium text-white"
          style={{ backgroundColor: getDurationColor(demo.duration) }}
        >
          {demo.duration}
        </div>

        {/* Category Badge */}
        <div 
          className="absolute top-4 left-4 px-2 py-1 rounded text-xs font-medium"
          style={{
            backgroundColor: `${demo.category.color}20`,
            color: demo.category.color,
            backdropFilter: 'blur(8px)',
          }}
        >
          {demo.category.name}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 
          className="text-xl font-semibold mb-3 line-clamp-2"
          style={{ color: themeColors.text }}
        >
          {demo.title}
        </h3>

        {/* Description */}
        <p 
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: themeColors.textSecondary }}
        >
          {demo.description}
        </p>

        {/* Metadata */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <span 
              className="text-xs flex items-center space-x-1"
              style={{ color: themeColors.textMuted }}
            >
              <span>⏱️</span>
              <span>{demo.estimatedTime}</span>
            </span>
            <span 
              className="text-xs flex items-center space-x-1"
              style={{ color: themeColors.textMuted }}
            >
              <span>📊</span>
              <span>{demo.difficulty}</span>
            </span>
          </div>
          <div 
            className="text-xs px-2 py-1 rounded"
            style={{
              backgroundColor: colors.surface.secondary,
              color: themeColors.textMuted,
            }}
          >
            {demo.views} views
          </div>
        </div>

        {/* Topics Covered */}
        <div className="flex flex-wrap gap-2">
          {demo.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: `${demo.category.color}15`,
                color: demo.category.color,
              }}
            >
              {topic}
            </span>
          ))}
          {demo.topics.length > 3 && (
            <span
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.textMuted,
              }}
            >
              +{demo.topics.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}