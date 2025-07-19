'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Stack
} from '@mui/material';
import { Email, CheckCircle } from '@mui/icons-material';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your newsletter service
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <Box 
      component="section"
      sx={{
        py: 12,
        background: `linear-gradient(135deg, ${themeColors.background}F0, ${colors.background.secondary}F0)`,
        backdropFilter: 'blur(20px)'
      }}
      id="subscribe"
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: 6,
            textAlign: 'center',
            background: `${themeColors.surface}CC`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.border.primary}20`,
            boxShadow: `0 20px 60px ${themeColors.brand}10`
          }}
        >
          {!isSubscribed ? (
            <>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${themeColors.brand}, ${themeColors.brand}CC)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  boxShadow: `0 8px 32px ${themeColors.brand}40`
                }}
              >
                <Email sx={{ fontSize: 50, color: '#ffffff' }} />
              </Box>
              
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
                Stay Updated with Somaticx News
              </Typography>
              
              <Typography 
                variant="h6"
                sx={{ 
                  color: themeColors.textSecondary,
                  mb: 6,
                  maxWidth: 600,
                  mx: 'auto',
                  lineHeight: 1.6
                }}
              >
                Get the latest company updates, product launches, and industry insights 
                delivered directly to your inbox.
              </Typography>
              
              <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ maxWidth: 500, mx: 'auto' }}
              >
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <TextField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    fullWidth
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: `${colors.background.primary}CC`,
                        borderRadius: 2,
                        '& fieldset': {
                          borderColor: colors.border.primary
                        },
                        '&:hover fieldset': {
                          borderColor: themeColors.brand
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: themeColors.brand
                        }
                      },
                      '& .MuiInputBase-input': {
                        color: themeColors.text
                      }
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.75,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${primaryColors.default}, ${primaryColors.default}CC)`,
                      color: colors.text.inverse,
                      fontWeight: 700,
                      fontSize: '1rem',
                      minWidth: 140,
                      boxShadow: `0 8px 32px ${primaryColors.default}40`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${primaryColors.hover}, ${primaryColors.hover}CC)`,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 12px 40px ${primaryColors.default}50`
                      }
                    }}
                  >
                    Subscribe
                  </Button>
                </Stack>
                
                <Typography 
                  variant="body2"
                  sx={{ color: themeColors.textSecondary, fontSize: '0.875rem' }}
                >
                  We respect your privacy. Unsubscribe anytime.
                </Typography>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.status.success}, ${colors.status.success}CC)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 4,
                  boxShadow: `0 8px 32px ${colors.status.success}40`
                }}
              >
                <CheckCircle sx={{ fontSize: 50, color: '#ffffff' }} />
              </Box>
              
              <Typography 
                variant="h3" 
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: themeColors.text
                }}
              >
                Thanks for Subscribing!
              </Typography>
              
              <Typography 
                variant="h6"
                sx={{ color: themeColors.textSecondary }}
              >
                You&apos;ll receive our latest updates and announcements in your inbox.
              </Typography>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
}