'use client';

import { memo } from 'react';
import BaseHero from '@/components/ui/BaseHero';
import { 
  Nature,
  RocketLaunch,
  Science,
  TrendingUp,
  Verified,
  Engineering
} from '@mui/icons-material';

const AboutHeroOptimized = memo(() => {
  const statistics = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
      icon: TrendingUp,
      color: '#10B981'
    },
    {
      value: 15,
      suffix: '+',
      label: 'Years of Experience',
      icon: Verified,
      color: '#3B82F6'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Team Members',
      icon: Engineering,
      color: '#F59E0B'
    },
    {
      value: 25,
      suffix: '+',
      label: 'Countries Served',
      icon: Nature,
      color: '#8B5CF6'
    }
  ];

  const handleExploreClick = () => {
    // Navigate to projects or scroll to next section
    document.getElementById('company-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchVideoClick = () => {
    // Open video modal or navigate to video page
    console.log('Opening company video...');
  };

  return (
    <BaseHero
      title="Pioneering the Future of Bio-Technology"
      subtitle="Innovation Through Science"
      description="At Somaticx, we bridge the gap between cutting-edge technology and biological discovery. Our multidisciplinary approach combines expertise in biotechnology, AI, and data science to accelerate scientific breakthroughs that improve lives worldwide."
      statistics={statistics}
      primaryButton={{
        text: "Explore Our Work",
        onClick: handleExploreClick
      }}
      secondaryButton={{
        text: "Watch Our Story",
        onClick: handleWatchVideoClick
      }}
      backgroundGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    />
  );
});

AboutHeroOptimized.displayName = 'AboutHeroOptimized';

export default AboutHeroOptimized;