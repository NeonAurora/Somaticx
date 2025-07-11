'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function Leadership() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const leaders = [
    {
      name: 'Dr. Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'PhD in Biotechnology with 15+ years in agricultural innovation. Former lead researcher at major agtech companies.',
      image: '👩‍🔬',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Computer Science PhD specializing in IoT and machine learning for biological systems. Published researcher and tech innovator.',
      image: '👨‍💻',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Head of Research',
      bio: 'Veterinary Medicine background with expertise in animal behavior and welfare. Leading our livestock technology initiatives.',
      image: '👩‍⚕️',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'James Park',
      role: 'Head of Engineering',
      bio: 'Software engineering leader with experience in scalable systems and hardware integration for agricultural applications.',
      image: '👨‍🔧',
      social: {
        linkedin: '#',
        github: '#'
      }
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
            Leadership Team
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Experienced leaders driving innovation in bio-industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-6xl mb-4">{leader.image}</div>
              
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: themeColors.text }}
              >
                {leader.name}
              </h3>
              
              <p 
                className="text-sm font-medium mb-4"
                style={{ color: themeColors.brand }}
              >
                {leader.role}
              </p>
              
              <p 
                className="text-sm leading-relaxed mb-6"
                style={{ color: themeColors.textSecondary }}
              >
                {leader.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                {Object.entries(leader.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200"
                    style={{ backgroundColor: colors.surface.secondary }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.brand.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.surface.secondary;
                    }}
                  >
                    <span className="text-sm">
                      {platform === 'linkedin' ? '💼' : platform === 'twitter' ? '🐦' : '👨‍💻'}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}