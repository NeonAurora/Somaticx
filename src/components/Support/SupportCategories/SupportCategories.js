'use client';

import { strings } from '@/data/strings';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import CategoryCard from '../CategoryCard/CategoryCard';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Avatar,
  Chip,
  Button
} from '@mui/material';
import { 
  RocketLaunch,
  Settings,
  Computer,
  Analytics,
  Add,
  AccountCircle,
  ChevronRight,
  Support,
  AutoAwesome,
  Category,
  HelpOutline
} from '@mui/icons-material';

const SectionHeader = () => {
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary',
  });

  return (
    <Box sx={{ textAlign: 'center', mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Chip
          label={strings.support.categories.title}
          icon={<Category />}
          sx={{
            background: `${themeColors.brand}20`,
            color: themeColors.brand,
            fontWeight: 600,
            fontSize: '0.875rem',
            mb: 4,
            border: `1px solid ${themeColors.brand}30`,
            py: 2,
            px: 1
          }}
        />

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', sm: '3.5rem', lg: '4rem' },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 3,
            background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
{strings.support.categories.subtitle}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: themeColors.textSecondary,
            fontSize: { xs: '1.125rem', sm: '1.25rem' },
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
{strings.support.categories.description}
        </Typography>
      </motion.div>
    </Box>
  );
};


export default function SupportCategories() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    backgroundPrimary: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    brand: 'brand.primary'
  });

  const supportCategories = [
    {
      title: strings.support.categories.gettingStarted.title,
      description: strings.support.categories.gettingStarted.description,
      icon: RocketLaunch,
      color: '#10B981', // Success green
      links: strings.support.categories.gettingStarted.links
    },
    {
      title: strings.support.categories.hardwareSupport.title,
      description: strings.support.categories.hardwareSupport.description,
      icon: Settings,
      color: '#F59E0B', // Warning amber
      links: strings.support.categories.hardwareSupport.links
    },
    {
      title: strings.support.categories.softwareHelp.title,
      description: strings.support.categories.softwareHelp.description,
      icon: Computer,
      color: '#3B82F6', // Info blue
      links: strings.support.categories.softwareHelp.links
    },
    {
      title: strings.support.categories.dataAnalytics.title,
      description: strings.support.categories.dataAnalytics.description,
      icon: Analytics,
      color: themeColors.brand,
      links: strings.support.categories.dataAnalytics.links
    },
    {
      title: strings.support.categories.integration.title,
      description: strings.support.categories.integration.description,
      icon: Add,
      color: '#8B5CF6', // Purple
      links: strings.support.categories.integration.links
    },
    {
      title: strings.support.categories.billing.title,
      description: strings.support.categories.billing.description,
      icon: AccountCircle,
      color: '#EF4444', // Red
      links: strings.support.categories.billing.links
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, lg: 12 },
        background: `linear-gradient(135deg, ${themeColors.background} 0%, ${themeColors.backgroundPrimary} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${themeColors.brand}08 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${themeColors.brand}08 0%, transparent 50%)`,
          zIndex: 0
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={4}>
            {supportCategories.map((category, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CategoryCard category={category} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Card
              sx={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                p: 6,
                maxWidth: 800,
                mx: 'auto',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${themeColors.brand}, ${themeColors.brand}80)`
                }
              }}
            >
              <Stack spacing={3} alignItems="center">
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                    border: `3px solid ${themeColors.brand}30`
                  }}
                >
                  <HelpOutline sx={{ fontSize: '2rem', color: themeColors.brand }} />
                </Avatar>

                <Typography
                  variant="h4"
                  sx={{
                    color: themeColors.text,
                    fontWeight: 700,
                    fontSize: { xs: '1.75rem', sm: '2.125rem' }
                  }}
                >
                  {strings.support.callToAction.title}
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    maxWidth: 600,
                    mx: 'auto'
                  }}
                >
{strings.support.callToAction.description}
                </Typography>

                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={3}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Support />}
                    endIcon={<ChevronRight />}
                    href="#contact-support"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: `0 8px 32px ${themeColors.brand}30`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${themeColors.brand}DD, ${themeColors.brand})`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 48px ${themeColors.brand}40`
                      }
                    }}
                  >
{strings.support.callToAction.buttons.contactSupport}
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<AutoAwesome />}
                    href="/demo"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderColor: `${themeColors.brand}60`,
                      color: themeColors.brand,
                      borderRadius: 3,
                      textTransform: 'none',
                      borderWidth: 2,
                      '&:hover': {
                        borderColor: themeColors.brand,
                        background: `${themeColors.brand}10`,
                        borderWidth: 2
                      }
                    }}
                  >
{strings.support.callToAction.buttons.requestDemo}
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}