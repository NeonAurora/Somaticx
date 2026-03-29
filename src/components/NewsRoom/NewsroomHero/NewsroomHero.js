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
  Chip
} from '@mui/material';
import { 
  Newspaper, 
  Email, 
  Description,
  TrendingUp
} from '@mui/icons-material';

export default function NewsroomHero() {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  const latestNews = {
    headline: "Somaticx Raises $5M Series A to Accelerate Bio-Industry Innovation",
    date: "December 15, 2024",
    category: "Funding",
    excerpt: "Leading the next generation of agricultural and livestock technology solutions with expanded R&D capabilities."
  };

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
          background: `radial-gradient(circle at 30% 40%, ${themeColors.brand}10, transparent 50%),
                       radial-gradient(circle at 80% 80%, ${colors.accent.primary}08, transparent 50%)`,
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
            <Newspaper sx={{ fontSize: 60, color: '#ffffff', zIndex: 1 }} />
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
            Newsroom
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
            Latest Updates & Company News
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
            Stay informed about our latest developments, product launches, partnerships, 
            and industry insights. Your source for all Somaticx news and announcements.
          </Typography>

          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={3} 
            sx={{ justifyContent: 'center', mb: 8 }}
          >
            <Button
              href="#subscribe"
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
              Subscribe to Updates
            </Button>
            
            <Button
              href="#press-kit"
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
              Press Kit
            </Button>
          </Stack>
        </Box>

        {/* Featured News */}
        <Paper
          elevation={0}
          sx={{
            maxWidth: '900px',
            mx: 'auto',
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: `${colors.surface.primary}CC`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.border.primary}20`,
            boxShadow: `0 20px 60px ${themeColors.brand}10`
          }}
        >
          <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Chip 
              icon={<TrendingUp sx={{ fontSize: '1rem !important' }} />}
              label="Latest News"
              sx={{
                backgroundColor: `${colors.status.success}20`,
                color: colors.status.success,
                fontWeight: 600,
                '& .MuiChip-icon': {
                  color: 'inherit'
                }
              }}
            />
            <Typography 
              variant="body2"
              sx={{ color: themeColors.textSecondary }}
            >
              {latestNews.date}
            </Typography>
          </Stack>
          
          <Typography 
            variant="h4" 
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: themeColors.text,
              lineHeight: 1.3
            }}
          >
            {latestNews.headline}
          </Typography>
          
          <Typography 
            variant="h6"
            sx={{
              color: themeColors.textSecondary,
              mb: 4,
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {latestNews.excerpt}
          </Typography>
          
          <Button
            href="#latest-article"
            variant="text"
            endIcon={<TrendingUp sx={{ transform: 'rotate(45deg)' }} />}
            sx={{
              color: themeColors.brand,
              fontWeight: 700,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                color: colors.brand.primaryDark,
                backgroundColor: `${themeColors.brand}10`
              }
            }}
          >
            Read Full Story
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}