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
  Divider,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Close,
  Share,
  ArrowBack,
  Computer,
  Science,
  LocalShipping,
  School,
  AccountBalance,
  Group,
  LocationOn,
  Schedule,
  Person,
  Email,
  Launch as LaunchIcon,
  CheckCircle,
  Build,
  TrendingUp,
  Assignment
} from '@mui/icons-material';
import { useState } from 'react';

export default function PartnerModal({ partner, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
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

  if (!isOpen || !partner) return null;

  const getIcon = (iconName) => {
    const iconMap = {
      'Computer': Computer,
      'Science': Science,
      'LocalShipping': LocalShipping,
      'School': School,
      'AccountBalance': AccountBalance,
      'Group': Group
    };
    return iconMap[iconName] || Group;
  };

  const getCategoryColor = (category) => {
    const categoryColors = {
      'Technology': colors.status.info,
      'Research': colors.status.success,
      'Distribution': colors.status.warning,
      'Academic': colors.brand.primary,
      'Government': colors.brand.secondary,
    };
    return categoryColors[category] || colors.brand.primary;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'Strategic Partner': colors.status.success,
      'Technology Partner': colors.status.info,
      'Research Partner': colors.accent.primary,
      'Distribution Partner': colors.status.warning,
      'Academic Partner': colors.brand.primary,
      'Government Partner': colors.brand.secondary
    };
    return statusColors[status] || colors.status.info;
  };

  const IconComponent = getIcon(partner.categoryIcon);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const TabPanel = ({ children, value, index }) => (
    <Box sx={{ display: value === index ? 'block' : 'none', pt: 3 }}>
      {children}
    </Box>
  );

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

          {/* Partner Hero */}
          <Box
            sx={{
              height: 200,
              borderRadius: 3,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${getCategoryColor(partner.category)}20, ${getCategoryColor(partner.category)}40)`,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${getCategoryColor(partner.category)}, ${getCategoryColor(partner.category)}CC)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 12px 40px ${getCategoryColor(partner.category)}40`
              }}
            >
              <IconComponent sx={{ fontSize: 50, color: '#ffffff' }} />
            </Box>
          </Box>

          {/* Partner Meta */}
          <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
            <Chip 
              label={partner.category}
              sx={{
                backgroundColor: `${getCategoryColor(partner.category)}20`,
                color: getCategoryColor(partner.category),
                fontWeight: 600
              }}
            />
            <Chip 
              label={partner.status}
              variant="outlined"
              sx={{
                borderColor: getStatusColor(partner.status),
                color: getStatusColor(partner.status),
                fontWeight: 600
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOn sx={{ fontSize: 16, color: themeColors.textMuted }} />
              <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                {partner.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Schedule sx={{ fontSize: 16, color: themeColors.textMuted }} />
              <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                Since {partner.since}
              </Typography>
            </Box>
          </Stack>

          {/* Partner Name */}
          <Typography 
            variant="h3" 
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 1,
              color: themeColors.text,
              lineHeight: 1.2
            }}
          >
            {partner.name}
          </Typography>

          {/* Short Name */}
          {partner.shortName && partner.shortName !== partner.name && (
            <Typography 
              variant="h6"
              sx={{
                color: themeColors.brand,
                mb: 2,
                fontWeight: 600
              }}
            >
              ({partner.shortName})
            </Typography>
          )}

          {/* Description */}
          <Typography 
            variant="h6"
            sx={{
              color: themeColors.textSecondary,
              mb: 4,
              lineHeight: 1.6,
              fontWeight: 400
            }}
          >
            {partner.description}
          </Typography>
        </Box>

        <Divider sx={{ borderColor: `${colors.border.primary}30` }} />

        {/* Tabs */}
        <Box sx={{ px: 4 }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                color: themeColors.textSecondary,
                fontWeight: 600,
                '&.Mui-selected': {
                  color: themeColors.brand
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: themeColors.brand
              }
            }}
          >
            <Tab label="Overview" />
            <Tab label="Services & Benefits" />
            <Tab label="Projects" />
            <Tab label="Contact" />
          </Tabs>
        </Box>

        {/* Content */}
        <Box sx={{ p: 4 }}>
          {/* Overview Tab */}
          <TabPanel value={activeTab} index={0}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}>
                  About {partner.shortName || partner.name}
                </Typography>
                <Typography sx={{ color: themeColors.textSecondary, lineHeight: 1.7 }}>
                  {partner.longDescription}
                </Typography>
              </Box>

              {partner.metrics && (
                <Box>
                  <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}>
                    Partnership Metrics
                  </Typography>
                  <Stack direction="row" spacing={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: themeColors.brand, fontWeight: 800 }}>
                        {partner.metrics.joinProjects}
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                        Joint Projects
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: themeColors.brand, fontWeight: 800 }}>
                        {partner.metrics.yearsActive}
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                        Years Active
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ color: themeColors.brand, fontWeight: 800 }}>
                        {partner.metrics.satisfaction}
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textMuted }}>
                        Satisfaction
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              )}
            </Stack>
          </TabPanel>

          {/* Services & Benefits Tab */}
          <TabPanel value={activeTab} index={1}>
            <Stack spacing={4}>
              {partner.services && (
                <Box>
                  <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}>
                    Services Provided
                  </Typography>
                  <List dense>
                    {partner.services.map((service, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <Build sx={{ fontSize: 20, color: themeColors.brand }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={service}
                          sx={{ '& .MuiListItemText-primary': { color: themeColors.textSecondary } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {partner.benefits && (
                <Box>
                  <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700, mb: 2 }}>
                    Partnership Benefits
                  </Typography>
                  <List dense>
                    {partner.benefits.map((benefit, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircle sx={{ fontSize: 20, color: colors.status.success }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={benefit}
                          sx={{ '& .MuiListItemText-primary': { color: themeColors.textSecondary } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Stack>
          </TabPanel>

          {/* Projects Tab */}
          <TabPanel value={activeTab} index={2}>
            {partner.projects && (
              <Stack spacing={3}>
                <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700 }}>
                  Active Projects
                </Typography>
                {partner.projects.map((project, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      backgroundColor: `${themeColors.surface}CC`,
                      border: `1px solid ${colors.border.primary}30`
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Assignment sx={{ fontSize: 20, color: themeColors.brand }} />
                      <Typography sx={{ color: themeColors.text, fontWeight: 600 }}>
                        {project.name}
                      </Typography>
                      <Chip 
                        label={project.status}
                        size="small"
                        sx={{
                          backgroundColor: project.status === 'Active' ? `${colors.status.success}20` : `${colors.status.info}20`,
                          color: project.status === 'Active' ? colors.status.success : colors.status.info,
                          fontSize: '0.7rem'
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="body2"
                      sx={{ color: themeColors.textSecondary }}
                    >
                      {project.description}
                    </Typography>
                  </Paper>
                ))}
              </Stack>
            )}
          </TabPanel>

          {/* Contact Tab */}
          <TabPanel value={activeTab} index={3}>
            {partner.contact && (
              <Stack spacing={4}>
                <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 700 }}>
                  Partnership Contact
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: `${themeColors.surface}CC`,
                    border: `1px solid ${colors.border.primary}30`
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Person sx={{ fontSize: 20, color: themeColors.brand }} />
                      <Typography sx={{ color: themeColors.text, fontWeight: 600 }}>
                        {partner.contact.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary }}>
                      {partner.contact.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email sx={{ fontSize: 20, color: themeColors.brand }} />
                      <Typography 
                        component="a"
                        href={`mailto:${partner.contact.email}`}
                        sx={{ 
                          color: themeColors.brand,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {partner.contact.email}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            )}
          </TabPanel>

          <Divider sx={{ borderColor: `${colors.border.primary}30`, my: 4 }} />

          {/* Action Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {partner.website && (
              <Button
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                startIcon={<LaunchIcon />}
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
                Visit Website
              </Button>
            )}
            
            <Button
              href="/partners"
              variant="outlined"
              startIcon={<ArrowBack />}
              sx={{
                flex: 1,
                py: 1.5,
                borderRadius: 2,
                color: getCategoryColor(partner.category),
                borderColor: getCategoryColor(partner.category),
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: getCategoryColor(partner.category),
                  color: colors.text.inverse,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Back to Partners
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
}