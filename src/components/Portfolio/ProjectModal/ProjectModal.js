'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ProjectModal({ project, isOpen, onClose }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  if (!isOpen || !project) return null;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return colors.status.success;
      case 'in progress': return colors.status.warning;
      case 'planning': return colors.status.info;
      default: return colors.status.info;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: colors.surface.overlay }}
      onClick={onClose}
    >
      <div
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ backgroundColor: themeColors.background }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
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

          {/* Project Hero */}
          <div 
            className="h-64 rounded-xl mb-6 flex items-center justify-center text-8xl"
            style={{
              background: `linear-gradient(135deg, ${project.category.color}20, ${project.category.color}40)`,
            }}
          >
            {project.image || project.category.icon}
          </div>

          {/* Title & Status */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h2 
                className="text-3xl font-bold mb-2"
                style={{ color: themeColors.text }}
              >
                {project.title}
              </h2>
              <div className="flex items-center space-x-3">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${project.category.color}20`,
                    color: project.category.color,
                  }}
                >
                  {project.category.name}
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: `${getStatusColor(project.status)}20`,
                    color: getStatusColor(project.status),
                  }}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Description */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Project Overview
            </h3>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: themeColors.textSecondary }}
            >
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Problem, Solution, Outcome */}
          {project.details && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(project.details).map(([key, value]) => (
                <div 
                  key={key}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <h4 
                    className="text-lg font-semibold mb-3 capitalize"
                    style={{ color: themeColors.text }}
                  >
                    {key}
                  </h4>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: themeColors.textSecondary }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg text-sm font-medium"
                  style={{
                    backgroundColor: colors.surface.secondary,
                    color: themeColors.text,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Statistics */}
          {project.impact && (
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Impact & Results
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.impact).map(([key, value]) => (
                  <div 
                    key={key}
                    className="text-center p-4 rounded-lg"
                    style={{ backgroundColor: themeColors.surface }}
                  >
                    <div 
                      className="text-2xl font-bold mb-2"
                      style={{ color: themeColors.brand }}
                    >
                      {value}
                    </div>
                    <div 
                      className="text-sm capitalize"
                      style={{ color: themeColors.textMuted }}
                    >
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards/Certificates */}
          {project.awards && project.awards.length > 0 && (
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Recognition & Awards
              </h3>
              <div className="flex flex-wrap gap-4">
                {project.awards.map((award, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg"
                    style={{ backgroundColor: `${colors.status.success}20` }}
                  >
                    <span className="text-lg">🏆</span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: colors.status.success }}
                    >
                      {award}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}