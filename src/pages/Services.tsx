import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Brain, Settings, Target, ArrowRight, Calculator, Clock, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Stop Doing the Same Tasks Over and Over',
      description: 'If your team spends hours each day on data entry, sending similar emails, or updating spreadsheets, we can automate those tasks so they happen without any human involvement.',
      outcome: 'Your team gets 15-20 hours back each week to focus on customers and growth',
      features: [
        'Automatically send follow-up emails to customers',
        'Process orders from start to finish without manual work',
        'Set up new customers in your system automatically',
        'Generate and email reports to you every morning'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Get Answers About Your Business Instantly',
      description: 'Instead of checking your sales system, then your accounting software, then three different spreadsheets just to see how you\'re doing, get all the information you need in one place.',
      outcome: 'Answer any business question in seconds, not hours',
      features: [
        'See sales, expenses, and profits on one screen',
        'View complete customer history without switching systems',
        'Get real-time updates on how your business is performing',
        'Trust that your numbers are accurate and up-to-date'
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Use Smart Technology to Make Better Decisions',
      description: 'You\'ve heard about AI, but you\'re not sure what it can actually do for your business. We show you exactly where smart technology can help you make money or save time—no hype, just results.',
      outcome: 'Only invest in technology that clearly improves your bottom line',
      features: [
        'Identify exactly where smart technology will help your business',
        'Get honest advice about what you\'re ready for right now',
        'See clear numbers on what it will cost and what you\'ll save',
        'Test solutions before making big investments'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Make Your Systems Talk',
      description: 'Tired of entering the same customer information in three different places? We connect your existing software so information automatically goes where it needs to go.',
      outcome: 'Eliminate manual data entry and reduce errors',
      features: [
        'Customer information automatically updates everywhere',
        'Sales data flows directly into your accounting software',
        'Marketing and sales systems share information seamlessly',
        'Connect any software you use, even custom solutions'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Put Smart Technology to Work for You',
      description: 'When you\'re ready to use AI, we implement practical solutions that solve real problems and save real money—no complicated experiments or unclear benefits.',
      outcome: 'Smart technology that clearly improves your business from day one',
      features: [
        'Chatbots that actually help customers and reduce your workload',
        'Predict what inventory you\'ll need to avoid stockouts',
        'Automatically organize and file important documents',
        'Personalize customer experiences to increase sales'
      ]
    }
  ];

  const investmentBreakdown = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Typical Investment',
      range: '$1K - $25K',
      description: 'Most projects fall in this range depending on scope and complexity',
      details: [
        'Simple automation: $500 - $2K',
        'Data integration: $500 - $10K', 
        'AI implementation: $1K - $10K',
        'Complete transformation: $10K - $50K+'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Payback Period',
      range: '6 - 18 months',
      description: 'How quickly the investment pays for itself through savings',
      details: [
        'Labor cost reduction: 3-6 months',
        'Efficiency improvements: 6-12 months',
        'Revenue growth: 12-18 months',
        'Competitive advantage: Ongoing'
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Long-term ROI',
      range: '300% - 800%',
      description: 'Return on investment over 3 years for most implementations',
      details: [
        'Year 1: Break even + 50-100% return',
        'Year 2: 200-400% cumulative return',
        'Year 3: 300-800% cumulative return',
        'Ongoing: Compounding benefits'
      ]
    }
  ];
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
              Our <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus on practical solutions that deliver measurable results for your business. 
              No technical jargon, just clear outcomes you can understand and track.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Key Outcome:</h3>
                    <p className="text-cyan-700 font-medium">{service.outcome}</p>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">What We Deliver:</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & ROI Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Investment & Returns
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent pricing and realistic expectations about what you can expect to invest and earn back.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {investmentBreakdown.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <div className="text-3xl font-bold text-cyan-600 mb-4">{item.range}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 border border-cyan-200 text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to See Your Specific Numbers?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Every business is different. Let's calculate the exact investment and expected returns for your specific situation.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Get Your Custom ROI Analysis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Common Questions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Questions We Hear All the Time
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Will this be too complicated for my team?",
                  answer: "Not at all. We design everything to be simple to use. If your team can use email and basic software, they can use what we build. Plus, we train everyone so they feel confident."
                },
                {
                  question: "What if something breaks or stops working?",
                  answer: "We build reliable systems and provide ongoing support. Most of our solutions are more stable than manual processes because they eliminate human error."
                },
                {
                  question: "Do I need to replace all my current software?",
                  answer: "Usually not. We typically work with what you already have and just connect things better. Replacing everything is expensive and disruptive—we avoid that when possible."
                },
                {
                  question: "How do I know this will actually save money?",
                  answer: "We calculate the savings before we start any work. You'll see exactly how much time and money you'll save, and we only recommend projects that clearly pay for themselves."
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
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We take a systematic approach to ensure every project delivers maximum value to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We study your current operations, identify bottlenecks, and map out opportunities for improvement.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'We create a clear roadmap with priorities, timelines, and expected outcomes that align with your goals.'
              },
              {
                step: '03',
                title: 'Implementation & Support',
                description: 'We build, test, and deploy solutions while training your team to ensure long-term success.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Stop Wasting Time on Tasks That Should Be Automatic
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              If any of these problems sound familiar, let's talk about how to fix them.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Get Your Free Time-Saving Analysis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;