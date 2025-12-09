import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Target, CheckCircle, Database, BarChart3, LineChart, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Consolidation & Trust',
      description: 'Connect your scattered systems into one reliable source. Your QuickBooks, POS, CRM, and spreadsheets finally agree—no more conflicting numbers, no more manual reconciliation.',
      capabilities: [
        'Connect all your business systems into one place',
        'Clean up messy, conflicting data',
        'Build automated reporting you can actually trust',
        'Create a single version of the truth for your business'
      ]
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: 'Profit & Performance Analytics',
      description: 'See what\'s actually driving your business. Understand true profitability by customer, service, or product. Know where you\'re making money and where you\'re not.',
      capabilities: [
        'Revenue and demand forecasting',
        'True job costing and profit margin analysis',
        'Customer and product profitability breakdown',
        'Trend analysis and performance tracking'
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Business Decision Modeling',
      description: 'Evaluate major decisions before you commit. Model expansion scenarios, pricing changes, and contract opportunities. Understand the financial impact before you sign.',
      capabilities: [
        'Forecast the financial impact of expansion',
        'Evaluate contract and pricing opportunities',
        'Model "what-if" scenarios for major decisions',
        'Ongoing advisory partnership as you grow'
      ]
    }
  ];

  const maturityLadder = [
    {
      stage: 'Clean Data',
      description: 'Your data lives in disconnected systems. Reports require manual work. Different sources show different numbers.',
      goal: 'One reliable source for all your business data',
      icon: <Database className="w-6 h-6" />
    },
    {
      stage: 'Clear Visibility',
      description: 'Data flows automatically into dashboards you can trust. You see what happened, clearly and accurately.',
      goal: 'Know exactly what\'s going on in your business',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      stage: 'Revenue Forecasting',
      description: 'Project future revenue based on real patterns. You understand what\'s likely coming instead of guessing.',
      goal: 'Plan cash flow and capacity with confidence',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      stage: 'Decision Confidence',
      description: 'Model major decisions before you commit. You evaluate expansion, pricing, and contracts with real numbers.',
      goal: 'Make big choices backed by data, not hope',
      icon: <Target className="w-6 h-6" />
    }
  ];

  const forYou = [
    'Your QuickBooks, POS, and spreadsheets show different numbers',
    'You need to forecast revenue or predict slow months',
    'You want to understand what\'s really driving profit',
    'You\'re considering expansion and need to evaluate the risk',
    'You want ongoing support, not just a one-time report'
  ];

  const notForYou = [
    'You need marketing analytics or ad campaign tracking',
    'You want process automation without fixing your data first',
    'You need IT support, managed services, or software development',
    'You only want dashboards without someone to explain what they mean',
    'You expect a consultant who delivers a presentation and leaves'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 pt-20 lg:pt-32 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Turn messy data into<br />clear answers about your business
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              StrataXM helps small business owners understand what's really driving profit, forecast revenue with confidence, and make better decisions about expansion, pricing, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl inline-flex items-center group"
              >
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              What We Do
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed">
                We connect your scattered systems into one source of truth, clean up conflicting numbers, and build dashboards that actually explain what's happening in your business. Then we help you forecast revenue, understand true profitability, and evaluate major decisions before you commit. Think of us as the analytical team you don't have in-house—we make your data trustworthy and useful for running your business smarter.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-slate-700 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maturity Ladder */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We build capability in stages. Each level creates value while establishing the foundation for the next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maturityLadder.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {stage.icon}
                  </div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                    Stage {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {stage.stage}
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {stage.description}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-slate-900">
                    Goal: {stage.goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're For */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Who We Work With
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-50 rounded-xl p-8 border border-slate-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-slate-900" />
                <h3 className="text-2xl font-bold text-slate-900">
                  You're a good fit if:
                </h3>
              </div>
              <ul className="space-y-3">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border-2 border-slate-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-slate-700" />
                <h3 className="text-2xl font-bold text-slate-900">
                  We're not the right fit if:
                </h3>
              </div>
              <ul className="space-y-3">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-slate-500 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to trust your numbers?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We start by understanding your systems, your data, and the decisions you need to make. You'll get a clear plan for what needs to happen and why it matters.
            </p>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl inline-flex items-center group"
            >
              Schedule an Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
