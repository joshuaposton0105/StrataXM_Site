import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    helpWith: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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
      newErrors.message = 'Please tell us a bit about what you need';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
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

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', helpWith: 'General Inquiry', message: '' });
        setErrors({});
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try emailing us directly at josh@strataxm.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const faqs = [
    {
      question: 'Do you work with out-of-state clients?',
      answer: 'Yes. While we\'re based in Louisiana and love working with local businesses, we serve clients across the country. Most of our work is done remotely, with in-person visits available for Louisiana-based clients.'
    },
    {
      question: 'What\'s the typical starting cost?',
      answer: 'It depends on your needs and current systems. Many engagements start with a Discovery Sprint (typically $2,500-$5,000) that includes a full assessment and roadmap. Ongoing fractional partnerships typically range from $3,000-$10,000/month depending on scope.'
    },
    {
      question: 'What happens after I reach out?',
      answer: 'We\'ll respond within 24 hours to schedule a brief discovery call. We\'ll ask questions about your business, current systems, and challenges. Then we\'ll explain whether we can help and what that would look like. No pressure, just honest conversation.'
    },
    {
      question: 'Can we start with a small project?',
      answer: 'Absolutely. We often start with a Discovery Sprint or a single integration project to build trust and demonstrate value. Many of our long-term partnerships started with small engagements.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Let's Build Something Smarter
            </h1>
            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              Tell us a little about your business and what you'd like to improve. We'll follow up personally to explore how automation and data can work for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-700 mb-8">
              <a href="mailto:josh@strataxm.com" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-medium">josh@strataxm.com</span>
              </a>
              <span className="text-slate-300">|</span>
              <a href="tel:+13184195264" className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">(318) 419-5264</span>
              </a>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Alexandria, LA</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Start the Conversation
                </h2>
                <p className="text-slate-600 mb-8">
                  Every message goes directly to our team. No bots, no call centers.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-slate-900 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">We've got it</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Thanks for reaching out. We'll review your message and follow up within 24 hours at <strong>{formData.email}</strong>.
                    </p>
                    <p className="text-sm text-slate-500">
                      Check your inbox (and spam folder just in case). Talk soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200 ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200"
                          placeholder="Your business"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200 ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="helpWith" className="block text-sm font-semibold text-slate-900 mb-2">
                        How can we help?
                      </label>
                      <select
                        id="helpWith"
                        name="helpWith"
                        value={formData.helpWith}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200 bg-white"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Automation">Automation</option>
                        <option value="Data Engineering">Data Engineering</option>
                        <option value="Business Intelligence">Business Intelligence</option>
                        <option value="Discovery Sprint">Discovery Sprint</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                        Tell us about your situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200 resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300'
                        }`}
                        placeholder="What challenges are you facing? What systems do you use? What would you like to automate or improve?"
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-sm text-slate-600">
                        <strong>Privacy note:</strong> We'll never share your information. Ever.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group ${
                        isSubmitting
                          ? 'bg-slate-400 cursor-not-allowed text-white'
                          : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl'
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
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Direct Contact */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                      <a
                        href="mailto:josh@strataxm.com"
                        className="text-slate-900 hover:text-slate-700 transition-colors font-medium"
                      >
                        josh@strataxm.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                      <a
                        href="tel:+13184195264"
                        className="text-slate-900 hover:text-slate-700 transition-colors font-medium"
                      >
                        (318) 419-5264
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                      <p className="text-slate-900 font-medium">
                        Alexandria, Louisiana
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Serving businesses statewide and beyond
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule a Call */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-slate-900" />
                  <h3 className="text-xl font-bold text-slate-900">
                    Schedule a Call
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Prefer to book time directly? Schedule a 30-minute discovery call and we'll walk through your systems and challenges together.
                </p>
                <a
                  href="https://calendly.com/strataxm/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 hover:bg-slate-800 hover:shadow-lg"
                >
                  Book a Discovery Call
                </a>
              </div>

              {/* Response Promise */}
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                <h4 className="font-bold text-slate-900 mb-3">
                  When you reach out:
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>Response within 24 hours (usually sooner)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>Direct conversation with Joshua</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>Honest assessment of how we can help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-900 mt-0.5">•</span>
                    <span>Zero pressure, just conversation</span>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-lg text-slate-600">
              Common questions before reaching out
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Every modernization starts with a single conversation
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's start yours.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
