'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function ApplicationProcess() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const processSteps = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Submit your application through our careers portal with your resume and cover letter.',
      icon: '📝',
      tips: ['Tailor your resume to the specific role', 'Include relevant portfolio work', 'Write a personalized cover letter']
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'Our hiring team reviews your application and qualifications against the role requirements.',
      icon: '👀',
      tips: ['We review all applications within 5 business days', 'Check your email and spam folder', 'Follow up is welcome after 1 week']
    },
    {
      step: 3,
      title: 'Phone/Video Screen',
      description: 'Brief conversation with our talent team to discuss your background and interest in the role.',
      icon: '📞',
      tips: ['30-45 minute conversation', 'Prepare questions about the role and company', 'Test your tech setup beforehand']
    },
    {
      step: 4,
      title: 'Technical Interview',
      description: 'Technical assessment or presentation relevant to the role you\'re applying for.',
      icon: '🔧',
      tips: ['Role-specific technical evaluation', 'Hands-on problem solving', 'Opportunity to show your expertise']
    },
    {
      step: 5,
      title: 'Team Interviews',
      description: 'Meet with team members and key stakeholders to assess cultural fit and collaboration.',
      icon: '👥',
      tips: ['Meet your potential teammates', 'Discuss working style and collaboration', 'Learn about day-to-day responsibilities']
    },
    {
      step: 6,
      title: 'Decision & Offer',
      description: 'Final decision and offer discussion including compensation, benefits, and start date.',
      icon: '🎉',
      tips: ['Reference checks may be conducted', 'Competitive offer package', 'Flexible start date negotiation']
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Our Hiring Process
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Transparent, fair, and designed to find the best mutual fit
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: themeColors.surface }}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: themeColors.brand }}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl text-center mb-4">{step.icon}</div>

                {/* Content */}
                <h3 
                  className="text-lg font-semibold mb-3 text-center"
                  style={{ color: themeColors.text }}
                >
                  {step.title}
                </h3>

                <p 
                  className="text-sm leading-relaxed mb-4 text-center"
                  style={{ color: themeColors.textSecondary }}
                >
                  {step.description}
                </p>

                {/* Tips */}
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: colors.surface.secondary }}
                >
                  <h4 
                    className="text-xs font-semibold mb-2"
                    style={{ color: themeColors.text }}
                  >
                    Tips for Success:
                  </h4>
                  <ul className="space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div 
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: themeColors.brand }}
                        ></div>
                        <span 
                          className="text-xs"
                          style={{ color: themeColors.textSecondary }}
                        >
                          {tip}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="mt-16 text-center">
            <div 
              className="inline-flex items-center space-x-4 p-4 rounded-lg"
              style={{ backgroundColor: themeColors.surface }}
            >
              <span 
                className="text-sm font-medium"
                style={{ color: themeColors.text }}
              >
                Typical Timeline:
              </span>
              <span 
                className="text-sm"
                style={{ color: themeColors.textSecondary }}
              >
                2-3 weeks from application to offer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}