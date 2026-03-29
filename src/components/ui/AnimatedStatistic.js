'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Card,
  CardContent,
  Typography,
  Avatar,
  Stack
} from '@mui/material';

const AnimatedStatistic = ({ 
  value, 
  label, 
  icon: Icon, 
  delay = 0, 
  color = 'brand.primary',
  suffix = '',
  prefix = ''
}) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const themeColors = useThemeColors({
    primary: color,
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary'
  });

  useEffect(() => {
    if (!hasAnimated) return;
    
    const timer = setTimeout(() => {
      let start = 0;
      const numericValue = parseInt(value.toString().replace(/[^\d.]/g, ''));
      const increment = numericValue / 60;
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setAnimatedValue(numericValue);
          clearInterval(counter);
        } else {
          setAnimatedValue(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [hasAnimated, value, delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated, label]);

  const displayValue = hasAnimated ? 
    `${prefix}${animatedValue}${suffix}` : 
    `${prefix}0${suffix}`;

  return (
    <motion.div
      id={`stat-${label.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 4,
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${themeColors.primary}`,
          }
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={2} alignItems="center">
            <Avatar
              sx={{
                width: 56,
                height: 56,
                background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}80)`,
                color: 'white'
              }}
            >
              <Icon sx={{ fontSize: 28 }} />
            </Avatar>
            
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}80)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '1.8rem', sm: '2.2rem' }
              }}
            >
              {displayValue}
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: themeColors.textSecondary,
                textAlign: 'center',
                fontWeight: 500,
                letterSpacing: 0.5
              }}
            >
              {label}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedStatistic;