import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Download, Clock, Tag, ArrowRight, CheckCircle, BarChart3, Wrench, Database, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = ['All', 'Guides', 'Templates', 'Insights', 'Scenarios'];

  const featuredResources = [
    {
      id: 1,
      title: 'Automation Opportunities Audit',
      category: 'Guides',
      type: 'Self-Assessment',
      description: 'A practical worksheet to identify repetitive tasks in your organization that are prime candidates for automation. Includes scoring criteria and ROI estimation framework.',
      readTime: '15 min',
      format: 'PDF Workbook',
      icon: <CheckCircle className="w-6 h-6" />,
      tags: ['Automation', 'Strategy', 'Planning']
    },
    {
      id: 2,
      title: 'Data Readiness Checklist',
      category: 'Guides',
      type: 'Assessment Tool',
      description: 'Evaluate whether your systems and data are ready for Business Intelligence and AI. Covers data quality, integration readiness, security, and governance basics.',
      readTime: '20 min',
      format: 'Interactive PDF',
      icon: <Database className="w-6 h-6" />,
      tags: ['Data Engineering', 'BI', 'AI']
    },
    {
      id: 3,
      title: 'Dashboard Design Framework',
      category: 'Guides',
      type: 'Design Guide',
      description: 'Learn how to turn business KPIs into actionable visual dashboards. Includes layout principles, chart selection guide, and example wireframes for common business scenarios.',
      readTime: '25 min',
      format: 'PDF + Templates',
      icon: <BarChart3 className="w-6 h-6" />,
      tags: ['Business Intelligence', 'Reporting', 'Analytics']
    },
    {
      id: 4,
      title: 'Modernization Roadmap Template',
      category: 'Templates',
      type: 'Planning Tool',
      description: 'A step-by-step planning template for integrating disconnected systems. Map current state, prioritize integrations, and build a phased implementation plan.',
      readTime: '30 min',
      format: 'Excel Template',
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ['Integration', 'Strategy', 'Planning']
    },
    {
      id: 5,
      title: 'Project vs. Fractional Model Guide',
      category: 'Guides',
      type: 'Decision Framework',
      description: 'Understand the difference between one-time projects and ongoing fractional partnerships. Includes cost comparison, use case examples, and decision criteria.',
      readTime: '12 min',
      format: 'PDF Guide',
      icon: <Users className="w-6 h-6" />,
      tags: ['Strategy', 'Partnership', 'Planning']
    }
  ];

  const quickReads = [
    {
      title: '5 Workflows Every SMB Should Automate',
      excerpt: 'Invoice processing, customer onboarding, inventory alerts, expense approvals, and status reporting—these five workflows deliver immediate ROI for most businesses.',
      readTime: '6 min',
      stat: '70% of SMBs waste 5+ hours/week on these tasks',
      category: 'Insights'
    },
    {
      title: 'What a Data Pipeline Actually Does (In Plain English)',
      excerpt: 'No jargon. A data pipeline moves information from where it lives to where you need it, automatically. Here\'s how it works and why it matters for your business.',
      readTime: '5 min',
      stat: 'Manual data transfer causes 60% of reporting errors',
      category: 'Insights'
    },
    {
      title: 'How to Know If You\'re Ready for Power BI',
      excerpt: 'Power BI is powerful, but it\'s not for everyone—yet. Three clear indicators that your business is ready to invest in real-time dashboards and analytics.',
      readTime: '8 min',
      stat: 'Businesses using BI make decisions 5x faster',
      category: 'Insights'
    },
    {
      title: 'Why Disconnected Systems Are the Silent Profit Killer',
      excerpt: 'When your CRM, accounting, and operations tools don\'t talk, you lose more than time. You lose visibility, accuracy, and ultimately, money.',
      readTime: '7 min',
      stat: '42% of SMBs report duplicate data entry across systems',
      category: 'Insights'
    }
  ];

  const toolsTemplates = [
    {
      title: 'System Inventory Tracker',
      description: 'Google Sheet template to catalog all your software tools, who uses them, what data they contain, and how they connect (or don\'t).',
      format: 'Google Sheets',
      icon: <FileText className="w-5 h-5" />,
      category: 'Templates'
    },
    {
      title: 'KPI Mapping Worksheet',
      description: 'Identify the metrics that actually matter for your business and map them to data sources. Essential prep work before building dashboards.',
      format: 'Excel Template',
      icon: <FileText className="w-5 h-5" />,
      category: 'Templates'
    },
    {
      title: 'Power Automate Workflow Map Template',
      description: 'Visual template for planning automation workflows before you build them. Map triggers, actions, conditions, and approvals.',
      format: 'PowerPoint',
      icon: <FileText className="w-5 h-5" />,
      category: 'Templates'
    },
    {
      title: 'SQL Starter Queries for Small Datasets',
      description: 'Copy-paste SQL queries for common business questions—sales by month, top customers, inventory status. Great for learning or quick analysis.',
      format: 'SQL File + Guide',
      icon: <FileText className="w-5 h-5" />,
      category: 'Templates'
    }
  ];

  const caseSnapshots = [
    {
      title: 'Contractor Automation Pack',
      industry: 'Trade Services',
      scenario: 'Field technicians were using paper work orders. Office staff re-entered everything into QuickBooks and scheduling software.',
      solution: 'Connected field work to scheduling and billing automatically',
      outcome: 'Same-day invoicing, zero lost paperwork, 60% less admin time',
      icon: <Wrench className="w-8 h-8" />,
      category: 'Scenarios'
    },
    {
      title: 'Medical Group Dashboard',
      industry: 'Healthcare',
      scenario: 'Patient data scattered across EHR, billing system, and intake forms. Monthly reports took days of manual work.',
      solution: 'Centralized patient data with automated reporting dashboards',
      outcome: 'Real-time visibility into operations, compliance reporting in minutes',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Scenarios'
    },
    {
      title: 'Fabrication Shop Data Flow',
      industry: 'Manufacturing',
      scenario: 'No visibility into real-time production costs, machine downtime, or inventory levels. Decisions based on outdated spreadsheets.',
      solution: 'Built live dashboards tracking costs, downtime, and inventory',
      outcome: 'Reduced downtime, improved inventory accuracy, cut production costs',
      icon: <TrendingUp className="w-8 h-8" />,
      category: 'Scenarios'
    }
  ];

  const allResources = [
    ...featuredResources.map(r => ({ ...r, categoryType: r.category })),
    ...quickReads.map(r => ({ ...r, categoryType: r.category })),
    ...toolsTemplates.map(r => ({ ...r, categoryType: r.category })),
    ...caseSnapshots.map(r => ({ ...r, categoryType: r.category }))
  ];

  const filteredResources = allResources.filter(resource => {
    const matchesFilter = activeFilter === 'All' || resource.categoryType === activeFilter;
    const matchesSearch = !searchTerm ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

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
              Resources for Modernizing Your Business
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed">
              Practical guides, templates, and insights to help you understand and plan your digital transformation journey.
            </p>
            <p className="text-lg text-slate-500 mb-8">
              No sales pitch. Just useful material to help you make better decisions about automation, data, and analytics.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search guides, templates, insights..."
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

      {/* Featured Guides & Playbooks */}
      {(activeFilter === 'All' || activeFilter === 'Guides') && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Featured Guides & Playbooks
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                In-depth resources to help you assess, plan, and execute your modernization strategy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.filter(resource =>
                !searchTerm ||
                resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
              ).map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {resource.title}
                    </h3>
                    <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {resource.type}
                    </span>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{resource.format}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-50 text-slate-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-slate-800 flex items-center justify-center gap-2 group">
                      <Download className="w-5 h-5" />
                      Download Guide
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quick Learning Hub */}
      {(activeFilter === 'All' || activeFilter === 'Insights') && (
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Quick Learning Hub
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Short reads that explain key concepts in plain English.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quickReads.filter(article =>
                !searchTerm ||
                article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime} read</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="bg-slate-100 border-l-4 border-slate-900 p-4 mb-4">
                    <p className="text-sm font-semibold text-slate-900">
                      {article.stat}
                    </p>
                  </div>
                  <button className="text-slate-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tools & Templates Library */}
      {(activeFilter === 'All' || activeFilter === 'Templates') && (
        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Tools & Templates Library
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Practical downloads you can use today to start planning and organizing your modernization efforts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolsTemplates.filter(tool =>
                !searchTerm ||
                tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-50 rounded-xl border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                      {tool.icon}
                    </div>
                    <span className="bg-white border border-slate-300 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tool.format}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <button className="text-slate-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-200">
                    <Download className="w-5 h-5" />
                    Download Template
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Snapshots / Scenarios */}
      {(activeFilter === 'All' || activeFilter === 'Scenarios') && (
        <section className="py-20 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Case Snapshots
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real-world scenarios showing how automation and data integration solve common business challenges.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseSnapshots.filter(snapshot =>
                !searchTerm ||
                snapshot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                snapshot.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                snapshot.scenario.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((snapshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-slate-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                    {snapshot.icon}
                  </div>
                  <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {snapshot.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {snapshot.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Before</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {snapshot.scenario}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {snapshot.solution}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Outcome</h4>
                      <p className="text-slate-700 font-medium text-sm">
                        {snapshot.outcome}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ask an Expert CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Not sure where to start?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              These resources are a starting point. Let's look at your specific workflows, systems, and goals together. We'll help you identify what makes sense for your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl inline-flex items-center group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="text-slate-400 mt-6 text-sm">
              Free 30-minute modernization review. No obligations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
