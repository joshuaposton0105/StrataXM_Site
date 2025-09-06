import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Zap, Brain, Shield, TrendingUp, CheckCircle, DollarSign, Clock, Users, Target } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Foundations',
      description: 'Transform scattered information into a unified, secure data foundation that powers your entire business.',
      problem: 'Your business data is trapped in spreadsheets, paper forms, and disconnected systems'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Data Flows',
      description: 'Connect every system in your business so data flows automatically where it needs to go, when it needs to be there.',
      problem: 'You\'re manually copying data between systems and losing time on data entry'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Insights & AI',
      description: 'Turn your unified data into predictive insights and AI-powered tools that help you make smarter decisions faster.',
      problem: 'You\'re making important decisions based on gut feeling instead of data'
    }
  ];

  const benefits = [
    'Build AI-ready data infrastructure',
    'Eliminate manual data entry forever',
    'Get real-time visibility into operations',
    'Make data-driven decisions with confidence'
  ];

  const outcomes = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      metric: '400%+',
      title: 'Average ROI',
      description: 'Return on investment from unified data infrastructure and AI insights within 24 months.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      metric: '25 Hours',
      title: 'Weekly Time Savings',
      description: 'Time teams get back each week when data flows automatically instead of manual entry.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '60%',
      title: 'Faster Decision Making',
      description: 'How much quicker leaders can respond to opportunities with real-time data dashboards.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: '5x',
      title: 'Data Capacity',
      description: 'Handle 5x more data and complexity without adding staff through automated infrastructure.'
    }
  ];

  const transformationStages = [
    {
      stage: 'Paper & Spreadsheets',
      title: 'From Manual to Digital',
      before: 'Paper forms, Excel files, manual data entry consuming hours daily',
      after: 'Digital workflows with automated data capture and validation',
      outcome: 'Save 15-20 hours per week on data entry alone'
    },
    {
      stage: 'Disconnected Systems',
      title: 'From Silos to Integration',
      before: 'Multiple software systems that don\'t talk to each other',
      after: 'Unified data platform where all systems share information seamlessly',
      outcome: 'Eliminate duplicate data entry and reduce errors by 90%'
    },
    {
      stage: 'Reactive Operations',
      title: 'From Guessing to Predicting',
      before: 'Making decisions based on outdated reports and gut feelings',
      after: 'AI-powered insights that predict trends and recommend actions',
      outcome: 'Increase revenue by 20-40% through data-driven decisions'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Build the{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                  Data Infrastructure
                </span>{' '}
                That Makes Your Business Run Smarter
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                StrataXM transforms scattered business data into a unified, intelligent foundation. 
                We automate data flows, eliminate manual processes, and deliver the insights 
                businesses need to compete and grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  Build Your Data Backbone Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:border-cyan-500 hover:text-cyan-600 flex items-center justify-center"
                >
                  View Our Approach
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full opacity-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Results Businesses Achieve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When you build proper data infrastructure, everything else becomes possible. 
              Here's what our partners typically see in their first year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {outcome.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{outcome.metric}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{outcome.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              See What Your Data Could Do
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Data Infrastructure Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every successful digital transformation follows the same path: <strong>Capture → Flow → Insights</strong>. 
              We build the data foundation that makes AI, automation, and modern business operations possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="mb-4">
                  <div className="text-sm text-red-600 font-medium mb-2">The Problem:</div>
                  <p className="text-sm text-slate-500 italic">{service.problem}</p>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center text-cyan-600 font-semibold text-lg hover:text-cyan-700 transition-colors duration-200 group"
            >
              Learn More About Our Data Infrastructure Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Transformation Journey */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Data Transformation Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most businesses are at one of these stages. We meet you where you are 
              and build the infrastructure to get you where you need to be.
            </p>
          </motion.div>

          <div className="space-y-12">
            {transformationStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-cyan-600 font-medium">{stage.stage}</div>
                      <h3 className="text-2xl font-bold text-slate-900">{stage.title}</h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                      <h4 className="font-semibold text-red-800 mb-3">Current State</h4>
                      <p className="text-red-700">{stage.before}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-3">Future State</h4>
                      <p className="text-green-700">{stage.after}</p>
                    </div>
                    <div className="bg-cyan-50 rounded-lg p-6 border border-cyan-100">
                      <h4 className="font-semibold text-cyan-800 mb-3">Business Impact</h4>
                      <p className="text-cyan-700 font-medium">{stage.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-600 mb-6">
              Ready to move to the next stage of data maturity?
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Data Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why StrataXM */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Businesses Choose StrataXM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another tech vendor. We're your long-term digital transformation partner, 
              built for small businesses by a small business, specializing in data infrastructure that enables comprehensive modernization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Trusted Local Partner',
                description: 'Louisiana-based and community-focused. We understand local business challenges and regulatory requirements.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Long-Term Partnership',
                description: 'We provide ongoing managed data infrastructure, not one-time projects. Your data backbone grows with your business.'
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Future-Ready Foundation',
                description: 'Every solution we build is designed to support AI and advanced analytics as your business matures.'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
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
              Ready to Build Your Data Infrastructure?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your scattered data into a unified, 
              AI-ready foundation that powers sustainable growth.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Schedule Your Data Infrastructure Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
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
              Your Data Is Your Competitive Advantage
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stop letting valuable business data sit trapped in spreadsheets and disconnected systems. 
              Build the infrastructure that makes AI and automation possible.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Make Your Business AI-Ready Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;