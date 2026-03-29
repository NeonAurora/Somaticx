'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { Box, Chip, Container, Typography, Stack } from '@mui/material';
import {
  Group,
  Computer,
  Science,
  LocalShipping,
  School,
  AccountBalance
} from '@mui/icons-material';

export default function PartnerFilter({ categories, activeCategory, onCategoryChange }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getIcon = (iconName) => {
    const iconMap = {
      'Group': Group,
      'Computer': Computer,
      'Science': Science,
      'LocalShipping': LocalShipping,
      'School': School,
      'AccountBalance': AccountBalance
    };
    const IconComponent = iconMap[iconName] || Group;
    return IconComponent;
  };

  return (
    <Box 
      component="section"
      sx={{
        py: 8,
        background: `linear-gradient(135deg, ${themeColors.background}F0, ${colors.background.secondary}F0)`,
        backdropFilter: 'blur(20px)'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Partner Categories
          </Typography>
          <Typography 
            variant="h6"
            sx={{ color: themeColors.textSecondary, fontWeight: 400 }}
          >
            Explore our diverse partnership ecosystem
          </Typography>
        </Box>

        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: 2
          }}
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const IconComponent = getIcon(category.icon);
            
            return (
              <Chip
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                icon={<IconComponent sx={{ fontSize: '1.2rem !important' }} />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography sx={{ fontWeight: 600 }}>
                      {category.name}
                    </Typography>
                    <Box
                      sx={{
                        px: 1,
                        py: 0.25,
                        borderRadius: '12px',
                        backgroundColor: isActive 
                          ? `${colors.text.inverse}30` 
                          : `${themeColors.brand}20`,
                        color: isActive ? colors.text.inverse : themeColors.brand,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        minWidth: '20px',
                        textAlign: 'center'
                      }}
                    >
                      {category.count}
                    </Box>
                  </Box>
                }
                variant={isActive ? 'filled' : 'outlined'}
                clickable
                sx={{
                  px: 2,
                  py: 1.5,
                  height: 'auto',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: isActive 
                    ? themeColors.brand 
                    : `${themeColors.surface}CC`,
                  color: isActive ? colors.text.inverse : themeColors.text,
                  border: `2px solid ${isActive ? themeColors.brand : 'transparent'}`,
                  backdropFilter: 'blur(10px)',
                  boxShadow: isActive 
                    ? `0 8px 32px ${themeColors.brand}40` 
                    : '0 4px 16px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    backgroundColor: isActive 
                      ? themeColors.brand 
                      : colors.surface.secondary,
                    borderColor: isActive ? themeColors.brand : colors.border.secondary,
                    transform: 'translateY(-2px)',
                    boxShadow: isActive 
                      ? `0 12px 40px ${themeColors.brand}50` 
                      : '0 8px 24px rgba(0, 0, 0, 0.15)'
                  },
                  '& .MuiChip-icon': {
                    color: 'inherit'
                  }
                }}
              />
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}