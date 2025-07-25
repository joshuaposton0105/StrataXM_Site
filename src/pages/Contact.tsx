'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail, Phone, CheckCircle, DollarSign, Clock, Target } from 'lucide-react';

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

  const callBenefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Identify Quick Wins',
      description: 'We\'ll spot 2-3 processes you can automate immediately for fast ROI.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Calculate Your ROI',
      description: 'Get specific numbers on potential savings and investment required.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Create a Roadmap',
      description: 'Leave with a clear 90-day plan for your automation journey.'
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
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
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
              Let's <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Talk</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Book a free 30-minute strategy call and leave with a clear action plan for your business.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-center">
                What You'll Get From Our Call:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {callBenefits.map((benefit, index) => (
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
                Send us a message
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
                    Your message has been received! We'll get back to you within 24 hours at {formData.email}.
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
                      Tell us about your challenges *
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
                      placeholder="What processes are slowing you down? What data challenges are you facing? What would you like to automate?"
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
                    Schedule a Strategy Call
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    <strong>30-minute call where we'll:</strong>
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Analyze your current processes and identify automation opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Calculate potential time and cost savings for your business</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Create a prioritized action plan with realistic timelines</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">Discuss investment levels and expected ROI</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 mb-6 border border-cyan-100">
                  <p className="text-sm text-cyan-800 font-medium text-center">
                    <strong>No sales pitch.</strong> Just practical advice you can use whether you work with us or not.
                  </p>
                </div>
                <a
                  href="https://calendly.com/strataxm/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-center transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Book Your Free Strategy Call
                </a>
              </div>

              {/* Value Proposition */}
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                  Why This Call Is Worth Your Time
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Immediate Value</h4>
                      <p className="text-sm text-slate-600">You'll leave with actionable insights you can implement right away, even if you never hire us.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">Realistic Expectations</h4>
                      <p className="text-sm text-slate-600">We'll give you honest timelines and budgets, not inflated promises to win your business.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">No Pressure</h4>
                      <p className="text-sm text-slate-600">This is a strategy session, not a sales call. We'll only propose working together if it makes sense for both of us.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 text-center">
                  What Others Say About Our Strategy Calls
                </h3>
                <div className="space-y-4">
                  <blockquote className="text-slate-700 italic text-center">
                    "Josh identified $40K in potential savings in our first 30-minute call. Even if we hadn't hired them, that conversation alone was worth thousands."
                  </blockquote>
                  <p className="text-center text-sm text-slate-500">— Marketing Agency Owner</p>
                  
                  <blockquote className="text-slate-700 italic text-center">
                    "Finally, someone who speaks in business terms instead of tech jargon. Josh showed us exactly what was possible and what it would cost."
                  </blockquote>
                  <p className="text-center text-sm text-slate-500">— E-commerce Business Owner</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white border-2 border-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  What to expect:
                </h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free consultation to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clear next steps and timeline</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>No pressure, no sales pitch</span>
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
              Common Questions
            </h2>
            <p className="text-xl text-slate-600">
              Here are some questions we hear most often from business owners.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How quickly can we see results?',
                answer: 'Most clients see initial improvements within 2-4 weeks. Simple automation wins can often be implemented in days, while more complex AI solutions typically take 6-12 weeks.'
              },
              {
                question: 'Do we need to have technical expertise on our team?',
                answer: 'Not at all. We handle all the technical implementation and provide training so your team can use and maintain the solutions. Everything is designed to be user-friendly.'
              },
              {
                question: 'What if we\'re not ready for AI yet?',
                answer: 'That\'s perfectly fine. We often start with workflow automation and data organization. These create a foundation that makes AI implementation much more effective later.'
              },
              {
                question: 'How much does this typically cost?',
                answer: 'Investment varies based on scope and complexity. Most small business projects range from $10K-50K. We always provide clear pricing upfront with no hidden fees.'
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