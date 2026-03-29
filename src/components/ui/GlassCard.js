'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  Box,
  Button,
  Divider
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

// Utility function for category colors
const getCategoryColor = (category, themeColors) => {
  const colorMap = {
    'biotech': '#10B981',
    'ai': '#3B82F6',
    'research': '#8B5CF6',
    'healthcare': '#EF4444',
    'agriculture': '#84CC16',
    'environment': '#059669',
    'technology': '#6366F1',
    'engineering': '#F59E0B',
    'analytics': '#EC4899',
    'cloud': '#06B6D4',
    'frontend': '#3B82F6',
    'backend': '#10B981',
    'fullstack': '#8B5CF6',
    'data': '#F59E0B',
    'design': '#EC4899',
    'active': '#10B981',
    'completed': '#6B7280',
    'in-progress': '#F59E0B',
    'planning': '#8B5CF6'
  };
  
  return colorMap[category?.toLowerCase()] || themeColors.brand;
};

const GlassCard = ({
  title,
  description,
  category,
  categoryColor,
  badges = [],
  icon: Icon,
  image,
  onClick,
  onButtonClick,
  buttonText = "Learn More",
  showButton = true,
  customContent,
  children,
  progress,
  status,
  metadata = [],
  index = 0,
  variant = 'default', // default, compact, detailed
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const finalCategoryColor = categoryColor || getCategoryColor(category, themeColors);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        onClick={handleCardClick}
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          cursor: onClick ? 'pointer' : 'default',
          transition: 'all 0.3s ease',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          '&:hover': {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${finalCategoryColor}`,
          },
          ...props.sx
        }}
        {...props}
      >
        {image && (
          <Box
            sx={{
              height: variant === 'compact' ? 120 : 200,
              background: `linear-gradient(135deg, ${finalCategoryColor}20, ${finalCategoryColor}40)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            {category && (
              <Chip
                label={category}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  backgroundColor: finalCategoryColor,
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.75rem'
                }}
              />
            )}
          </Box>
        )}

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Stack spacing={2}>
            {/* Header with icon and category */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              {Icon && (
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: `${finalCategoryColor}20`,
                    color: finalCategoryColor,
                    mt: 0.5
                  }}
                >
                  <Icon sx={{ fontSize: 24 }} />
                </Avatar>
              )}
              
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    color: themeColors.text,
                    mb: 1,
                    lineHeight: 1.3
                  }}
                >
                  {title}
                </Typography>
                
                {category && !image && (
                  <Chip
                    label={category}
                    size="small"
                    sx={{
                      backgroundColor: `${finalCategoryColor}20`,
                      color: finalCategoryColor,
                      fontWeight: 600,
                      fontSize: '0.75rem'
                    }}
                  />
                )}
              </Box>
            </Stack>

            {/* Description */}
            {description && (
              <Typography
                variant="body2"
                sx={{
                  color: themeColors.textSecondary,
                  lineHeight: 1.6,
                  display: '-webkit-box',
                  WebkitLineClamp: variant === 'compact' ? 2 : 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {description}
              </Typography>
            )}

            {/* Progress bar */}
            {progress !== undefined && (
              <Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                  <Typography variant="caption" color={themeColors.textSecondary}>
                    Progress
                  </Typography>
                  <Typography variant="caption" color={themeColors.text} fontWeight={600}>
                    {progress}%
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: `${finalCategoryColor}20`,
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{
                      height: '100%',
                      backgroundColor: finalCategoryColor,
                      borderRadius: 3
                    }}
                  />
                </Box>
              </Box>
            )}

            {/* Badges */}
            {badges.length > 0 && (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {badges.map((badge, i) => (
                  <Chip
                    key={i}
                    label={badge}
                    size="small"
                    variant="outlined"
                    sx={{
                      fontSize: '0.7rem',
                      height: 24,
                      borderColor: `${finalCategoryColor}40`,
                      color: themeColors.textSecondary,
                      '&:hover': {
                        borderColor: finalCategoryColor,
                        backgroundColor: `${finalCategoryColor}10`
                      }
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* Metadata */}
            {metadata.length > 0 && (
              <Stack spacing={1}>
                {metadata.map((item, i) => (
                  <Stack key={i} direction="row" alignItems="center" spacing={1}>
                    {item.icon && (
                      <item.icon sx={{ fontSize: 16, color: themeColors.textMuted }} />
                    )}
                    <Typography variant="caption" color={themeColors.textSecondary}>
                      {item.label}: {item.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            )}

            {/* Custom content */}
            {customContent && (
              <Box>
                {customContent}
              </Box>
            )}

            {/* Children */}
            {children}

            {/* Button */}
            {showButton && (
              <>
                <Divider sx={{ borderColor: `${finalCategoryColor}20`, my: 1 }} />
                <Button
                  variant="outlined"
                  size="small"
                  endIcon={<ChevronRight />}
                  onClick={handleButtonClick}
                  sx={{
                    alignSelf: 'flex-start',
                    borderColor: `${finalCategoryColor}40`,
                    color: finalCategoryColor,
                    textTransform: 'none',
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 2,
                    py: 1,
                    '&:hover': {
                      borderColor: finalCategoryColor,
                      backgroundColor: `${finalCategoryColor}10`,
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  {buttonText}
                </Button>
              </>
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GlassCard;