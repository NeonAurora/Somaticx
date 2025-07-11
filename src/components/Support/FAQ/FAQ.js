'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors } from '@/hooks/useThemeColor';

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());
  const { colors } = useTheme();
  
  const themeColors = useThemeColors({
    background: 'background.primary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          question: 'What industries does Somaticx serve?',
          answer: 'Somaticx specializes in bio-industry technology solutions, primarily serving agriculture, livestock management, dairy farming, and related agricultural sectors. Our solutions are designed to help farmers, ranchers, and agricultural businesses optimize their operations through innovative technology.'
        },
        {
          question: 'How does Somaticx ensure data security and privacy?',
          answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with industry standards. Your farm data is never shared with third parties without your explicit consent.'
        },
        {
          question: 'What support options are available?',
          answer: 'We offer 24/7 technical support, comprehensive documentation, video tutorials, live chat support, and dedicated customer success managers for enterprise clients. Our support team includes agricultural technology experts who understand your industry.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What are the system requirements for Somaticx solutions?',
          answer: 'Our software runs on any modern web browser and mobile device. For hardware solutions, you\'ll need a stable Wi-Fi connection and power source. Specific requirements vary by product - check our installation guides for detailed specifications.'
        },
        {
          question: 'Can Somaticx integrate with my existing farm management software?',
          answer: 'Yes! We offer APIs and integrations with popular farm management platforms including FarmLogs, Granular, Climate FieldView, and many others. Our technical team can help with custom integrations if needed.'
        },
        {
          question: 'How reliable is the IoT connectivity in rural areas?',
          answer: 'Our devices support multiple connectivity options including Wi-Fi, cellular (4G/5G), and LoRaWAN for long-range, low-power communication. We design our solutions specifically for rural environments with intermittent connectivity.'
        }
      ]
    },
    {
      category: 'Billing & Plans',
      questions: [
        {
          question: 'What pricing plans are available?',
          answer: 'We offer flexible pricing based on your operation size and needs. Plans start with basic monitoring for small farms at $50/month, with enterprise solutions available for large operations. Contact our sales team for custom pricing.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 30-day free trial for most of our software solutions. Hardware solutions include a 60-day money-back guarantee. No setup fees or long-term commitments required during the trial period.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Absolutely. You can cancel your subscription at any time with 30 days notice. Your data remains accessible during the notice period, and we provide export options to ensure you retain all your historical data.'
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemId = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: themeColors.text }}
              >
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems.has(itemId);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="rounded-xl border"
                      style={{
                        backgroundColor: themeColors.surface,
                        borderColor: colors.border.primary,
                      }}
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200"
                        style={{ color: themeColors.text }}
                      >
                        <span className="text-lg font-semibold pr-4">
                          {item.question}
                        </span>
                        <span 
                          className="text-2xl flex-shrink-0 transition-transform duration-300"
                          style={{ 
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                            color: themeColors.brand 
                          }}
                        >
                          +
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div 
                          className="px-6 pb-6"
                          style={{ color: themeColors.textSecondary }}
                        >
                          <div 
                            className="pt-4 border-t leading-relaxed"
                            style={{ borderColor: colors.border.primary }}
                          >
                            {item.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div 
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ backgroundColor: themeColors.surface }}
        >
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Still have questions?
          </h3>
          <p 
            className="text-lg mb-6"
            style={{ color: themeColors.textSecondary }}
          >
            Our support team is here to help you succeed.
          </p>
          <a
            href="#contact-support"
            className="px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            style={{
              backgroundColor: themeColors.brand,
              color: colors.text.inverse,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = colors.brand.primaryDark;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = themeColors.brand;
            }}
          >
            Contact Support Team
          </a>
        </div>
      </div>
    </section>
  );
}