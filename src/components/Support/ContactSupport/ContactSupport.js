'use client';

import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useThemeColors, useInteractiveColors } from '@/hooks/useThemeColor';

export default function ContactSupport() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    priority: 'medium',
    category: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { colors } = useTheme();
  const primaryColors = useInteractiveColors('primary');
  
  const themeColors = useThemeColors({
    background: 'background.secondary',
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your support system
    console.log('Support request:', formData);
    setIsSubmitted(true);
  };

  const contactMethods = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      icon: '💬',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: colors.status.success
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with a technical expert',
      icon: '📞',
      availability: 'Mon-Fri, 6AM-8PM PST',
      action: 'Call Now',
      color: colors.status.info
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions via email',
      icon: '📧',
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: colors.status.warning
    },
    {
      title: 'Video Call',
      description: 'Screen sharing and guided troubleshooting',
      icon: '📹',
      availability: 'By appointment',
      action: 'Schedule Call',
      color: colors.brand.primary
    }
  ];

  return (
    <section 
      className="py-20"
      style={{ backgroundColor: themeColors.background }}
      id="contact-support"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: themeColors.text }}
          >
            Contact Support
          </h2>
          <p 
            className="text-xl"
            style={{ color: themeColors.textSecondary }}
          >
            Choose the best way to get help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: themeColors.text }}
            >
              Get Immediate Help
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  style={{ backgroundColor: themeColors.surface }}
                >
                  <div className="flex items-start space-x-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                      style={{ backgroundColor: `${method.color}20` }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 
                        className="text-lg font-semibold mb-2"
                        style={{ color: themeColors.text }}
                      >
                        {method.title}
                      </h4>
                      <p 
                        className="text-sm mb-3"
                        style={{ color: themeColors.textSecondary }}
                      >
                        {method.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-xs"
                          style={{ color: method.color }}
                        >
                          {method.availability}
                        </span>
                        <button
                          className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          style={{
                            backgroundColor: `${method.color}20`,
                            color: method.color,
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = method.color;
                            e.target.style.color = colors.text.inverse;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = `${method.color}20`;
                            e.target.style.color = method.color;
                          }}
                        >
                          {method.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: themeColors.text }}
            >
              Submit a Support Request
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeColors.text }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: colors.background.primary,
                        borderColor: colors.border.primary,
                        color: themeColors.text,
                      }}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeColors.text }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: colors.background.primary,
                        borderColor: colors.border.primary,
                        color: themeColors.text,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.text }}
                  >
                    Company/Farm Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.background.primary,
                      borderColor: colors.border.primary,
                      color: themeColors.text,
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeColors.text }}
                    >
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: colors.background.primary,
                        borderColor: colors.border.primary,
                        color: themeColors.text,
                      }}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeColors.text }}
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: colors.background.primary,
                        borderColor: colors.border.primary,
                        color: themeColors.text,
                      }}
                    >
                      <option value="general">General Question</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing & Account</option>
                      <option value="hardware">Hardware Support</option>
                      <option value="integration">Integration Help</option>
                      <option value="feature">Feature Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.text }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: colors.background.primary,
                      borderColor: colors.border.primary,
                      color: themeColors.text,
                    }}
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeColors.text }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: colors.background.primary,
                      borderColor: colors.border.primary,
                      color: themeColors.text,
                    }}
                    placeholder="Please describe your issue or question in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-semibold transition-colors duration-300"
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
                  Submit Support Request
                </button>
              </form>
            ) : (
              <div 
                className="p-8 rounded-xl text-center"
                style={{ backgroundColor: themeColors.surface }}
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: themeColors.text }}
                >
                  Request Submitted!
                </h3>
                <p 
                  className="text-lg mb-6"
                  style={{ color: themeColors.textSecondary }}
                >
                  Thank you for contacting us. We'll get back to you within 2 hours during business hours.
                </p>
                <p 
                  className="text-sm"
                  style={{ color: themeColors.textSecondary }}
                >
                  Reference ID: #SUP-{Date.now().toString().slice(-6)}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}