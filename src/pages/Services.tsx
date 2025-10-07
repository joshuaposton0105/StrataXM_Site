import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Database, Brain, Lightbulb, Code, Clock, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Integration & Automation',
      overview: 'Your business runs on multiple systems that don\'t talk to each other. We connect them and automate the repetitive work.',
      delivers: [
        'Connect QuickBooks, Shopify, Salesforce, HubSpot, and industry-specific tools',
        'Eliminate duplicate data entry across systems',
        'Automate order processing, customer updates, and reporting',
        'Build real-time sync between your apps',
        'Custom workflows tailored to how your team actually works'
      ],
      result: 'Save hours every week on manual tasks and eliminate costly data errors.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Infrastructure & Business Intelligence',
      overview: 'You have data everywhere, but can\'t get answers when you need them. We build a single source of truth and put insights at your fingertips.',
      delivers: [
        'Centralized data warehouse that pulls from all your systems',
        'Real-time dashboards for sales, operations, and finance',
        'Custom reports that answer your specific questions',
        'Mobile-friendly analytics you can check from anywhere',
        'Secure, governed data that meets compliance requirements'
      ],
      result: 'Make faster, better decisions with complete visibility into your business.'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Advanced Analytics',
      overview: 'Manual processes and gut decisions are holding you back. We embed AI into your workflows to predict problems and recommend actions.',
      delivers: [
        'Predictive models for demand forecasting and inventory optimization',
        'Intelligent document processing and data extraction',
        'Customer behavior analysis and personalized recommendations',
        'Anomaly detection for fraud or operational issues',
        'Natural language query interfaces for non-technical users'
      ],
      result: 'Turn your data into a competitive advantage with AI that works behind the scenes.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'IT Strategy & Digital Modernization',
      overview: 'Technology should enable your business, not slow it down. We assess your current systems and build a roadmap for practical, ROI-focused modernization.',
      delivers: [
        'Technology assessment and gap analysis',
        'Digital transformation roadmap aligned to business goals',
        'Cloud migration planning and execution (Azure, AWS)',
        'Legacy system modernization without disrupting operations',
        'Change management and team training'
      ],
      result: 'Get a clear plan for where to invest in technology and why.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Platform-Specific Development',
      overview: 'Off-the-shelf software doesn\'t always fit. We build custom solutions on enterprise platforms that scale with your business.',
      delivers: [
        'Power Platform apps (Power Apps, Power Automate, Power BI)',
        'Custom integrations using Azure Logic Apps and APIs',
        'SharePoint portals and workflow automation',
        'Low-code solutions that your team can maintain',
        'Enterprise-grade security and compliance built in'
      ],
      result: 'Get exactly what you need without the overhead of custom development from scratch.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Managed Data & Intelligence Services',
      overview: 'Most businesses don\'t need a full-time data team, but they need someone watching the systems. We become your outsourced intelligence team.',
      delivers: [
        'Monthly monitoring and maintenance of data infrastructure',
        'Proactive optimization and performance tuning',
        'New integrations and feature additions as you grow',
        'Regular strategy reviews and recommendations',
        'Dedicated support for your team\'s questions'
      ],
      result: 'All the benefits of a data team without the cost of hiring one full-time.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Continuous Optimization',
      overview: 'Your business evolves. We make sure your systems keep up through ongoing enhancements and refinements.',
      delivers: [
        'Quarterly business reviews to identify improvement opportunities',
        'Process refinement based on usage patterns',
        'Training for new team members and features',
        'Technology updates and security patches',
        'Expansion planning as you scale'
      ],
      result: 'Your systems stay relevant and deliver increasing value over time.'
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      challenge: 'Production data locked in spreadsheets, inventory counts off, no visibility into machine downtime.',
      solution: 'Connected shop floor systems to QuickBooks and built real-time production dashboards.',
      result: '25% efficiency increase, 60% less downtime, accurate inventory for the first time.'
    },
    {
      industry: 'Healthcare',
      challenge: 'Patient data scattered across EHR, billing software, and paper intake forms. Admin team drowning in duplicate entry.',
      solution: 'Automated patient data flow between systems and digitized intake forms.',
      result: '40% less admin time, better patient experience, faster billing.'
    },
    {
      industry: 'Trade Services',
      challenge: 'Field techs using paper, office team re-entering everything, customers calling for updates.',
      solution: 'Mobile field app connected to scheduling and billing, automated customer notifications.',
      result: 'Same-day invoicing, no more lost paperwork, customers know when techs arrive.'
    },
    {
      industry: 'Local Services',
      challenge: 'Growing fast but systems can\'t keep up. Spending more time managing software than serving customers.',
      solution: 'Integrated CRM, scheduling, and accounting into one streamlined workflow.',
      result: 'Handled 50% more volume without adding office staff.'
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
              We connect your systems, automate your workflows, and build intelligence into your business.
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              StrataXM helps small and midsized businesses modernize operations through integration, automation, and data intelligence.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Schedule a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="border-b border-slate-200 pb-16 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {service.overview}
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="bg-slate-50 rounded-xl p-8 mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">What We Deliver</h3>
                      <ul className="space-y-3">
                        {service.delivers.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 border border-cyan-200 rounded-lg p-6">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Result</h3>
                      <p className="text-slate-800 font-medium text-lg">{service.result}</p>
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
              How We Help Businesses Like Yours
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real examples from Louisiana businesses we work with.
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
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{useCase.industry}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-slate-700 leading-relaxed">{useCase.challenge}</p>
                  </div>
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="text-slate-700 font-medium">{useCase.solution}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-800 font-semibold">{useCase.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              We integrate, automate, and modernize your business — or become your full-time intelligence team.
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              Whether you need a one-time transformation or an ongoing partner to run your back-office intelligence, we're here to help.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Let's Modernize Your Business
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;