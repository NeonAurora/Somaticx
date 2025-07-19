'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Stack,
  Divider
} from '@mui/material';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import StatisticsSection from './StatisticsSection';

const WhyUsOptimized = memo(({ features, testimonials, statistics }) => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  // Memoized default data to prevent recreation on every render
  const defaultFeatures = useMemo(() => [
    {
      title: "Innovation in Bio-IT",
      description: "Cutting-edge solutions at the intersection of biology and technology",
      score: 95
    },
    {
      title: "Proven Impact",
      description: "Demonstrated success across 150+ projects worldwide",
      score: 98
    },
    {
      title: "Cross-disciplinary Expertise",
      description: "Teams spanning biotechnology, AI, and data science",
      score: 92
    },
    {
      title: "End-to-End Support",
      description: "From concept to implementation and beyond",
      score: 96
    },
    {
      title: "Advanced Research",
      description: "Leading research in computational biology and bioinformatics",
      score: 94
    },
    {
      title: "Global Reach",
      description: "Serving clients across 25+ countries",
      score: 90
    },
    {
      title: "Sustainable Solutions",
      description: "Environmentally conscious and sustainable approaches",
      score: 93
    },
    {
      title: "Expert Team",
      description: "50+ specialists with deep domain expertise",
      score: 97
    }
  ], []);

  const defaultTestimonials = useMemo(() => [
    {
      name: "Dr. Sarah Chen",
      role: "Director of Research, BioTech Solutions",
      content: "Somaticx transformed our research capabilities with their innovative platform. The impact on our productivity has been remarkable.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Principal Investigator, Stanford University",
      content: "The level of technical expertise and scientific rigor that Somaticx brings to every project is exceptional.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Dr. Emma Thompson",
      role: "CEO, GeneTech Innovations",
      content: "Working with Somaticx has accelerated our drug discovery timeline by 40%. Their solutions are game-changing.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ], []);

  // Use provided data or defaults
  const featuresData = features || defaultFeatures;
  const testimonialsData = testimonials || defaultTestimonials;

  // Animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  const sectionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }), []);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <motion.div variants={sectionVariants}>
            <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  color: themeColors.text,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Why Choose Somaticx?
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: themeColors.textSecondary,
                  maxWidth: 800,
                  lineHeight: 1.6
                }}
              >
                We combine cutting-edge technology with deep biological expertise to deliver 
                transformative solutions that accelerate scientific discovery and innovation.
              </Typography>
            </Stack>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={sectionVariants}>
            <Grid container spacing={3} sx={{ mb: 8 }}>
              {featuresData.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <FeatureCard feature={feature} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

          {/* Statistics Section */}
          <StatisticsSection statistics={statistics} />

          <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.12)' }} />

          {/* Testimonials Section */}
          <motion.div variants={sectionVariants}>
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
              What Our Clients Say
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
              Hear from the scientists and researchers who trust Somaticx 
              to accelerate their most important work.
            </Typography>

            <Grid container spacing={3}>
              {testimonialsData.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <TestimonialCard testimonial={testimonial} index={index} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
});

WhyUsOptimized.displayName = 'WhyUsOptimized';

export default WhyUsOptimized;