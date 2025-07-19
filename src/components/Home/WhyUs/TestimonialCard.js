'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Rating,
  Box
} from '@mui/material';

const TestimonialCard = memo(({ testimonial, index }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    surface: 'surface.primary'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          transition: 'all 0.3s ease',
          height: '100%',
          '&:hover': {
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${themeColors.primary}40`,
          }
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Rating
              value={testimonial.rating}
              readOnly
              sx={{
                color: '#FFD700',
                fontSize: '1.2rem'
              }}
            />
            
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                lineHeight: 1.6,
                fontStyle: 'italic',
                position: 'relative',
                '&::before': {
                  content: '"""',
                  position: 'absolute',
                  left: -10,
                  top: -5,
                  fontSize: '2rem',
                  color: `${themeColors.primary}40`,
                  lineHeight: 1
                }
              }}
            >
              {testimonial.content}
            </Typography>
            
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                src={testimonial.avatar}
                sx={{
                  width: 48,
                  height: 48,
                  backgroundColor: `${themeColors.primary}20`,
                  color: themeColors.primary
                }}
              >
                {testimonial.name.charAt(0)}
              </Avatar>
              
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: themeColors.text
                  }}
                >
                  {testimonial.name}
                </Typography>
                
                <Typography
                  variant="caption"
                  sx={{
                    color: themeColors.textMuted
                  }}
                >
                  {testimonial.role}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;