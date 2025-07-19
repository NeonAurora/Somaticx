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
  BarChart, 
  TrendingUp,
  Analytics,
  Assessment
} from '@mui/icons-material';

export default function StatisticsHero() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const highlights = [
    { number: '2,500+', label: 'Active Customers', icon: TrendingUp },
    { number: '45K+', label: 'IoT Sensors', icon: Analytics },
    { number: '99.97%', label: 'Uptime', icon: Assessment }
  ];

  return (
    <Box 
      component="section"
      sx={{
        py: { xs: 12, lg: 20 },
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 30%, ${themeColors.brand}08, transparent 50%),
                       radial-gradient(circle at 80% 70%, ${colors.accent.primary}06, transparent 50%)`,
          pointerEvents: 'none'
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', mb: 12 }}>
          {/* Hero Icon */}
          <Box
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 4,
              boxShadow: `0 20px 60px ${themeColors.brand}30`,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                borderRadius: '50%',
                background: `conic-gradient(from 0deg, ${themeColors.brand}40, transparent, ${themeColors.brand}40)`,
                animation: 'rotate 4s linear infinite'
              },
              '@keyframes rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          >
            <BarChart sx={{ fontSize: 60, color: '#ffffff', zIndex: 1 }} />
          </Box>

          <Typography 
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
              fontWeight: 900,
              mb: 3,
              background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em'
            }}
          >
            Statistics & Analytics
          </Typography>
          
          <Typography 
            variant="h3"
            sx={{
              color: themeColors.brand,
              fontWeight: 600,
              mb: 4,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Data-Driven Impact
          </Typography>
          
          <Typography 
            variant="h6"
            sx={{
              color: themeColors.textSecondary,
              mb: 8,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              fontWeight: 400
            }}
          >
            Discover the measurable impact of our bio-industry solutions through comprehensive 
            analytics, performance metrics, and growth indicators that demonstrate our commitment to excellence.
          </Typography>
        </Box>

        {/* Key Metrics Highlights */}
        <Grid container spacing={4} sx={{ maxWidth: '900px', mx: 'auto' }}>
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: 'center',
                    background: `${colors.surface.primary}CC`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.border.primary}20`,
                    boxShadow: `0 8px 32px ${themeColors.brand}08`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 60px ${themeColors.brand}15`
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2
                    }}
                  >
                    <IconComponent sx={{ fontSize: 30, color: themeColors.brand }} />
                  </Box>
                  
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800, 
                      mb: 1,
                      background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {highlight.number}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      fontWeight: 600 
                    }}
                  >
                    {highlight.label}
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