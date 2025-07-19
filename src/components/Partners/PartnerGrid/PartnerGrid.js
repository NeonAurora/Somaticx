'use client';

import { useState } from 'react';
import PartnerCard from '../PartnerCard/PartnerCard';
import PartnerModal from '../PartnerModal/PartnerModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper 
} from '@mui/material';
import { Group } from '@mui/icons-material';

export default function PartnerGrid({ partners, activeCategory }) {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { colors } = useTheme();
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.categoryId === activeCategory);

  // Sort by partnership duration and name
  const sortedPartners = [...filteredPartners].sort((a, b) => {
    // Sort by partnership start year (more recent first), then by name
    const yearA = parseInt(a.since);
    const yearB = parseInt(b.since);
    if (yearB !== yearA) return yearB - yearA;
    return a.name.localeCompare(b.name);
  });

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPartner(null), 300);
  };

  return (
    <Box 
      component="section"
      sx={{
        py: 10,
        background: `linear-gradient(135deg, ${themeColors.background}, ${colors.background.secondary}F0)`,
        minHeight: '60vh'
      }}
    >
      <Container maxWidth="xl">
        {sortedPartners.length === 0 ? (
          <Paper
            elevation={0}
            sx={{
              textAlign: 'center',
              py: 12,
              background: `${themeColors.surface}CC`,
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: `1px solid ${colors.border.primary}20`
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 4
              }}
            >
              <Group sx={{ fontSize: 60, color: themeColors.brand }} />
            </Box>
            <Typography 
              variant="h4" 
              component="h3"
              sx={{
                color: themeColors.text,
                fontWeight: 700,
                mb: 2
              }}
            >
              No Partners Found
            </Typography>
            <Typography 
              variant="h6"
              sx={{ color: themeColors.textSecondary }}
            >
              Try selecting a different category to see more partners.
            </Typography>
          </Paper>
        ) : (
          <>
            <Box sx={{ mb: 6 }}>
              <Typography 
                variant="h3" 
                component="h2"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.brand})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {activeCategory === 'all' ? 'All Partners' : `${sortedPartners[0]?.category} Partners`}
              </Typography>
              <Typography 
                variant="h6"
                sx={{ 
                  color: themeColors.textSecondary,
                  fontWeight: 400
                }}
              >
                Showing {sortedPartners.length} partner{sortedPartners.length !== 1 ? 's' : ''}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {sortedPartners.map((partner) => (
                <Grid item xs={12} md={6} lg={4} key={partner.id}>
                  <PartnerCard
                    partner={partner}
                    onClick={handlePartnerClick}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {selectedPartner && (
          <PartnerModal
            partner={selectedPartner}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </Box>
  );
}