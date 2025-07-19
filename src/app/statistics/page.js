'use client';

import Layout from '@/components/common/Layout/Layout';
import StatisticsHero from '@/components/Statistics/StatisticsHero/StatisticsHero';
import MetricsGrid from '@/components/Statistics/MetricsGrid/MetricsGrid';
import { 
  companyMetrics, 
  industryImpact, 
  technologyStats,
  regionalData,
  customerSatisfaction
} from '@/data/statistics';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  Paper,
  LinearProgress
} from '@mui/material';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function StatisticsPage() {
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  return (
    <Layout>
      <StatisticsHero />
      
      <MetricsGrid 
        metrics={companyMetrics}
        title="Company Performance Metrics"
        subtitle="Key performance indicators showcasing our growth and operational excellence"
      />
      
      <MetricsGrid 
        metrics={industryImpact}
        title="Industry Impact"
        subtitle="Measurable improvements delivered to the agricultural and livestock industries"
      />
      
      <MetricsGrid 
        metrics={technologyStats}
        title="Technology Performance"
        subtitle="Technical specifications and performance metrics of our platform"
      />

      {/* Regional Distribution */}
      <Box 
        component="section"
        sx={{
          py: 12,
          background: `linear-gradient(135deg, ${themeColors.background}F0, ${colors.background.secondary}F0)`,
          backdropFilter: 'blur(20px)'
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Global Reach
            </Typography>
            <Typography 
              variant="h6"
              sx={{ 
                color: themeColors.textSecondary, 
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Our customer distribution across different regions worldwide
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {regionalData.map((region, index) => (
              <Grid item xs={12} md={6} lg={3} key={region.region}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: '100%',
                    background: `${themeColors.surface}CC`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.border.primary}20`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 60px ${themeColors.brand}15`
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: themeColors.text,
                      mb: 2
                    }}
                  >
                    {region.region}
                  </Typography>
                  
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 800,
                      mb: 1,
                      color: themeColors.brand
                    }}
                  >
                    {region.customers.toLocaleString()}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      mb: 3
                    }}
                  >
                    customers ({region.percentage}%)
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={region.percentage} 
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: `${themeColors.brand}20`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: themeColors.brand,
                          borderRadius: 4
                        }
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: colors.status.success,
                      fontWeight: 600,
                      mb: 2
                    }}
                  >
                    +{region.growth}% growth
                  </Typography>
                  
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      fontSize: '0.75rem'
                    }}
                  >
                    {region.countries.join(', ')}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Customer Satisfaction */}
      <Box 
        component="section"
        sx={{
          py: 12,
          background: `linear-gradient(135deg, ${colors.background.primary}F0, ${themeColors.background}F0)`,
          backdropFilter: 'blur(20px)'
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Customer Satisfaction
            </Typography>
            <Typography 
              variant="h6"
              sx={{ 
                color: themeColors.textSecondary, 
                fontWeight: 400,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Customer feedback and satisfaction ratings across key service areas
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
            {customerSatisfaction.map((satisfaction, index) => (
              <Grid item xs={12} md={6} key={satisfaction.metric}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    background: `${themeColors.surface}CC`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.border.primary}20`
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      color: themeColors.text,
                      mb: 2
                    }}
                  >
                    {satisfaction.metric}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 800,
                        color: themeColors.brand,
                        mr: 1
                      }}
                    >
                      {satisfaction.score}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: themeColors.textSecondary
                      }}
                    >
                      / {satisfaction.maxScore}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ mb: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={(satisfaction.score / satisfaction.maxScore) * 100} 
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: `${themeColors.brand}20`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: themeColors.brand,
                          borderRadius: 4
                        }
                      }}
                    />
                  </Box>
                  
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: themeColors.textSecondary,
                      fontSize: '0.75rem'
                    }}
                  >
                    Based on {satisfaction.responses.toLocaleString()} responses
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}