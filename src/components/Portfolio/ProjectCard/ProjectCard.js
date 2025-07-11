'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ProjectCard({ project, onClick }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

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
      onClick={() => onClick(project)}
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      style={{ backgroundColor: themeColors.surface }}
    >
      {/* Project Image */}
      <div 
        className="h-48 flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, ${project.category.color}20, ${project.category.color}40)`,
        }}
      >
        {project.image || project.category.icon}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Status */}
        <div className="flex justify-between items-center mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${project.category.color}20`,
              color: project.category.color,
            }}
          >
            {project.category.name}
          </span>
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              backgroundColor: `${getStatusColor(project.status)}20`,
              color: getStatusColor(project.status),
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-semibold mb-3 line-clamp-2"
          style={{ color: themeColors.text }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p 
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: themeColors.textSecondary }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.textMuted,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.textMuted,
              }}
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Impact Stats */}
        {project.impact && (
          <div className="grid grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: colors.border.primary }}>
            {Object.entries(project.impact).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <div 
                  className="text-lg font-bold"
                  style={{ color: themeColors.brand }}
                >
                  {value}
                </div>
                <div 
                  className="text-xs capitalize"
                  style={{ color: themeColors.textMuted }}
                >
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}