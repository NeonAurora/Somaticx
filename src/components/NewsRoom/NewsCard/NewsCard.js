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
  Stack
} from '@mui/material';
import {
  Article,
  Launch,
  AttachMoney,
  Group,
  EmojiEvents,
  Campaign,
  AccessTime,
  Person,
  Launch as LaunchIcon
} from '@mui/icons-material';

export default function NewsCard({ article, onClick }) {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Product Updates': colors.status.info,
      'Funding': colors.status.success,
      'Partnerships': colors.status.warning,
      'Awards': colors.brand.primary,
      'Press Coverage': colors.brand.secondary,
      'Research': colors.accent.primary,
      'Events': colors.status.info
    };
    return categoryColors[category] || colors.brand.primary;
  };

  const getIcon = (iconName) => {
    const iconMap = {
      'Article': Article,
      'Launch': Launch,
      'AttachMoney': AttachMoney,
      'Group': Group,
      'EmojiEvents': EmojiEvents,
      'Campaign': Campaign
    };
    return iconMap[iconName] || Article;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const IconComponent = getIcon(article.categoryIcon);

  return (
    <Card
      onClick={() => onClick(article)}
      sx={{
        borderRadius: 4,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        background: `${themeColors.surface}CC`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.border.primary}20`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: `0 20px 40px ${getCategoryColor(article.category)}20`,
          '& .card-media': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      {/* Article Hero */}
      <CardMedia
        className="card-media"
        sx={{
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, ${getCategoryColor(article.category)}20, ${getCategoryColor(article.category)}40)`,
          transition: 'transform 0.3s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${getCategoryColor(article.category)}, ${getCategoryColor(article.category)}CC)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 8px 32px ${getCategoryColor(article.category)}40`
          }}
        >
          <IconComponent sx={{ fontSize: 40, color: '#ffffff' }} />
        </Box>
      </CardMedia>

      <CardContent sx={{ p: 3 }}>
        {/* Category & Date */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Chip 
            label={article.category}
            size="small"
            sx={{
              backgroundColor: `${getCategoryColor(article.category)}20`,
              color: getCategoryColor(article.category),
              fontWeight: 600,
              fontSize: '0.75rem'
            }}
          />
          <Box sx={{ textAlign: 'right' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                color: themeColors.textMuted,
                display: 'block',
                fontSize: '0.7rem'
              }}
            >
              {formatDate(article.date)}
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                color: themeColors.textMuted,
                fontSize: '0.7rem'
              }}
            >
              {getTimeAgo(article.date)}
            </Typography>
          </Box>
        </Box>

        {/* Title */}
        <Typography 
          variant="h6" 
          component="h3"
          sx={{
            color: themeColors.text,
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {article.title}
        </Typography>

        {/* Excerpt */}
        <Typography 
          variant="body2" 
          sx={{
            color: themeColors.textSecondary,
            mb: 2,
            lineHeight: 1.5,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {article.excerpt}
        </Typography>

        {/* Tags */}
        {article.tags && (
          <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
            {article.tags.slice(0, 3).map((tag, index) => (
              <Chip
                key={index}
                label={`#${tag}`}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  height: 24,
                  backgroundColor: `${colors.surface.secondary}80`,
                  color: themeColors.textMuted,
                  border: 'none'
                }}
              />
            ))}
            {article.tags.length > 3 && (
              <Chip
                label={`+${article.tags.length - 3}`}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.7rem',
                  height: 24,
                  backgroundColor: `${colors.surface.secondary}80`,
                  color: themeColors.textMuted,
                  border: 'none'
                }}
              />
            )}
          </Stack>
        )}

        {/* Footer */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 2,
            borderTop: `1px solid ${colors.border.primary}30`
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {article.author && (
              <>
                <Avatar 
                  sx={{ 
                    width: 24, 
                    height: 24,
                    fontSize: '0.75rem',
                    backgroundColor: getCategoryColor(article.category)
                  }}
                >
                  {article.author.charAt(0)}
                </Avatar>
                <Typography 
                  variant="caption"
                  sx={{ color: themeColors.textMuted, fontSize: '0.75rem' }}
                >
                  {article.author}
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {article.readTime && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime sx={{ fontSize: 14, color: themeColors.textMuted }} />
                <Typography 
                  variant="caption"
                  sx={{ color: themeColors.textMuted, fontSize: '0.7rem' }}
                >
                  {article.readTime}
                </Typography>
              </Box>
            )}
            {article.external && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LaunchIcon sx={{ fontSize: 14, color: getCategoryColor(article.category) }} />
                <Typography 
                  variant="caption"
                  sx={{ color: getCategoryColor(article.category), fontSize: '0.7rem' }}
                >
                  External
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}