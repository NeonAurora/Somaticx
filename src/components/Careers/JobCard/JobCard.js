'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function JobCard({ job, onClick }) {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getDepartmentColor = (department) => {
    const departmentColors = {
      'Engineering': colors.status.info,
      'Product': colors.brand.primary,
      'Research': colors.brand.secondary,
      'Operations': colors.status.warning,
      'Marketing': colors.accent.primary,
      'Sales': colors.status.success
    };
    return departmentColors[department] || colors.brand.primary;
  };

  const getTypeColor = (type) => {
    const typeColors = {
      'Full-time': colors.status.success,
      'Part-time': colors.status.warning,
      'Contract': colors.status.info,
      'Internship': colors.brand.secondary
    };
    return typeColors[type] || colors.status.info;
  };

  return (
    <div
      onClick={() => onClick(job)}
      className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      style={{ backgroundColor: themeColors.surface }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 
            className="text-xl font-semibold mb-2"
            style={{ color: themeColors.text }}
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${getDepartmentColor(job.department)}20`,
                color: getDepartmentColor(job.department),
              }}
            >
              {job.department}
            </span>
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${getTypeColor(job.type)}20`,
                color: getTypeColor(job.type),
              }}
            >
              {job.type}
            </span>
            {job.isRemote && (
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${colors.status.info}20`,
                  color: colors.status.info,
                }}
              >
                Remote OK
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <div 
            className="text-sm font-medium mb-1"
            style={{ color: themeColors.text }}
          >
            {job.location}
          </div>
          <div 
            className="text-xs"
            style={{ color: themeColors.textMuted }}
          >
            Posted {job.postedDaysAgo} days ago
          </div>
        </div>
      </div>

      {/* Description */}
      <p 
        className="text-sm leading-relaxed mb-4 line-clamp-3"
        style={{ color: themeColors.textSecondary }}
      >
        {job.shortDescription}
      </p>

      {/* Requirements Preview */}
      <div className="mb-4">
        <h4 
          className="text-sm font-semibold mb-2"
          style={{ color: themeColors.text }}
        >
          Key Requirements
        </h4>
        <div className="flex flex-wrap gap-2">
          {job.keyRequirements.slice(0, 4).map((req, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.textMuted,
              }}
            >
              {req}
            </span>
          ))}
          {job.keyRequirements.length > 4 && (
            <span
              className="px-2 py-1 rounded text-xs"
              style={{
                backgroundColor: colors.surface.secondary,
                color: themeColors.textMuted,
              }}
            >
              +{job.keyRequirements.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Salary Range */}
      {job.salaryRange && (
        <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: colors.surface.secondary }}>
          <div className="flex justify-between items-center">
            <span 
              className="text-sm font-medium"
              style={{ color: themeColors.textMuted }}
            >
              Salary Range
            </span>
            <span 
              className="text-lg font-bold"
              style={{ color: getDepartmentColor(job.department) }}
            >
              {job.salaryRange}
            </span>
          </div>
        </div>
      )}

      {/* Action Button */}
      <button
        className="w-full py-3 rounded-lg font-semibold transition-colors duration-300"
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
        onClick={(e) => {
          e.stopPropagation();
          onClick(job);
        }}
      >
        View Details & Apply
      </button>
    </div>
  );
}