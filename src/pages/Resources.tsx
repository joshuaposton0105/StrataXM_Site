import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight, CheckCircle, BarChart3, Wrench, Database, TrendingUp, Zap, Settings, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Automation', 'Data Engineering', 'Business Intelligence', 'Getting Started'];

  const educationalContent = [
    {
      id: 1,
      title: 'Understanding Business Process Automation',
      category: 'Automation',
      description: 'Automation doesn\'t mean replacing people—it means freeing them from repetitive work. Learn how to identify which tasks should be automated, what ROI to expect, and how automation scales with your business.',
      readTime: '8 min',
      icon: <Zap className="w-6 h-6" />,
      keyPoints: [
        'How to audit your workflows for automation opportunities',
        'Common automation wins for SMBs (invoicing, data entry, reporting)',
        'Understanding automation costs and ROI timelines',
        'When to automate vs. when to optimize manually'
      ]
    },
    {
      id: 2,
      title: 'What Data Engineering Actually Means for Your Business',
      category: 'Data Engineering',
      description: 'Data engineering is the foundation that makes everything else possible. If your data is scattered, inconsistent, or hard to access, you can\'t automate, analyze, or make good decisions.',
      readTime: '10 min',
      icon: <Database className="w-6 h-6" />,
      keyPoints: [
        'What a data pipeline is and why you need one',
        'How to connect disconnected systems (CRM, accounting, operations)',
        'Data quality: why clean data matters more than volume',
        'Building a single source of truth for your business'
      ]
    },
    {
      id: 3,
      title: 'Business Intelligence Without the Complexity',
      category: 'Business Intelligence',
      description: 'Business Intelligence means turning your data into decisions. Real-time dashboards, automated reports, and visual analytics—explained in terms that make sense for business owners.',
      readTime: '12 min',
      icon: <BarChart3 className="w-6 h-6" />,
      keyPoints: [
        'How to design dashboards that actually get used',
        'Which metrics matter for your business (and which don\'t)',
        'Power BI vs. spreadsheets: when to make the leap',
        'Getting your team to trust and use data'
      ]
    },
    {
      id: 4,
      title: 'Starting Your Modernization Journey',
      category: 'Getting Started',
      description: 'Modernization isn\'t all-or-nothing. Learn how to assess where you are, prioritize what matters, and build a roadmap that delivers value at every stage.',
      readTime: '15 min',
      icon: <TrendingUp className="w-6 h-6" />,
      keyPoints: [
        'How to assess your current systems and data readiness',
        'Building a phased modernization roadmap',
        'Starting small: quick wins vs. long-term transformation',
        'Project-based vs. fractional partnership models'
      ]
    },
    {
      id: 5,
      title: 'Integration Strategies for Small Businesses',
      category: 'Data Engineering',
      description: 'You don\'t need to replace your software—you need to connect it. Learn how system integration works, what\'s possible with your existing tools, and when replacement makes sense.',
      readTime: '9 min',
      icon: <Settings className="w-6 h-6" />,
      keyPoints: [
        'APIs and connectors: how systems talk to each other',
        'When to integrate vs. when to consolidate systems',
        'Common integration scenarios (QuickBooks, ServiceTitan, Shopify)',
        'Maintaining integrations as your business grows'
      ]
    },
    {
      id: 6,
      title: 'Preparing Your Business for AI',
      category: 'Getting Started',
      description: 'AI is only as good as your data. Before thinking about AI tools, you need clean, connected, and accessible data. Here\'s what AI-readiness actually means.',
      readTime: '11 min',
      icon: <Lightbulb className="w-6 h-6" />,
      keyPoints: [
        'Why AI requires unified, quality data first',
        'Practical AI use cases for SMBs (forecasting, customer insights)',
        'Understanding AI capabilities vs. AI hype',
        'Building the foundation before adding AI'
      ]
    }
  ];

  const realWorldScenarios = [
    {
      title: 'HVAC Contractor Automation',
      industry: 'Trade Services',
      challenge: 'Field technicians used paper work orders. Office staff re-entered everything into QuickBooks and ServiceTitan daily. Invoices took 2-3 days to generate.',
      solution: 'Connected field service app to accounting and scheduling software. Built automation that creates invoices automatically when work orders are completed.',
      outcome: 'Same-day invoicing, zero duplicate data entry, 8 hours/week saved, faster customer payments',
      icon: <Wrench className="w-8 h-8" />,
      category: 'Automation'
    },
    {
      title: 'Medical Practice Dashboard',
      industry: 'Healthcare',
      challenge: 'Patient data scattered across EHR, billing system, and intake forms. Monthly reports required days of manual Excel work. No visibility into daily operations.',
      solution: 'Built data pipeline connecting all systems. Created live dashboards showing patient volume, billing status, and capacity in real-time.',
      outcome: 'Daily operational visibility, compliance reports in minutes instead of days, better staffing decisions',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Business Intelligence'
    },
    {
      title: 'Fabrication Shop Data Integration',
      industry: 'Manufacturing',
      challenge: 'No real-time visibility into production costs, machine downtime, or inventory. Decisions based on outdated spreadsheets updated manually each week.',
      solution: 'Connected production tracking, inventory, and accounting systems. Built live dashboards showing costs, utilization, and inventory by job.',
      outcome: 'Real-time cost tracking, reduced downtime, improved inventory accuracy, data-driven pricing decisions',
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Data Engineering'
    }
  ];

  const conceptsExplained = [
    {
      term: 'Data Pipeline',
      explanation: 'A data pipeline automatically moves information from where it lives (your various systems) to where you need it (a database, dashboard, or another system). Think of it as plumbing for your business data.',
      example: 'When a customer places an order, the pipeline automatically updates your inventory system, notifies your fulfillment team, creates an invoice in accounting, and updates your sales dashboard.'
    },
    {
      term: 'API Integration',
      explanation: 'APIs (Application Programming Interfaces) let different software systems talk to each other. Instead of manually copying data between systems, an API integration does it automatically and instantly.',
      example: 'Your CRM and email marketing tool share customer data through an API. When someone becomes a customer in your CRM, they\'re automatically added to the right email list—no manual export/import.'
    },
    {
      term: 'Business Intelligence (BI)',
      explanation: 'BI tools turn your raw data into visual dashboards and reports that help you understand your business and make decisions. Instead of digging through spreadsheets, you see your key metrics in real-time.',
      example: 'A single dashboard shows your sales pipeline, cash flow, top customers, and inventory levels—all updating automatically as your business operates.'
    },
    {
      term: 'Workflow Automation',
      explanation: 'Workflow automation handles repetitive business processes without human intervention. You define the rules once, and the system executes them consistently every time.',
      example: 'When an invoice is overdue by 7 days, the system automatically sends a polite reminder email, logs the interaction in your CRM, and notifies your accounting team—no one has to remember to do it.'
    },
    {
      term: 'Single Source of Truth',
      explanation: 'A single source of truth means having one authoritative place for each piece of business data. No more wondering which spreadsheet has the "real" numbers or whose version is correct.',
      example: 'Customer information lives in one system (your CRM), and every other tool pulls from it. Update a customer\'s email once, and it updates everywhere automatically.'
    },
    {
      term: 'Data Quality',
      explanation: 'Data quality means your data is accurate, complete, consistent, and timely. Poor data quality leads to wrong decisions, wasted time, and lost trust in your systems.',
      example: 'Good data quality means no duplicate customer records, addresses are standardized and deliverable, and sales figures match across all your reports.'
    }
  ];

  const filteredContent = educationalContent.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.keyPoints.some(point => point.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const filteredScenarios = realWorldScenarios.filter(scenario => {
    const matchesFilter = activeFilter === 'All' || scenario.category === activeFilter;
    const matchesSearch = !searchTerm ||
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Learn About Modernization
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              Educational resources to help you understand automation, data engineering, and business intelligence—explained in plain English.
            </p>
            <p className="text-lg text-slate-500 mb-8">
              No downloads, no gates. Just useful information to help you make better decisions about your business systems.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition-colors duration-200 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 lg:top-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Understanding the Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dives into what these services actually mean for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {content.icon}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {content.category}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {content.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {content.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-slate-900 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{content.readTime} read</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      {filteredScenarios.length > 0 && (
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Real-World Examples
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                How automation, data engineering, and BI solve actual business problems
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                    {scenario.icon}
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {scenario.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {scenario.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {scenario.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {scenario.solution}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                      <p className="text-slate-700 font-medium text-sm">
                        {scenario.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Concepts Explained */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Key Concepts Explained
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Common terms you'll hear, explained in plain English with practical examples
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conceptsExplained.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {concept.term}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {concept.explanation}
                </p>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">Example:</strong> {concept.example}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to explore what's possible?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Now that you understand the concepts, let's talk about how they apply to your specific business, systems, and goals.
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

export default Resources;
