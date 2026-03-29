'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Paper,
  Stack,
  Chip,
  Grid
} from '@mui/material';
import { 
  Handshake, 
  Email, 
  Description,
  TrendingUp,
  Group,
  Public,
  BusinessCenter
} from '@mui/icons-material';

export default function PartnersHero() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const stats = [
    { number: '18+', label: 'Active Partners', icon: Group },
    { number: '6', label: 'Countries', icon: Public },
    { number: '25+', label: 'Joint Projects', icon: BusinessCenter }
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
          background: `radial-gradient(circle at 25% 30%, ${themeColors.brand}12, transparent 50%),
                       radial-gradient(circle at 75% 70%, ${colors.accent.primary}08, transparent 50%)`,
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
                animation: 'rotate 6s linear infinite'
              },
              '@keyframes rotate': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' }
              }
            }}
          >
            <Handshake sx={{ fontSize: 60, color: '#ffffff', zIndex: 1 }} />
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
            Our Partners
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
            Collaborating for Innovation
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
            Building strategic alliances with industry leaders, research institutions, and technology 
            partners to advance bio-industry solutions and deliver exceptional value to our customers.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            sx={{ justifyContent: 'center', mb: 8 }}
          >
            <Button
              href="#partnership-inquiry"
              variant="contained"
              size="large"
              startIcon={<Email />}
              sx={{
                px: 4,
                py: 2,
                borderRadius: 3,
                fontSize: '1.1rem',
                fontWeight: 700,
                background: `linear-gradient(135deg, ${primaryColors.default}, ${primaryColors.default}CC)`,
                color: colors.text.inverse,
                boxShadow: `0 12px 40px ${primaryColors.default}40`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${primaryColors.hover}, ${primaryColors.hover}CC)`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 16px 50px ${primaryColors.default}50`
                }
              }}
            >
              Become a Partner
            </Button>
            
            <Button
              href="#partner-directory"
              variant="outlined"
              size="large"
              startIcon={<Description />}
              sx={{
                px: 4,
                py: 2,
                borderRadius: 3,
                fontSize: '1.1rem',
                fontWeight: 700,
                color: colors.brand.primary,
                borderColor: colors.brand.primary,
                borderWidth: 2,
                background: 'transparent',
                '&:hover': {
                  backgroundColor: colors.brand.primary,
                  color: colors.text.inverse,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 12px 40px ${colors.brand.primary}30`
                }
              }}
            >
              Partner Directory
            </Button>
          </Stack>
        </Box>

        {/* Partnership Stats */}
        <Grid container spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
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
                    {stat.number}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      fontWeight: 600 
                    }}
                  >
                    {stat.label}
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