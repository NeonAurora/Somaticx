'use client';

import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Stack,
  Box
} from '@mui/material';
import { 
  Science,
  TrendingUp,
  Groups,
  Build,
  Biotech,
  Public,
  Nature,
  School
} from '@mui/icons-material';

const FeatureCard = memo(({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    primaryLight: 'brand.primaryLight'
  });

  const getFeatureIcon = (title) => {
    const iconMap = {
      "Innovation in Bio-IT": Science,
      "Proven Impact": TrendingUp,
      "Cross-disciplinary Expertise": Groups,
      "End-to-End Support": Build,
      "Advanced Research": Biotech,
      "Global Reach": Public,
      "Sustainable Solutions": Nature,
      "Expert Team": School
    };
    return iconMap[title] || Science;
  };

  const getFeatureColor = (title) => {
    const colorMap = {
      "Innovation in Bio-IT": "#8B5CF6",
      "Proven Impact": "#10B981",
      "Cross-disciplinary Expertise": "#F59E0B", 
      "End-to-End Support": "#3B82F6",
      "Advanced Research": "#EF4444",
      "Global Reach": "#06B6D4",
      "Sustainable Solutions": "#84CC16",
      "Expert Team": "#F97316"
    };
    return colorMap[title] || themeColors.primary;
  };

  const FeatureIcon = getFeatureIcon(feature.title);
  const featureColor = getFeatureColor(feature.title);

  // Memoized progress animation
  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= (feature.score || 95)) {
            clearInterval(timer);
            return feature.score || 95;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isHovered, feature.score]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          transition: 'all 0.3s ease',
          height: '100%',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${featureColor}`,
          }
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: `${featureColor}20`,
                  color: featureColor,
                  border: `2px solid ${featureColor}40`
                }}
              >
                <FeatureIcon sx={{ fontSize: 28 }} />
              </Avatar>
              
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: themeColors.text,
                    lineHeight: 1.3
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: themeColors.textSecondary,
                    mt: 1
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Stack>

            {/* Progress indicator */}
            <Box>
              <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="caption" color={themeColors.textMuted}>
                  Excellence Score
                </Typography>
                <Typography variant="caption" color={featureColor} fontWeight={600}>
                  {progress}%
                </Typography>
              </Stack>
              
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: `${featureColor}20`,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: featureColor,
                    borderRadius: 3
                  }
                }}
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;