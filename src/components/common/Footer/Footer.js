'use client';

import { strings } from '@/data/strings';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';
import { motion } from 'framer-motion';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Stack, 
  IconButton,
  Chip,
  Card,
  CardContent,
  Divider,
  Link
} from '@mui/material';
import { 
  LinkedIn,
  Twitter,
  GitHub,
  YouTube,
  Email,
  Phone,
  LocationOn,
  Biotech,
  EmojiEvents,
  Verified,
  Star,
  TrendingUp
} from '@mui/icons-material';

const SocialButton = ({ icon: Icon, label, href }) => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    surface: 'surface.secondary'
  });

  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconButton
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          width: 48,
          height: 48,
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(8px)',
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          color: themeColors.primary,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: `${themeColors.primary}15`,
            borderColor: `${themeColors.primary}40`,
            boxShadow: `0 8px 32px ${themeColors.primary}30`
          }
        }}
        aria-label={label}
      >
        <Icon />
      </IconButton>
    </motion.div>
  );
};

const FooterLink = ({ children, href, ...props }) => {
  const themeColors = useThemeColors({
    textSecondary: 'text.secondary',
    primary: 'brand.primary'
  });

  return (
    <motion.div whileHover={{ x: 4 }}>
      <Link
        href={href}
        sx={{
          color: themeColors.textSecondary,
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            color: themeColors.primary,
            textDecoration: 'none'
          }
        }}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
};

const AchievementCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const themeColors = useThemeColors({
    primary: 'brand.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary'
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          background: 'rgba(255, 255, 255, 0.04)',
          backdropFilter: 'blur(12px)',
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          borderRadius: 3,
          textAlign: 'center',
          p: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.08)',
            borderColor: `${themeColors.primary}40`,
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 40px rgba(22, 163, 74, 0.15)`
          }
        }}
      >
        <CardContent sx={{ p: '16px !important' }}>
          <Icon sx={{ color: themeColors.primary, fontSize: 32, mb: 1 }} />
          <Typography variant="h6" sx={{ color: themeColors.text, fontWeight: 600, mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: themeColors.textSecondary, fontSize: '0.75rem' }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Footer() {
  const { colors, isDark } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    textMuted: 'text.tertiary',
    primary: 'brand.primary',
    surface: 'surface.primary',
  });

  const footerSections = {
    company: {
      title: strings.footer.links.company.title,
      links: [
        { name: strings.footer.links.company.items.about, href: '/about' },
        { name: strings.footer.links.company.items.careers, href: '/careers' },
        { name: strings.footer.links.company.items.partners, href: '/partners' },
        { name: strings.footer.links.company.items.newsroom, href: '/newsroom' },
        { name: strings.footer.links.company.items.contact, href: '/contact' }
      ]
    },
    solutions: {
      title: strings.footer.links.solutions.title,
      links: [
        { name: strings.footer.links.solutions.items.services, href: '/services' },
        { name: strings.footer.links.solutions.items.portfolio, href: '/portfolio' },
        { name: strings.footer.links.solutions.items.demo, href: '/demo' },
        { name: strings.footer.links.solutions.items.documentation, href: '/docs' },
        { name: strings.footer.links.solutions.items.api, href: '/api' }
      ]
    },
    resources: {
      title: strings.footer.links.resources.title,
      links: [
        { name: strings.footer.links.resources.items.blog, href: '/blog' },
        { name: strings.footer.links.resources.items.support, href: '/support' },
        { name: strings.footer.links.resources.items.faq, href: '/faq' },
        { name: strings.footer.links.resources.items.statistics, href: '/statistics' },
        { name: strings.footer.links.resources.items.downloads, href: '/downloads' }
      ]
    },
    legal: {
      title: strings.footer.links.legal.title,
      links: [
        { name: strings.footer.links.legal.items.privacy, href: '/privacy' },
        { name: strings.footer.links.legal.items.terms, href: '/terms' },
        { name: strings.footer.links.legal.items.certificates, href: '/certificates' },
        { name: strings.footer.links.legal.items.compliance, href: '/compliance' }
      ]
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: LinkedIn },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: GitHub },
    { name: 'YouTube', href: '#', icon: YouTube },
  ];

  const achievements = [
    { icon: EmojiEvents, title: strings.footer.achievements.items.industryLeader.title, description: strings.footer.achievements.items.industryLeader.description },
    { icon: Verified, title: strings.footer.achievements.items.certified.title, description: strings.footer.achievements.items.certified.description },
    { icon: Star, title: strings.footer.achievements.items.rated.title, description: strings.footer.achievements.items.rated.description },
    { icon: TrendingUp, title: strings.footer.achievements.items.uptime.title, description: strings.footer.achievements.items.uptime.description }
  ];

  const contactInfo = [
    { icon: Email, text: strings.footer.company.contact.email, href: `mailto:${strings.footer.company.contact.email}` },
    { icon: Phone, text: strings.footer.company.contact.phone, href: "tel:+15551234567" },
    { icon: LocationOn, text: strings.footer.company.contact.address, href: "#" }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${colors.brand.primary}08 0%, transparent 50%), 
                       radial-gradient(circle at 80% 20%, ${colors.brand.primaryLight}06 0%, transparent 50%)`,
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Achievements Section */}
        <Box sx={{ py: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                color: themeColors.text,
                fontWeight: 700,
                mb: 4
              }}
            >
{strings.footer.achievements.title}
            </Typography>
          </motion.div>
          
          <Grid container spacing={3}>
            {achievements.map((achievement, index) => (
              <Grid item xs={6} md={3} key={index}>
                <AchievementCard {...achievement} delay={index * 0.1} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* Main Footer Content */}
        <Grid container spacing={4} sx={{ py: 6 }}>
          {/* Company Info */}
          <Grid item xs={12} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Stack spacing={3}>
                {/* Logo */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.primary}CC)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 32px ${themeColors.primary}40`
                    }}
                  >
                    <Biotech sx={{ color: '#ffffff', fontSize: 28 }} />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${themeColors.text}, ${themeColors.primary})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    {strings.app.companyName}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: themeColors.textSecondary,
                    lineHeight: 1.7,
                    maxWidth: '400px'
                  }}
                >
                  {strings.footer.company.description}
                </Typography>

                {/* Contact Info */}
                <Stack spacing={2}>
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <contact.icon sx={{ color: themeColors.primary, fontSize: 20 }} />
                        <Link
                          href={contact.href}
                          sx={{
                            color: themeColors.textSecondary,
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            '&:hover': { color: themeColors.primary }
                          }}
                        >
                          {contact.text}
                        </Link>
                      </Box>
                    </motion.div>
                  ))}
                </Stack>

                {/* Social Links */}
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social) => (
                    <SocialButton
                      key={social.name}
                      icon={social.icon}
                      label={social.name}
                      href={social.href}
                    />
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={4}>
              {Object.entries(footerSections).map(([key, section], sectionIndex) => (
                <Grid item xs={6} md={3} key={key}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: themeColors.text,
                        fontWeight: 700,
                        mb: 3,
                        fontSize: '1rem'
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Stack spacing={2}>
                      {section.links.map((link, linkIndex) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        >
                          <FooterLink href={link.href}>
                            {link.name}
                          </FooterLink>
                        </motion.div>
                      ))}
                    </Stack>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        {/* Bottom Bar */}
        <Box sx={{ py: 4 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Typography
                variant="body2"
                sx={{ color: themeColors.textMuted, fontSize: '0.875rem' }}
              >
{strings.footer.bottom.copyright}
              </Typography>
              
              <Stack direction="row" alignItems="center" spacing={2}>
                <Chip
                  label={strings.footer.bottom.tagline}
                  size="small"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    backdropFilter: 'blur(8px)',
                    border: `1px solid ${colors.brand.primary}20`,
                    color: themeColors.textSecondary,
                    fontWeight: 500,
                    fontSize: '0.75rem'
                  }}
                />
              </Stack>
            </Stack>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}