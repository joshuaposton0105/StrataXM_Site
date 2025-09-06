import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Brain, Shield, Target, ArrowRight, Calculator, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Foundations',
      subtitle: 'Capture → Centralize → Secure',
      description: 'Transform scattered business information into a unified, secure data foundation that powers everything else.',
      outcome: 'Eliminate data silos and create a single source of truth for your business',
      features: [
        'Digitize paper-based processes and forms',
        'Centralize data in Microsoft Dataverse or Azure SQL',
        'Implement data governance and security standards',
        'Create standardized data models across your business',
        'Establish backup and disaster recovery protocols'
      ],
      technologies: ['Microsoft Dataverse', 'Azure SQL Database', 'Power Platform', 'SharePoint'],
      timeline: '4-8 weeks',
      investment: '$2K - $15K'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Data Flows',
      subtitle: 'Connect → Automate → Monitor',
      description: 'Build intelligent pipelines that move data automatically between all your business systems.',
      outcome: 'Eliminate manual data entry and ensure information flows where it needs to go',
      features: [
        'Connect EHR, CRM, accounting, and cloud systems',
        'Build ETL/ELT pipelines with Logic Apps and Azure Data Factory',
        'Implement real-time data synchronization',
        'Set up monitoring and compliance tracking',
        'Create custom APIs for unique integrations'
      ],
      technologies: ['Azure Logic Apps', 'Azure Data Factory', 'Power Automate', 'Custom APIs'],
      timeline: '6-12 weeks',
      investment: '$5K - $25K'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Insights & AI',
      subtitle: 'Analyze → Predict → Optimize',
      description: 'Transform your unified data into actionable insights and AI-powered tools that drive better decisions.',
      outcome: 'Make data-driven decisions with predictive insights and automated intelligence',
      features: [
        'Build Power BI dashboards for real-time visibility',
        'Implement predictive models and anomaly detection',
        'Deploy natural language processing for document analysis',
        'Create AI-powered customer insights and recommendations',
        'Embed AI tools directly into your workflows'
      ],
      technologies: ['Power BI', 'Azure AI Services', 'Azure Machine Learning', 'Cognitive Services'],
      timeline: '8-16 weeks',
      investment: '$10K - $50K'
    }
  ];

  const investmentBreakdown = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Typical Investment',
      range: '$5K - $75K',
      description: 'Most data infrastructure projects based on scope and complexity',
      details: [
        'Data foundations: $2K - $15K',
        'Automated flows: $5K - $25K', 
        'AI & insights: $10K - $50K',
        'Complete transformation: $25K - $100K+'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Implementation Timeline',
      range: '3 - 6 months',
      description: 'Phased approach with value delivered at each stage',
      details: [
        'Phase 1 (Foundations): 4-8 weeks',
        'Phase 2 (Data Flows): 6-12 weeks',
        'Phase 3 (AI & Insights): 8-16 weeks',
        'Ongoing: Managed infrastructure'
      ]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Long-term ROI',
      range: '400% - 1200%',
      description: 'Return on investment over 3 years for most implementations',
      details: [
        'Year 1: Break even + 100-200% return',
        'Year 2: 300-600% cumulative return',
        'Year 3: 400-1200% cumulative return',
        'Ongoing: Compounding data value'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      challenge: 'Patient data scattered across EHR, billing, and paper forms',
      solution: 'Unified patient data platform with automated workflows',
      result: 'Reduced admin time by 40%, improved patient care coordination'
    },
    {
      industry: 'Manufacturing',
      challenge: 'Production data trapped in spreadsheets and legacy systems',
      solution: 'Real-time production dashboard with predictive maintenance',
      result: 'Increased efficiency by 25%, reduced downtime by 60%'
    },
    {
      industry: 'Financial Services',
      challenge: 'Manual compliance reporting and disconnected client data',
      solution: 'Automated compliance workflows with integrated CRM',
      result: 'Cut reporting time by 80%, improved client relationship management'
    },
    {
      industry: 'Professional Services',
      challenge: 'Project data in multiple tools, difficult to track profitability',
      solution: 'Integrated project management with real-time financial dashboards',
      result: 'Improved project margins by 30%, better resource allocation'
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
              Data Infrastructure <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              We build the data backbone that makes AI and automation possible. 
              Every service follows our proven methodology: <strong>Capture → Flow → Insights</strong>.
            </p>
            <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg border border-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Managed Infrastructure Approach</h3>
              <p className="text-slate-600">
                Unlike one-time projects, we provide ongoing managed data infrastructure. 
                Your data backbone grows and evolves with your business through monthly retainer partnerships.
              </p>
            </div>
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <div className="mb-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-cyan-600 font-semibold">{service.subtitle}</p>
                  </div>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-cyan-50 border border-cyan-100 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Key Outcome:</h3>
                    <p className="text-cyan-700 font-medium">{service.outcome}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Timeline:</h4>
                      <p className="text-slate-600">{service.timeline}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Investment:</h4>
                      <p className="text-slate-600">{service.investment}</p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6">What We Deliver:</h3>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-slate-100 pt-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Core Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how we've helped businesses across Louisiana transform their data infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{useCase.industry}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-red-600 mb-2">Challenge:</h4>
                    <p className="text-slate-600">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-600 mb-2">Solution:</h4>
                    <p className="text-slate-600">{useCase.solution}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h4 className="text-sm font-medium text-green-800 mb-2">Result:</h4>
                    <p className="text-green-700 font-medium">{useCase.result}</p>
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
              Transparent pricing and realistic expectations for data infrastructure investments.
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
              Ready to Build Your Data Infrastructure?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Let's discuss your specific data challenges and create a custom roadmap 
              for transforming your business infrastructure.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Get Your Data Infrastructure Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Managed Infrastructure Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Ongoing Managed Infrastructure
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We don't just build and leave. We provide ongoing managed data infrastructure 
              to ensure your systems grow and evolve with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Monitoring & Maintenance',
                description: 'Continuous monitoring of data flows, performance optimization, and proactive maintenance.',
                features: ['24/7 system monitoring', 'Performance optimization', 'Security updates', 'Backup verification']
              },
              {
                title: 'Growth & Scaling',
                description: 'Add new data sources, expand integrations, and scale infrastructure as your business grows.',
                features: ['New system integrations', 'Capacity planning', 'Feature enhancements', 'User training']
              },
              {
                title: 'Strategic Partnership',
                description: 'Regular reviews, strategic planning, and guidance on leveraging data for competitive advantage.',
                features: ['Monthly strategy reviews', 'ROI analysis', 'Technology roadmapping', 'Best practice guidance']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Transform Your Data Into Your Competitive Advantage
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Stop letting valuable business data sit trapped in silos. 
              Build the infrastructure that makes AI and automation possible.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Building Your Data Infrastructure
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;