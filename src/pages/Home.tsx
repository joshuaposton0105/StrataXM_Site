import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Zap, Brain, Shield, CheckCircle, Users, Target, TrendingUp, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Foundations',
      subtitle: 'Capture → Centralize → Secure',
      description: 'Transform scattered business information into a unified, secure data foundation that enables your complete digital transformation.',
      features: [
        'Digitize paper-based processes',
        'Centralize data in secure cloud platforms',
        'Implement governance standards',
        'Create standardized data models'
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Data Flows',
      subtitle: 'Connect → Automate → Monitor',
      description: 'Build intelligent pipelines that move data automatically between all your business systems, driving operational transformation.',
      features: [
        'Connect EHR, CRM, and accounting systems',
        'Build automated ETL/ELT pipelines',
        'Implement real-time synchronization',
        'Set up monitoring and compliance'
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Insights & AI',
      subtitle: 'Analyze → Predict → Optimize',
      description: 'Complete your digital transformation with AI-powered insights and intelligent automation that drive better decisions.',
      features: [
        'Build real-time dashboards',
        'Implement predictive models',
        'Deploy natural language processing',
        'Create AI-powered recommendations'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise-Grade Infrastructure',
      description: 'We build on Microsoft Azure and other proven enterprise platforms that scale with your business and ensure data security.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Long-Term Partnership',
      description: 'We\'re your ongoing digital transformation partner, not a one-time project vendor. We grow with your business.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Business-First Approach',
      description: 'We explain everything in business terms and focus on ROI, not just cool technology. You\'ll always understand the value.'
    }
  ];

  const stats = [
    { number: '70-90%', label: 'Reduction in manual data entry' },
    { number: '50-80%', label: 'Faster access to business insights' },
    { number: '12-24mo', label: 'Typical ROI payback period' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-cyan-50 pt-20 lg:pt-32 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-7xl font-bold text-slate-900 mb-6">
              Make Your Systems<span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent"> Talk</span> 
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              StrataXM transforms scattered business data into unified, intelligent foundations that enable comprehensive modernization and make Louisiana businesses AI-ready and competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
              >
                Get Your Free Digital Transformation Assessment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:border-cyan-500 hover:text-cyan-600 inline-flex items-center"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto shadow-lg border border-slate-100">
              <p className="text-slate-600 mb-4">
                <strong>Our proven methodology:</strong> Capture scattered data → Flow it intelligently → Generate insights that drive comprehensive modernization
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-medium">Microsoft Azure</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-medium">Power Platform</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-medium">AI & Machine Learning</span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-medium">Enterprise Integration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Digital Transformation Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven three-phase methodology that transforms scattered business data into the foundation for comprehensive modernization and AI readiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-cyan-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
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
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Learn More About Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose StrataXM */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Louisiana Businesses Choose StrataXM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another tech vendor. We're your comprehensive digital transformation partner, building the data backbone that makes AI and automation possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
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
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can build the data infrastructure that enables your complete digital transformation and makes your business AI-ready.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Digital Transformation Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Digital Transformation Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's what businesses typically achieve when they invest in proper data infrastructure and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <p className="text-lg text-slate-600 font-medium">
                  {stat.label}
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
              Ready to Build Your Digital Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the Louisiana businesses that are already transforming their operations with enterprise-grade data infrastructure and comprehensive digital transformation.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Digital Transformation Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;