'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper
} from '@mui/material';
import {
  Build,
  TrendingUp,
  Science,
  School,
  Security,
  Star
} from '@mui/icons-material';

export default function PartnershipBenefits() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const benefits = [
    {
      title: 'Technology Integration',
      description: 'Seamless integration of complementary technologies to create comprehensive solutions.',
      icon: Build,
      color: colors.status.info
    },
    {
      title: 'Market Expansion',
      description: 'Access to new markets and customer segments through partner networks.',
      icon: TrendingUp,
      color: colors.status.success
    },
    {
      title: 'Research Collaboration',
      description: 'Joint research initiatives driving innovation in bio-industry technologies.',
      icon: Science,
      color: colors.accent.primary
    },
    {
      title: 'Knowledge Sharing',
      description: 'Exchange of expertise and best practices across different domains.',
      icon: School,
      color: colors.brand.primary
    },
    {
      title: 'Risk Mitigation',
      description: 'Shared resources and expertise reduce development and market risks.',
      icon: Security,
      color: colors.status.warning
    },
    {
      title: 'Customer Value',
      description: 'Enhanced customer value through integrated solutions and services.',
      icon: Star,
      color: colors.brand.secondary
    }
  ];

  return (
    <Box 
      component="section"
      sx={{
        py: 12,
        background: `linear-gradient(135deg, ${themeColors.background}F0, ${colors.background.primary}F0)`,
        backdropFilter: 'blur(20px)'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Partnership Benefits
          </Typography>
          <Typography 
            variant="h6"
            sx={{ 
              color: themeColors.textSecondary, 
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Discover the mutual value and innovation that drives our strategic partnerships
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    background: `${themeColors.surface}CC`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.border.primary}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 60px ${benefit.color}15`
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      mx: 'auto'
                    }}
                  >
                    <IconComponent sx={{ fontSize: 35, color: benefit.color }} />
                  </Box>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 2,
                      color: themeColors.text,
                      textAlign: 'center'
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      lineHeight: 1.6,
                      textAlign: 'center'
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}