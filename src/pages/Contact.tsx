'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail, Phone, CheckCircle, Database, Zap, Brain } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const assessmentBenefits = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Foundation Audit',
      description: 'We\'ll map your current data landscape and identify opportunities for unification.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Integration Roadmap',
      description: 'Get a clear plan for connecting your systems and automating data flows.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Readiness Assessment',
      description: 'Understand what it takes to make your business AI-ready and competitive.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xdkdgkdn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
      }, 4000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again or contact us directly at josh@strataxm.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Ready to Build Your <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Data Infrastructure?</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Schedule a free data infrastructure assessment and discover how to transform your scattered 
              business data into a unified, AI-ready foundation.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                Your Free Data Infrastructure Assessment Includes:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {assessmentBenefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                      {benefit.icon}
                    </div>
                    <h4 className="font-medium text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Tell us about your data challenges
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700">
                    Your message has been received! We'll get back to you within 24 hours at {formData.email} 
                    to schedule your free data infrastructure assessment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300'
                      }`}
                      placeholder="Josh Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'
                      }`}
                      placeholder="josh@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Describe your data situation *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300'
                      }`}
                      placeholder="For example: 'Our customer data is scattered across 3 different systems and we spend hours each day copying information between them' or 'We have tons of data but no way to get insights from it' or 'We want to use AI but our data isn't ready'"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group ${
                      isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </motion.button>
                </form>

              )}
            </motion.div>

            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Prefer to talk directly?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-cyan-500" />
                    <a
                      href="mailto:josh@strataxm.com"
                      className="text-slate-700 hover:text-cyan-600 transition-colors duration-200"
                    >
                      josh@strataxm.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-500" />
                    <a
                      href="tel:+13184195264"
                      className="text-slate-700 hover:text-cyan-600 transition-colors duration-200"
                    >
                      (318) 419-5264
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedule a Call */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border border-cyan-200">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-slate-900">
                    Schedule Your Data Infrastructure Assessment
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>In our 45-minute assessment call, we'll:</strong>
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Audit your current data landscape and identify integration opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Show you exactly how unified data infrastructure could transform your operations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Create a custom roadmap for making your business AI-ready</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Provide transparent pricing for your specific data infrastructure needs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 mb-6 border border-cyan-100">
                  <p className="text-sm text-cyan-800 font-medium text-center">
                    <strong>No sales pressure.</strong> Just honest assessment of your data infrastructure opportunities and what it would take to get there.
                  </p>
                </div>
                <a
                  href="https://calendly.com/strataxm/data-infrastructure-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Book Your Free Assessment
                </a>
              </div>

              {/* Value Proposition */}
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  What Makes Our Assessment Different
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Technical Depth</h4>
                      <p className="text-sm text-slate-600">We actually understand your systems and can provide specific, actionable recommendations.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Business Focus</h4>
                      <p className="text-sm text-slate-600">We explain everything in business terms and focus on ROI, not just cool technology.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Long-Term Partnership</h4>
                      <p className="text-sm text-slate-600">We're looking for ongoing managed infrastructure partnerships, not one-time projects.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  When you contact us:
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We'll respond within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>We'll ask detailed questions about your data landscape</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>You'll get honest, technical advice about your options</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No pressure to buy anything—just clear guidance</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Questions About Data Infrastructure
            </h2>
            <p className="text-xl text-slate-600">
              Here are the most common questions Louisiana business owners ask about data infrastructure.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to see results from data infrastructure?',
                answer: 'Most businesses see immediate improvements in data access within 2-4 weeks. Full data infrastructure transformation typically takes 3-6 months, but we deliver value at each phase.'
              },
              {
                question: 'Do I need to replace all my current software?',
                answer: 'Usually not. We specialize in connecting your existing systems and making them work together better. Replacing everything is expensive and disruptive—we avoid that when possible.'
              },
              {
                question: 'What makes this different from hiring a freelancer?',
                answer: 'We provide ongoing managed data infrastructure, not one-time projects. Your data backbone needs continuous monitoring, optimization, and growth—that\'s what we provide through monthly retainer partnerships.'
              },
              {
                question: 'How much does data infrastructure cost?',
                answer: 'Most projects range from $5K to $75K depending on complexity. We provide transparent pricing upfront and focus on solutions that clearly pay for themselves through efficiency gains and better decision-making.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-100"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;