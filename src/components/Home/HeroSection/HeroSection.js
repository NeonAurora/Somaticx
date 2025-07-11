'use client';

import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ArrowRight, 
  Dna, 
  Leaf, 
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function HeroSection() {
  const { colors } = useTheme();
  const interactiveColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    accent: 'brand.primary',
    surface: 'surface.primary',
    border: 'border.primary',
  });

  const heroContent = {
    headline: "Transforming Bio-Industries Through Intelligent Innovation",
    subheadline: "Pioneering the Future of Agriculture & Livestock",
    valueProposition: "We develop cutting-edge software and hardware solutions that revolutionize how the agricultural and livestock industries operate, grow, and thrive in an increasingly connected world.",
    ctaButtons: [
      { text: "Explore Our Solutions", href: "/services", primary: true, icon: ChevronRight },
      { text: "See Our Work", href: "/portfolio", primary: false, icon: ArrowRight }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bioIcons = [
    { icon: Dna, delay: 0, position: { top: '20%', left: '15%' } },
    { icon: Leaf, delay: 1, position: { top: '30%', right: '20%' } },
    { icon: Globe, delay: 2, position: { bottom: '30%', left: '10%' } },
    { icon: Zap, delay: 0.5, position: { top: '60%', right: '15%' } },
    { icon: TrendingUp, delay: 1.5, position: { bottom: '20%', right: '25%' } },
    { icon: Shield, delay: 2.5, position: { top: '40%', left: '5%' } },
  ];

  return (
    <section 
      className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background.primary} 0%, ${colors.background.secondary} 100%)`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bioIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={index}
              className="absolute opacity-5"
              style={item.position}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.05, 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{
                opacity: { delay: item.delay, duration: 1 },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
            >
              <IconComponent 
                size={60} 
                style={{ color: colors.brand.primary }}
              />
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Logo */}
        <motion.div
          variants={logoVariants}
          className="mb-12"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 backdrop-blur-md border shadow-lg"
            style={{
              backgroundColor: `${colors.surface.primary}80`,
              borderColor: colors.border.primary,
            }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Dna className="w-12 h-12" style={{ color: colors.brand.primary }} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: themeColors.text }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transforming Bio-Industries
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`
            }}
          >
            Through Intelligent Innovation
          </motion.span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.h2 
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 flex items-center justify-center gap-3"
          style={{ color: themeColors.accent }}
        >
          <Sparkles className="w-8 h-8" />
          {heroContent.subheadline}
          <Leaf className="w-8 h-8" />
        </motion.h2>
        
        {/* Value Proposition */}
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
          style={{ color: themeColors.textSecondary }}
        >
          {heroContent.valueProposition}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {heroContent.ctaButtons.map((button, index) => {
            const IconComponent = button.icon;
            return (
              <motion.a
                key={index}
                href={button.href}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-xl text-lg font-semibold backdrop-blur-md border transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 min-w-[200px]"
                style={{
                  backgroundColor: button.primary 
                    ? `${colors.brand.primary}90` 
                    : `${colors.surface.primary}40`,
                  color: button.primary ? colors.text.inverse : colors.brand.primary,
                  borderColor: button.primary ? colors.brand.primary : colors.border.primary,
                }}
              >
                <span>{button.text}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>
        
        {/* Interactive Bio-Tech Showcase */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <motion.div 
            className="relative w-full max-w-4xl mx-auto h-96 rounded-2xl backdrop-blur-md border overflow-hidden shadow-2xl"
            style={{
              backgroundColor: `${colors.surface.primary}20`,
              borderColor: colors.border.primary,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(45deg, ${colors.brand.primary}40, ${colors.brand.secondary}40)`,
              }}
            />
            
            {/* Content Grid */}
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-2xl">
                {[
                  { icon: Dna, label: "Bio-Engineering", value: "AI-Powered" },
                  { icon: Leaf, label: "Agriculture", value: "Smart Farming" },
                  { icon: Globe, label: "Global Impact", value: "Sustainable" },
                  { icon: Zap, label: "Innovation", value: "Cutting-Edge" },
                  { icon: TrendingUp, label: "Growth", value: "Data-Driven" },
                  { icon: Shield, label: "Reliability", value: "Trusted" },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 mx-auto mb-3 rounded-full backdrop-blur-md border flex items-center justify-center"
                        style={{
                          backgroundColor: `${colors.brand.primary}20`,
                          borderColor: colors.brand.primary,
                        }}
                        animate={{
                          boxShadow: [
                            `0 0 0 0 ${colors.brand.primary}40`,
                            `0 0 0 10px ${colors.brand.primary}00`,
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <IconComponent 
                          className="w-8 h-8" 
                          style={{ color: colors.brand.primary }} 
                        />
                      </motion.div>
                      <h4 
                        className="text-sm font-semibold mb-1"
                        style={{ color: themeColors.text }}
                      >
                        {item.label}
                      </h4>
                      <p 
                        className="text-xs"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {item.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Animated Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${colors.brand.primary}40, transparent)`,
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}