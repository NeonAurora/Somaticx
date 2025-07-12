'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

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
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
      id="subscribe"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {!isSubscribed ? (
            <div 
              className="p-8 lg:p-12 rounded-2xl text-center"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-4xl mb-6">📧</div>
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: themeColors.text }}
              >
                Stay Updated with Somaticx News
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: themeColors.textSecondary }}
              >
                Get the latest company updates, product launches, and industry insights 
                delivered directly to your inbox.
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.background.primary,
                      borderColor: colors.border.primary,
                      color: themeColors.text,
                      focusRingColor: themeColors.brand,
                    }}
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                    style={{
                      backgroundColor: primaryColors.default,
                      color: colors.text.inverse,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = primaryColors.hover;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = primaryColors.default;
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              <p 
                className="text-sm mt-4"
                style={{ color: themeColors.textSecondary }}
              >
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          ) : (
            <div 
              className="p-8 lg:p-12 rounded-2xl text-center"
              style={{ backgroundColor: themeColors.surface }}
            >
              <div className="text-4xl mb-6">✅</div>
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: themeColors.text }}
              >
                Thanks for Subscribing!
              </h2>
              <p 
                className="text-lg"
                style={{ color: themeColors.textSecondary }}
              >
                You'll receive our latest updates and announcements in your inbox.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}