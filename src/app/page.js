'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Heart, 
  Sprout, 
  Users, 
  Mail, 
  ChevronRight, 
  ArrowRight,
  Shield,
  Lightbulb,
  Globe,
} from "lucide-react";

import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { InteractiveCard } from '@/components/ui/InteractiveCard';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Import your existing components
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import WhyUs from '@/components/Home/WhyUs/WhyUs';
import StatsBar from '@/components/Home/StatsBar/StatsBar';
import ProductDemoCarousel from '@/components/Home/ProductDemoCarousel/ProductDemoCarousel';
import NewsroomTicker from '@/components/Home/NewsroomTicker/NewsroomTicker';
import SupportOverview from '@/components/Home/SupportOverview/SupportOverview';
import SocialRow from '@/components/Home/SocialRow/SocialRow';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    primary: 'brand.primary',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.background }}>
      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md' : 'backdrop-blur-sm'
        }`}
        style={{
          backgroundColor: scrolled 
            ? `${colors.surface.primary}95` 
            : `${colors.surface.primary}50`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Leaf className="w-8 h-8" style={{ color: themeColors.primary }} />
              <span className="text-xl font-bold" style={{ color: themeColors.text }}>
                Somaticx
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:scale-105 transition-transform" style={{ color: themeColors.text }}>
                Home
              </a>
              <a href="#solutions" className="hover:scale-105 transition-transform" style={{ color: themeColors.text }}>
                Solutions
              </a>
              <a href="/about" className="hover:scale-105 transition-transform" style={{ color: themeColors.text }}>
                About
              </a>
              <a href="/support" className="hover:scale-105 transition-transform" style={{ color: themeColors.text }}>
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="pt-16">
        <HeroSection />
        <WhyUs />
        <StatsBar />
        <ProductDemoCarousel />
        <NewsroomTicker />
        <SupportOverview />
        <SocialRow />
      </main>

      {/* Enhanced Footer */}
      <footer className="py-12 border-t" style={{ borderColor: colors.border.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="w-6 h-6" style={{ color: themeColors.primary }} />
              <span className="text-lg font-semibold" style={{ color: themeColors.text }}>
                Somaticx
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="hover:scale-105 transition-transform" style={{ color: themeColors.textSecondary }}>
                Privacy Policy
              </a>
              <a href="/terms" className="hover:scale-105 transition-transform" style={{ color: themeColors.textSecondary }}>
                Terms of Service
              </a>
              <a href="/support" className="hover:scale-105 transition-transform" style={{ color: themeColors.textSecondary }}>
                Support
              </a>
            </div>
          </motion.div>
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: colors.border.primary }}>
            <p style={{ color: themeColors.textSecondary }}>
              © 2025 Somaticx. All rights reserved. Nurturing life through technology.
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}