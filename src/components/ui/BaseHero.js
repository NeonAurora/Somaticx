'use client';

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  Grid
} from '@mui/material';
import { ChevronRight, PlayArrow } from '@mui/icons-material';
import AnimatedStatistic from './AnimatedStatistic';

const BaseHero = ({
  title,
  subtitle,
  description,
  statistics = [],
  primaryButton,
  secondaryButton,
  backgroundGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  children,
  customContent
}) => {
  const { isDark } = useTheme();
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: isDark 
          ? `linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%), ${backgroundGradient}`
          : `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%), ${backgroundGradient}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark 
            ? 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      color: themeColors.text,
                      mb: 2
                    }}
                  >
                    {title}
                  </Typography>
                </motion.div>

                {subtitle && (
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h2"
                      component="h2"
                      sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        fontWeight: 600,
                        background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}80)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        mb: 2
                      }}
                    >
                      {subtitle}
                    </Typography>
                  </motion.div>
                )}

                {description && (
                  <motion.div variants={itemVariants}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        color: themeColors.textSecondary,
                        lineHeight: 1.6,
                        maxWidth: 600,
                        mb: 3
                      }}
                    >
                      {description}
                    </Typography>
                  </motion.div>
                )}

                <motion.div variants={itemVariants}>
                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2}
                    sx={{ mb: 4 }}
                  >
                    {primaryButton && (
                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<ChevronRight />}
                        onClick={primaryButton.onClick}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${themeColors.primary}DD, ${themeColors.primary})`,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                          }
                        }}
                      >
                        {primaryButton.text}
                      </Button>
                    )}

                    {secondaryButton && (
                      <Button
                        variant="outlined"
                        size="large"
                        startIcon={<PlayArrow />}
                        onClick={secondaryButton.onClick}
                        sx={{
                          px: 4,
                          py: 1.5,
                          borderRadius: 3,
                          textTransform: 'none',
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderColor: themeColors.primary,
                          color: themeColors.primary,
                          '&:hover': {
                            borderColor: themeColors.primary,
                            backgroundColor: `${themeColors.primary}10`,
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        {secondaryButton.text}
                      </Button>
                    )}
                  </Stack>
                </motion.div>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              {customContent && (
                <motion.div variants={itemVariants}>
                  {customContent}
                </motion.div>
              )}
            </Grid>
          </Grid>

          {statistics.length > 0 && (
            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 6 }}>
                <Grid container spacing={3}>
                  {statistics.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <AnimatedStatistic
                        value={stat.value}
                        label={stat.label}
                        icon={stat.icon}
                        delay={index}
                        color={stat.color || themeColors.primary}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>
          )}

          {children && (
            <motion.div variants={itemVariants}>
              <Box sx={{ mt: 4 }}>
                {children}
              </Box>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Box>
  );
};

export default BaseHero;