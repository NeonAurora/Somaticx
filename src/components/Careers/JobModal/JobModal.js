'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function JobModal({ job, isOpen, onClose }) {
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

  if (!isOpen || !job) return null;

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
          >
            ✕
          </button>

          {/* Job Header */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3 mb-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${getDepartmentColor(job.department)}20`,
                  color: getDepartmentColor(job.department),
                }}
              >
                {job.department}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${colors.status.success}20`,
                  color: colors.status.success,
                }}
              >
                {job.type}
              </span>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: colors.surface.secondary,
                  color: themeColors.textMuted,
                }}
              >
                {job.location}
              </span>
            </div>

            <h1 
              className="text-3xl font-bold mb-4"
              style={{ color: themeColors.text }}
            >
              {job.title}
            </h1>

            <p 
              className="text-lg leading-relaxed"
              style={{ color: themeColors.textSecondary }}
            >
              {job.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Job Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* What You'll Do */}
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                What You'll Do
              </h3>
              <div className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: getDepartmentColor(job.department) }}
                    ></div>
                    <span 
                      className="text-sm leading-relaxed"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {responsibility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We're Looking For */}
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                What We're Looking For
              </h3>
              <div className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: getDepartmentColor(job.department) }}
                    ></div>
                    <span 
                      className="text-sm leading-relaxed"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {requirement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nice to Have */}
          {job.niceToHave && job.niceToHave.length > 0 && (
            <div className="mb-8">
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: themeColors.text }}
              >
                Nice to Have
              </h3>
              <div className="flex flex-wrap gap-3">
                {job.niceToHave.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-lg text-sm"
                    style={{
                      backgroundColor: `${getDepartmentColor(job.department)}15`,
                      color: getDepartmentColor(job.department),
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mb-8">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ color: themeColors.text }}
            >
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{benefit.icon}</span>
                    <div>
                      <h4 
                        className="font-semibold"
                        style={{ color: themeColors.text }}
                      >
                        {benefit.title}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary and Additional Info */}
          <div className="mb-8 p-6 rounded-xl" style={{ backgroundColor: themeColors.surface }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {job.salaryRange && (
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold mb-2"
                    style={{ color: getDepartmentColor(job.department) }}
                  >
                    {job.salaryRange}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: themeColors.textMuted }}
                  >
                    Annual Salary
                  </div>
                </div>
              )}
              <div className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: themeColors.text }}
                >
                  {job.experience}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: themeColors.textMuted }}
                >
                  Experience Level
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-2xl font-bold mb-2"
                  style={{ color: themeColors.text }}
                >
                  {job.isRemote ? 'Remote OK' : 'On-site'}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: themeColors.textMuted }}
                >
                  Work Style
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
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
              Apply for This Position
            </button>
            <button
              className="flex-1 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                color: getDepartmentColor(job.department),
                border: `2px solid ${getDepartmentColor(job.department)}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = getDepartmentColor(job.department);
                e.target.style.color = colors.text.inverse;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = getDepartmentColor(job.department);
              }}
            >
              Share This Job
            </button>
            <button
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
              Ask Questions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}