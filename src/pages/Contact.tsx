import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Mail, Phone, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form handling service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're ready to start or just exploring, we'd love to hear from you. 
              Every great transformation begins with a conversation.
            </p>
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
                    We've received your message and will get back to you within 24 hours.
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                      placeholder="Josh Smith"
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
                      placeholder="josh@company.com"
                    />
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
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 resize-none"
                      placeholder="What processes are slowing you down? What data challenges are you facing? What would you like to automate?"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
                      href="mailto:hello@strataxm.com"
                      className="text-slate-700 hover:text-cyan-600 transition-colors duration-200"
                    >
                      hello@strataxm.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-cyan-500" />
                    <a
                      href="tel:+1234567890"
                      className="text-slate-700 hover:text-cyan-600 transition-colors duration-200"
                    >
                      (123) 456-7890
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
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your automation and AI opportunities. 
                  We'll help you identify quick wins and long-term strategies.
                </p>
                <a
                  href="https://calendly.com/strataxm/strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  Book Your Free Call
                </a>
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