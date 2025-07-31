import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, Brain, Settings, CheckCircle, DollarSign, Clock, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Stop Doing Repetitive Work',
      description: 'We set up systems that handle your routine tasks automatically—like processing orders, sending follow-up emails, or updating spreadsheets.',
      problem: 'Your team wastes hours each day on the same boring tasks'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Find Information Instantly',
      description: 'Instead of hunting through multiple systems to answer simple questions, get all your business information in one place.',
      problem: 'You can\'t get a straight answer about your business without checking 5 different places'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Let Technology Handle the Thinking',
      description: 'We help you use smart technology to make better decisions, predict what customers want, and handle complex tasks without human error.',
      problem: 'You\'re making important decisions based on guesswork instead of data'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Make Your Systems Talk to Each Other',
      description: 'Stop copying information between different software. We connect your tools so data flows automatically where it needs to go.',
      problem: 'You\'re constantly copying and pasting between different programs'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Make data-driven decisions faster',
    'Scale operations without scaling headcount',
    'Stay ahead of competitors with AI'
  ];

  const outcomes = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      metric: '$50K+',
      title: 'Average Annual Savings',
      description: 'Typical savings businesses achieve in the first year through reduced labor costs and improved efficiency.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      metric: '15 Hours',
      title: 'Weekly Time Savings',
      description: 'Time teams typically get back each week to focus on revenue-generating activities.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: '40%',
      title: 'Faster Decision Making',
      description: 'How much quicker businesses can respond to opportunities with unified, real-time data.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: '3x',
      title: 'Capacity Increase',
      description: 'Handle 3x more customers without hiring additional staff through smart automation.'
    }
  ];

  const beforeAfter = {
    before: [
      'Spending hours on repetitive tasks',
      'Making decisions based on gut feeling',
      'Struggling to keep up with demand',
      'Data scattered across multiple systems',
      'Team overwhelmed and burning out'
    ],
    after: [
      'Systems handle routine work automatically',
      'Clear dashboards show exactly what\'s working',
      'Easily scale without hiring more people',
      'All business data in one reliable place',
      'Team focused on high-value strategic work'
    ]
  };
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
                Stop Wasting Time on Tasks That{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                  Should Run Themselves
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                If your team spends hours each day on repetitive work, hunting for information across different systems, 
                or manually doing things that feel like they should be automatic—we can fix that.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center group"
                >
                  See How Much Time You Could Save
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:border-cyan-500 hover:text-cyan-600 flex items-center justify-center"
                >
                  View Services
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

      {/* Outcome Value Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Results Businesses Like Yours Achieve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's what happens when businesses stop doing everything manually and start working smarter.
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
              Find Out What You Could Save
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
              How We Help Your Business Grow
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We focus on practical solutions that deliver real results, not buzzwords.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="text-sm text-red-600 font-medium mb-2">Problem:</div>
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
              Learn More About Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Does This Sound Like Your Business?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here are some common situations where we've helped businesses save time and money.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'The Overwhelmed Team',
                scenario: 'Your staff spends most of their day on data entry, sending the same emails over and over, or manually tracking orders through your system.',
                solution: 'We automate these tasks so your team can focus on serving customers and growing the business.',
                savings: 'Typical savings: 15-20 hours per week'
              },
              {
                title: 'The Information Hunt',
                scenario: 'When someone asks "How are we doing this month?" you have to check your sales system, accounting software, and three spreadsheets to get an answer.',
                solution: 'We create one dashboard that shows you everything important about your business in real-time.',
                savings: 'Typical savings: 5-10 hours per week'
              },
              {
                title: 'The Growing Pains',
                scenario: 'You\'re getting more customers, but you can\'t hire fast enough. Your current processes don\'t scale, and quality is starting to slip.',
                solution: 'We help you handle 2-3x more volume with your current team through smart automation.',
                savings: 'Typical savings: $50,000+ in hiring costs'
              }
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{example.title}</h3>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-red-600 mb-2">The Problem:</h4>
                  <p className="text-slate-600 mb-4">{example.scenario}</p>
                  <h4 className="text-sm font-medium text-green-600 mb-2">Our Solution:</h4>
                  <p className="text-slate-600 mb-4">{example.solution}</p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                  <p className="text-sm text-cyan-800 font-medium">{example.savings}</p>
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
              Recognize your business in any of these scenarios?
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Let's Talk About Your Specific Situation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              The Transformation Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See the transformation businesses experience when they modernize their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 rounded-2xl p-8 border border-red-100"
            >
              <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
                Before: The Daily Struggle
              </h3>
              <ul className="space-y-4">
                {beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 rounded-2xl p-8 border border-green-100"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                After: Working Smarter
              </h3>
              <ul className="space-y-4">
                {beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-600 mb-6">
              Tired of the daily struggle? Ready to work smarter instead of harder?
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Show Me How to Fix These Problems
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              What Could You Save?
            </h2>
            <p className="text-xl text-slate-600">
              Here's a simple way to estimate your potential return on investment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-slate-900">20 hours</div>
                <p className="text-slate-600">Manual work per week</p>
                <div className="text-sm text-slate-500">× $25/hour average cost</div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-cyan-500" />
              </div>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-green-600">$26,000</div>
                <p className="text-slate-600">Annual savings potential</p>
                <div className="text-sm text-slate-500">From automation alone</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-cyan-50 rounded-lg border border-cyan-100">
              <p className="text-center text-slate-700 mb-4">
                <strong>Plus additional benefits:</strong> Better decision-making, improved customer experience, 
                reduced errors, and the ability to scale without proportional hiring.
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center group"
                >
                  See What This Could Save You
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
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
              Stop Wasting Time on Work That Should Be Automatic
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              If you're tired of your team spending all day on repetitive tasks instead of growing your business, let's talk.
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

export default Home;