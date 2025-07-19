'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box,
  Grid,
  Typography,
  Container
} from '@mui/material';
import { 
  TrendingUp,
  Groups,
  Public,
  Science
} from '@mui/icons-material';
import AnimatedStatistic from '../../ui/AnimatedStatistic';

const StatisticsSection = memo(({ statistics }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  const defaultStats = [
    {
      value: 150,
      suffix: '+',
      label: 'Projects Completed',
      icon: TrendingUp,
      color: '#10B981'
    },
    {
      value: 50,
      suffix: '+',
      label: 'Expert Team Members',
      icon: Groups,
      color: '#3B82F6'
    },
    {
      value: 25,
      suffix: '+',
      label: 'Countries Served',
      icon: Public,
      color: '#F59E0B'
    },
    {
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: Science,
      color: '#8B5CF6'
    }
  ];

  const stats = statistics || defaultStats;

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              color: themeColors.text,
              mb: 2
            }}
          >
            Our Impact in Numbers
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: themeColors.textSecondary,
              mb: 6,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Quantifying our commitment to excellence and innovation in bio-technology
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedStatistic
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
                delay={index}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;