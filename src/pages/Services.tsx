import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Brain, Settings, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'We Automate Your Daily Grind',
      description: 'Tired of your team drowning in repetitive tasks? We build systems that handle the boring stuff automatically, so your people can focus on what actually grows your business.',
      outcome: 'Free up 60-80% of your team\'s time for high-value work',
      features: [
        'Emails and documents process themselves',
        'Orders flow from sale to fulfillment without manual steps',
        'New customers get onboarded while you sleep',
        'Reports appear in your inbox every morning, ready to go'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'We Turn Data Chaos Into Clarity',
      description: 'Sick of hunting through five different systems to answer one simple question? We pull all your scattered data together so you can actually see what\'s happening in your business.',
      outcome: 'Make decisions with confidence, not guesswork',
      features: [
        'One dashboard shows everything that matters',
        'Customer history from every touchpoint in one place',
        'Financial performance updates in real-time',
        'Clean, accurate data you can actually trust'
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'We Cut Through the AI Hype',
      description: 'Everyone\'s talking about AI, but what can it actually do for your business? We separate the useful from the useless and show you exactly where AI will move the needle.',
      outcome: 'Invest in AI that pays for itself, not expensive experiments',
      features: [
        'Clear roadmap of where AI helps (and where it doesn\'t)',
        'Honest assessment of what you\'re ready for right now',
        'Real numbers on costs, timeline, and expected returns',
        'Risk-free way to test AI before committing big budgets'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'We Make Your Tools Talk to Each Other',
      description: 'Frustrated by copying data between systems all day? We connect your existing tools so information flows automatically where it needs to go.',
      outcome: 'Stop being a human copy-paste machine',
      features: [
        'Sales data flows straight into your accounting system',
        'Marketing campaigns sync with your CRM automatically',
        'Team communication stays in sync across all platforms',
        'Custom connections for your unique tool stack'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'We Deploy AI That Actually Works',
      description: 'Ready to put AI to work? We build practical AI solutions that solve real problems and deliver measurable results—no science experiments or empty promises.',
      outcome: 'AI that pays for itself from day one',
      features: [
        'Smart chatbots that actually help customers (and reduce support tickets)',
        'Inventory predictions that prevent stockouts and overstock',
        'Documents that read and organize themselves',
        'Personalized customer experiences that drive more sales'
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss which of these services would have the biggest impact on your business.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;