'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Chip, 
  Box, 
  Avatar,
  Stack,
  IconButton
} from '@mui/material';
import {
  Computer,
  Science,
  LocalShipping,
  School,
  AccountBalance,
  Group,
  LocationOn,
  Schedule,
  Star,
  Launch as LaunchIcon
} from '@mui/icons-material';

export default function PartnerCard({ partner, onClick }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getIcon = (iconName) => {
    const iconMap = {
      'Computer': Computer,
      'Science': Science,
      'LocalShipping': LocalShipping,
      'School': School,
      'AccountBalance': AccountBalance,
      'Group': Group
    };
    return iconMap[iconName] || Group;
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Technology': colors.status.info,
      'Research': colors.status.success,
      'Distribution': colors.status.warning,
      'Academic': colors.brand.primary,
      'Government': colors.brand.secondary,
    };
    return categoryColors[category] || colors.brand.primary;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'Strategic Partner': colors.status.success,
      'Technology Partner': colors.status.info,
      'Research Partner': colors.accent.primary,
      'Distribution Partner': colors.status.warning,
      'Academic Partner': colors.brand.primary,
      'Government Partner': colors.brand.secondary
    };
    return statusColors[status] || colors.status.info;
  };

  const IconComponent = getIcon(partner.categoryIcon);

  return (
    <Card
      onClick={() => onClick(partner)}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: `${themeColors.surface}CC`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border.primary}20`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 20px 40px ${getCategoryColor(partner.category)}20`,
          '& .partner-logo': {
            transform: 'scale(1.05)'
          },
          '& .launch-icon': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        }
      }}
    >
      {/* Partner Logo/Header */}
      <CardMedia
        className="partner-logo"
        sx={{
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${getCategoryColor(partner.category)}15, ${getCategoryColor(partner.category)}25)`,
          transition: 'transform 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${getCategoryColor(partner.category)}, ${getCategoryColor(partner.category)}CC)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${getCategoryColor(partner.category)}40`,
            position: 'relative'
          }}
        >
          <IconComponent sx={{ fontSize: 50, color: '#ffffff' }} />
        </Box>

        {/* Launch Icon */}
        <IconButton
          className="launch-icon"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: `${colors.surface.primary}CC`,
            backdropFilter: 'blur(10px)',
            opacity: 0,
            transform: 'translateX(10px)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: getCategoryColor(partner.category),
              '& .MuiSvgIcon-root': {
                color: '#ffffff'
              }
            }
          }}
        >
          <LaunchIcon sx={{ fontSize: 20, color: themeColors.text }} />
        </IconButton>
      </CardMedia>

      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Category & Status */}
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Chip 
            label={partner.category}
            size="small"
            sx={{
              backgroundColor: `${getCategoryColor(partner.category)}20`,
              color: getCategoryColor(partner.category),
              fontWeight: 600,
              fontSize: '0.75rem'
            }}
          />
          <Chip 
            label={partner.status}
            size="small"
            variant="outlined"
            sx={{
              borderColor: getStatusColor(partner.status),
              color: getStatusColor(partner.status),
              fontSize: '0.7rem'
            }}
          />
        </Stack>

        {/* Partner Name */}
        <Typography 
          variant="h6" 
          component="h3"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            mb: 1,
            lineHeight: 1.3
          }}
        >
          {partner.name}
        </Typography>

        {/* Short Name */}
        {partner.shortName && partner.shortName !== partner.name && (
          <Typography 
            variant="body2" 
            sx={{
              color: themeColors.brand,
              fontWeight: 600,
              mb: 2
            }}
          >
            ({partner.shortName})
          </Typography>
        )}

        {/* Description */}
        <Typography 
          variant="body2" 
          sx={{
            color: themeColors.textSecondary,
            mb: 3,
            lineHeight: 1.5,
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {partner.description}
        </Typography>

        {/* Location & Since */}
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn sx={{ fontSize: 16, color: themeColors.textMuted }} />
            <Typography 
              variant="caption"
              sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}
            >
              {partner.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Schedule sx={{ fontSize: 16, color: themeColors.textMuted }} />
            <Typography 
              variant="caption"
              sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}
            >
              Partner since {partner.since}
            </Typography>
          </Box>
        </Stack>

        {/* Metrics */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 2,
            borderTop: `1px solid ${colors.border.primary}30`
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography 
              variant="caption"
              sx={{ color: themeColors.textMuted, fontSize: '0.7rem' }}
            >
              {partner.metrics?.joinProjects || 0} Projects
            </Typography>
          </Box>
          
          {partner.metrics?.satisfaction && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Star sx={{ fontSize: 14, color: colors.status.warning }} />
              <Typography 
                variant="caption"
                sx={{ color: themeColors.textMuted, fontSize: '0.7rem' }}
              >
                {partner.metrics.satisfaction}
              </Typography>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}