'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { 
  Modal, 
  Box, 
  Typography, 
  IconButton, 
  Chip, 
  Button,
  Paper,
  Stack,
  Divider
} from '@mui/material';
import {
  Close,
  Share,
  ArrowBack,
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

export default function NewsModal({ article, isOpen, onClose }) {
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  if (!isOpen || !article) return null;

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const IconComponent = getIcon(article.categoryIcon);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        sx={{
          maxWidth: '90vw',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          borderRadius: 4,
          background: `${themeColors.background}F5`,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.border.primary}20`,
          boxShadow: `0 24px 80px ${themeColors.brand}20`,
          outline: 'none'
        }}
      >
        {/* Header */}
        <Box sx={{ position: 'relative', p: 4 }}>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: `${colors.surface.secondary}CC`,
              backdropFilter: 'blur(10px)',
              '&:hover': {
                backgroundColor: colors.surface.tertiary
              }
            }}
          >
            <Close sx={{ color: themeColors.text }} />
          </IconButton>

          {/* Article Hero */}
          <Box
            sx={{
              height: 300,
              borderRadius: 3,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${getCategoryColor(article.category)}20, ${getCategoryColor(article.category)}40)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${getCategoryColor(article.category)}, ${getCategoryColor(article.category)}CC)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 12px 40px ${getCategoryColor(article.category)}40`
              }}
            >
              <IconComponent sx={{ fontSize: 60, color: '#ffffff' }} />
            </Box>
          </Box>

          {/* Article Meta */}
          <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
            <Chip 
              label={article.category}
              sx={{
                backgroundColor: `${getCategoryColor(article.category)}20`,
                color: getCategoryColor(article.category),
                fontWeight: 600
              }}
            />
            <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
              {formatDate(article.date)}
            </Typography>
            {article.readTime && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime sx={{ fontSize: 16, color: themeColors.textMuted }} />
                <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                  {article.readTime} read
                </Typography>
              </Box>
            )}
            {article.author && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Person sx={{ fontSize: 16, color: themeColors.textMuted }} />
                <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                  By {article.author}
                </Typography>
              </Box>
            )}
          </Stack>

          {/* Title */}
          <Typography 
            variant="h3" 
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              color: themeColors.text,
              lineHeight: 1.2
            }}
          >
            {article.title}
          </Typography>

          {/* Excerpt */}
          <Typography 
            variant="h6"
            sx={{
              color: themeColors.textSecondary,
              mb: 4,
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {article.excerpt}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: `${colors.border.primary}30` }} />

        {/* Content */}
        <Box sx={{ p: 4 }}>
          {/* Article Content */}
          <Box sx={{ mb: 4 }}>
            {article.content ? (
              <Typography
                component="div"
                sx={{
                  color: themeColors.textSecondary,
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                  '& p': { mb: 2 },
                  '& ul': { pl: 3, mb: 2 },
                  '& li': { mb: 1 }
                }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            ) : (
              <Stack spacing={3}>
                <Typography sx={{ color: themeColors.textSecondary, lineHeight: 1.7 }}>
                  This is the full article content. In a real implementation, this would contain 
                  the complete news article with proper formatting, quotes, and additional details 
                  about the announcement or update.
                </Typography>
                <Typography sx={{ color: themeColors.textSecondary, lineHeight: 1.7 }}>
                  The content would include more specific information about the topic, 
                  including quotes from leadership, technical details, impact on customers, 
                  and future roadmap items.
                </Typography>
              </Stack>
            )}
          </Box>

          {/* Tags */}
          {article.tags && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}
              >
                Tags
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {article.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={`#${tag}`}
                    size="small"
                    variant="outlined"
                    sx={{
                      backgroundColor: `${colors.surface.secondary}80`,
                      color: themeColors.textMuted,
                      border: 'none'
                    }}
                  />
                ))}
              </Stack>
            </Box>
          )}

          {/* Related Links */}
          {article.relatedLinks && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h6" 
                sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}
              >
                Related Links
              </Typography>
              <Stack spacing={2}>
                {article.relatedLinks.map((link, index) => (
                  <Paper
                    key={index}
                    component="a"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: `${themeColors.surface}CC`,
                      border: `1px solid ${colors.border.primary}30`,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: colors.surface.secondary,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 24px ${themeColors.brand}15`
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Typography sx={{ color: themeColors.text, fontWeight: 600 }}>
                        {link.title}
                      </Typography>
                      <LaunchIcon sx={{ fontSize: 16, color: themeColors.brand }} />
                    </Box>
                    {link.description && (
                      <Typography 
                        variant="body2"
                        sx={{ color: themeColors.textSecondary }}
                      >
                        {link.description}
                      </Typography>
                    )}
                  </Paper>
                ))}
              </Stack>
            </Box>
          )}

          <Divider sx={{ borderColor: `${colors.border.primary}30`, mb: 4 }} />

          {/* Action Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              onClick={() => {
                navigator.share ? 
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                  }) :
                  navigator.clipboard.writeText(window.location.href)
              }}
              variant="contained"
              startIcon={<Share />}
              sx={{
                flex: 1,
                py: 1.5,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${primaryColors.default}, ${primaryColors.default}CC)`,
                color: colors.text.inverse,
                fontWeight: 700,
                boxShadow: `0 8px 32px ${primaryColors.default}40`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${primaryColors.hover}, ${primaryColors.hover}CC)`,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 12px 40px ${primaryColors.default}50`
                }
              }}
            >
              Share Article
            </Button>
            
            <Button
              href="/newsroom"
              variant="outlined"
              startIcon={<ArrowBack />}
              sx={{
                flex: 1,
                py: 1.5,
                borderRadius: 2,
                color: getCategoryColor(article.category),
                borderColor: getCategoryColor(article.category),
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: getCategoryColor(article.category),
                  color: colors.text.inverse,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Back to Newsroom
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
}