'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function CompanyCulture() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.secondary',
    brand: 'brand.primary',
  });

  const cultureHighlights = [
    {
      title: 'Innovation-First Mindset',
      description: 'We encourage creative thinking and bold ideas. Every team member is empowered to contribute to our product vision.',
      icon: '💡',
      examples: ['Hack days every quarter', '20% time for passion projects', 'Cross-team collaboration encouraged']
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe great work happens when people have time to recharge and pursue their interests outside of work.',
      icon: '⚖️',
      examples: ['Flexible working hours', 'Unlimited PTO policy', 'Remote-first culture']
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning is part of our DNA. We invest in our team\'s professional and personal development.',
      icon: '📚',
      examples: ['$2K annual learning budget', 'Conference attendance supported', 'Internal tech talks and workshops']
    },
    {
      title: 'Impact-Driven Work',
      description: 'Every project we work on has real-world impact on farmers, animals, and sustainable agriculture.',
      icon: '🌱',
      examples: ['Direct customer feedback loops', 'Field visits to farms', 'Measurable environmental impact']
    }
  ];

  const teamStories = [
    {
      name: 'Alex Chen',
      role: 'Senior Software Engineer',
      story: 'I joined Somaticx because I wanted my work to have real environmental impact. Seeing our livestock monitoring system help farmers improve animal welfare while reducing costs has been incredibly rewarding.',
      avatar: '👨‍💻'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Product Manager',
      story: 'The collaborative culture here is amazing. Ideas come from everywhere - engineers, sales, even customer support. We all work together to build solutions that truly matter.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      story: 'What I love most is the learning opportunities. I\'ve grown so much here, both technically and personally. The team genuinely cares about each other\'s success.',
      avatar: '👨‍🔬'
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
      id="culture"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Our Culture
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            What makes Somaticx a great place to work
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {cultureHighlights.map((highlight, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-4xl text-center mb-6">{highlight.icon}</div>
              
              <h3 
                className="text-xl font-semibold mb-4 text-center"
                style={{ color: themeColors.text }}
              >
                {highlight.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed mb-6 text-center"
                style={{ color: themeColors.textSecondary }}
              >
                {highlight.description}
              </p>
              
              <div className="space-y-2">
                {highlight.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: themeColors.brand }}
                    ></div>
                    <span 
                      className="text-sm"
                      style={{ color: themeColors.textSecondary }}
                    >
                      {example}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stories */}
        <div className="mb-16">
          <h3 
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: themeColors.text }}
          >
            Hear from Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamStories.map((story, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center"
                style={{ backgroundColor: themeColors.surface }}
              >
                <div className="text-4xl mb-4">{story.avatar}</div>
                
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: themeColors.text }}
                >
                  {story.name}
                </h4>
                
                <p 
                  className="text-sm mb-4"
                  style={{ color: themeColors.brand }}
                >
                  {story.role}
                </p>
                
                <p 
                  className="text-sm leading-relaxed italic"
                  style={{ color: themeColors.textSecondary }}
                >
                  "{story.story}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Perks & Benefits */}
        <div 
          className="p-8 rounded-2xl text-center"
          style={{ backgroundColor: themeColors.surface }}
        >
          <h3 
            className="text-2xl font-bold mb-8"
            style={{ color: themeColors.text }}
          >
            Perks & Benefits
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏥', label: 'Health Insurance' },
              { icon: '🦷', label: 'Dental & Vision' },
              { icon: '💰', label: 'Equity Package' },
              { icon: '🏖️', label: 'Unlimited PTO' },
              { icon: '💻', label: 'Equipment Budget' },
              { icon: '🏠', label: 'Remote Friendly' },
              { icon: '🎓', label: 'Learning Budget' },
              { icon: '☕', label: 'Coffee & Snacks' }
            ].map((perk, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{perk.icon}</div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: themeColors.text }}
                >
                  {perk.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}