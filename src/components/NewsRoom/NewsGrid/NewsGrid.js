'use client';

import { useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsModal from '../NewsModal/NewsModal';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper 
} from '@mui/material';
import { Article } from '@mui/icons-material';

export default function NewsGrid({ articles, activeCategory }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { colors } = useTheme();
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
  });

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.categoryId === activeCategory);

  // Sort by date (newest first)
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleArticleClick = (article) => {
    if (article.external && article.externalUrl) {
      window.open(article.externalUrl, '_blank');
    } else {
      setSelectedArticle(article);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
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
        {sortedArticles.length === 0 ? (
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
              <Article sx={{ fontSize: 60, color: themeColors.brand }} />
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
              No News Found
            </Typography>
            <Typography 
              variant="h6"
              sx={{ color: themeColors.textSecondary }}
            >
              Try selecting a different category to see more articles.
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
                {activeCategory === 'all' ? 'All News' : `${sortedArticles[0]?.category} News`}
              </Typography>
              <Typography 
                variant="h6"
                sx={{ 
                  color: themeColors.textSecondary,
                  fontWeight: 400
                }}
              >
                Showing {sortedArticles.length} article{sortedArticles.length !== 1 ? 's' : ''}
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {sortedArticles.map((article) => (
                <Grid item xs={12} md={6} lg={4} key={article.id}>
                  <NewsCard
                    article={article}
                    onClick={handleArticleClick}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {selectedArticle && (
          <NewsModal
            article={selectedArticle}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </Box>
  );
}