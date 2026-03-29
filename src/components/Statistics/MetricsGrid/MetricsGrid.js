'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Paper,
  Chip,
  Stack
} from '@mui/material';
import {
  Group,
  Public,
  Sensors,
  Analytics,
  Speed,
  NotificationImportant,
  TrendingUp,
  TrendingDown
} from '@mui/icons-material';

export default function MetricsGrid({ metrics, title, subtitle }) {
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
      'Public': Public,
      'Sensors': Sensors,
      'Analytics': Analytics,
      'Speed': Speed,
      'NotificationImportant': NotificationImportant
    };
    return iconMap[iconName] || Analytics;
  };

  const formatValue = (value, unit, prefix = '') => {
    if (value >= 1000000) {
      return `${prefix}${(value / 1000000).toFixed(1)}M${unit}`;
    } else if (value >= 1000) {
      return `${prefix}${(value / 1000).toFixed(0)}K${unit}`;
    }
    return `${prefix}${value}${unit}`;
  };

  const getChangeColor = (change) => {
    if (change > 0) return colors.status.success;
    if (change < 0) return colors.status.error;
    return themeColors.textSecondary;
  };

  const getChangeIcon = (change) => {
    if (change > 0) return TrendingUp;
    if (change < 0) return TrendingDown;
    return null;
  };

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
            {title}
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
            {subtitle}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {metrics.map((metric, index) => {
            const IconComponent = getIcon(metric.icon);
            const ChangeIcon = getChangeIcon(metric.change);
            
            return (
              <Grid item xs={12} sm={6} lg={4} key={metric.id}>
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
                      boxShadow: `0 20px 60px ${metric.color}20`
                    }
                  }}
                >
                  {/* Header with Icon */}
                  <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}40)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <IconComponent sx={{ fontSize: 24, color: metric.color }} />
                    </Box>
                    
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          color: themeColors.text,
                          lineHeight: 1.2
                        }}
                      >
                        {metric.title}
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Value */}
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800,
                      mb: 2,
                      background: `linear-gradient(135deg, ${metric.color}, ${metric.color}CC)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {formatValue(metric.value, metric.unit, metric.prefix)}
                  </Typography>

                  {/* Change Indicator */}
                  {metric.change !== undefined && (
                    <Box sx={{ mb: 3 }}>
                      <Chip
                        icon={ChangeIcon ? <ChangeIcon sx={{ fontSize: '16px !important' }} /> : undefined}
                        label={`${metric.change > 0 ? '+' : ''}${metric.change}%`}
                        size="small"
                        sx={{
                          backgroundColor: `${getChangeColor(metric.change)}20`,
                          color: getChangeColor(metric.change),
                          fontWeight: 600,
                          '& .MuiChip-icon': {
                            color: 'inherit'
                          }
                        }}
                      />
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: themeColors.textSecondary,
                          ml: 1,
                          fontSize: '0.75rem'
                        }}
                      >
                        {metric.period}
                      </Typography>
                    </Box>
                  )}

                  {/* Description */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      lineHeight: 1.5
                    }}
                  >
                    {metric.description}
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