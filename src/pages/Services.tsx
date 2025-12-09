import React from 'react';
import { motion } from 'framer-motion';
import { Database, LineChart, Target, ArrowRight, TrendingUp, DollarSign, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Engineering',
      tagline: 'Capture Reality. Build a Source of Truth.',
      description: 'Most business owners operate with scattered data across multiple systems that never quite agree. We consolidate your POS, accounting, CRM, and operations data into a single source of truth.',
      whenYouNeedThis: [
        'Your QuickBooks, POS, and spreadsheets show different revenue numbers',
        'Running a monthly report requires manual exports from five different systems',
        'You spend hours reconciling conflicting data sources',
        'You can\'t answer basic questions about profitability or trends quickly',
        'Your team doesn\'t trust the numbers'
      ],
      whatWeDeliver: [
        'Cloud data warehouse (Azure SQL, Snowflake, or similar)',
        'Automated ETL pipelines that pull data from all source systems',
        'Data quality rules and validation',
        'Unified data models for consistent reporting',
        'Documentation of data lineage and business definitions'
      ],
      caseStudy: {
        business: 'Regional HVAC Contractor',
        problem: 'ServiceTitan tracked jobs and scheduling. QuickBooks handled invoicing. Excel tracked job costs manually. When asked about profitability by customer or service type, the owner spent three days pulling data from all three sources and reconciling discrepancies.',
        solution: 'Built a cloud data warehouse that pulls data nightly from ServiceTitan and QuickBooks. Automated job costing calculations that previously happened in spreadsheets. Created a unified profitability model.',
        result: 'Owner can now see profitability by customer, service type, and technician in real time. Monthly financial close reduced from two weeks to three days. Data conflicts eliminated.'
      }
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: 'Business Analytics',
      tagline: 'Understand what will happen, not just what did',
      description: 'Historical reports tell you what happened. Statistical analysis tells you what will likely happen next. We apply forecasting models, risk analysis, and quantitative methods to help you anticipate revenue patterns, capacity constraints, and business risk before they affect your operations.',
      whenYouNeedThis: [
        'You need to forecast next quarter\'s revenue for planning',
        'You want to predict slow months to manage cash flow',
        'You need to understand job cost trends and profitability drivers',
        'You\'re trying to identify leading indicators of customer churn',
        'You want to model risk before making major investments'
      ],
      whatWeDeliver: [
        'Revenue and demand forecasting models',
        'Seasonality and trend analysis',
        'Job costing and profitability analysis by segment',
        'Customer lifetime value and churn risk scoring',
        'Scenario analysis for pricing and capacity',
        'Statistical reports with confidence intervals and assumptions documented'
      ],
      caseStudy: {
        business: 'Multi-Location Restaurant Group',
        problem: 'The owner wanted to open a fourth location but couldn\'t confidently forecast first-year revenue. Historical data existed, but each location opened under different conditions. Gut instinct said it would work, but banks wanted projections backed by data.',
        solution: 'Built statistical models using historical performance from existing locations, adjusted for market demographics, seasonality, and economic conditions. Ran Monte Carlo simulations to model revenue under different scenarios.',
        result: 'Owner secured financing with credible projections showing expected revenue range and break-even timeline. The location performed within 8% of forecasted revenue in year one.'
      }
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Decision Support',
      tagline: 'Model scenarios before you commit',
      description: 'Major business decisions—expanding locations, changing pricing, adding capacity—involve risk. We build scenario models that let you test different choices mathematically before committing resources. Think of it as a financial flight simulator for your business.',
      whenYouNeedThis: [
        'You\'re considering opening a new location or expanding capacity',
        'You need to evaluate pricing changes or promotional strategies',
        'You\'re deciding whether to hire additional staff',
        'You want to understand the financial impact of different growth scenarios',
        'You need to justify major investments to partners or lenders'
      ],
      whatWeDeliver: [
        'What-if analysis models for business decisions',
        'Financial impact projections with sensitivity analysis',
        'Risk quantification (best case, expected case, worst case)',
        'Break-even analysis and payback period calculations',
        'Scenario comparison frameworks',
        'Ongoing analytical partnership for strategic choices'
      ],
      caseStudy: {
        business: 'Specialty Manufacturing',
        problem: 'The company received a proposal for a large contract that would require hiring three additional employees and leasing new equipment. The revenue looked attractive, but the owner wasn\'t sure if the margins justified the fixed cost increases and capacity commitment.',
        solution: 'Built a scenario model that projected cash flow, profitability, and capacity utilization under different contract fulfillment scenarios. Modeled the financial impact if the contract ended early or if additional similar contracts could be secured.',
        result: 'Analysis showed the contract would break even in month 7, but only if equipment utilization stayed above 65%. The owner negotiated better contract terms and a longer commitment period before accepting. The business remained profitable when a similar competitor took the original deal and failed within a year.'
      }
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              We Do Data
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              We help owners stop guessing and start deciding with certainty. By turning disconnected data into clear insight and future-looking scenarios, we bring confidence to your most important financial and strategic choices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                <div>
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-slate-600 mb-6 italic">
                    {service.tagline}
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      You need this if:
                    </h3>
                    <ul className="space-y-2">
                      {service.whenYouNeedThis.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-slate-700 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-300">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      What we deliver:
                    </h3>
                    <ul className="space-y-2">
                      {service.whatWeDeliver.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-sm">
                          <span className="text-slate-700 mt-0.5 flex-shrink-0">—</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-slate-900 text-white rounded-xl p-8 lg:p-12">
                <div className="mb-6">
                  <div className="inline-block bg-white/10 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Case Study
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    {service.caseStudy.business}
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-3">
                      The Problem
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {service.caseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-3">
                      Our Solution
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {service.caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-3">
                      The Result
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {service.caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Integration Note */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-12 h-12 text-slate-900 mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              These services work together
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              You can't forecast accurately without clean, consolidated data. You can't model decisions without understanding historical patterns. Most engagements involve all three disciplines working together in stages.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We typically start with data engineering to establish a reliable foundation, then layer on statistical analysis and decision support as your capability matures.
            </p>
          </motion.div>
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
              What problem are you trying to solve?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tell us about your data situation and the decisions you need to make. We'll explain whether we can help and what that would look like.
            </p>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl inline-flex items-center group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
