import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cog, Database, BarChart3, CheckCircle, GitBranch, Users, Code, Zap, RefreshCw, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const pillars = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Automation',
      description: 'Eliminate repetitive work and connect your systems so data flows where it needs to go, without manual intervention.',
      features: [
        'Replace manual data entry and repetitive tasks',
        'Connect disconnected systems and eliminate data silos',
        'Automate approvals, alerts, and scheduled workflows',
        'Build intelligent document processing pipelines',
        'Sync data between systems in real-time',
        'Create self-service portals for customers and staff'
      ],
      poweredBy: 'Power Automate, Azure Logic Apps, Custom APIs'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Engineering',
      description: 'Build the infrastructure that turns raw data into a reliable, usable asset your business can actually trust and act on.',
      features: [
        'Design scalable databases and data warehouses',
        'Build ETL/ELT pipelines that run on schedule or in real-time',
        'Integrate APIs, files, legacy systems, and cloud platforms',
        'Implement data quality checks and monitoring',
        'Create reusable data models for reporting and AI',
        'Establish security, backup, and governance standards'
      ],
      poweredBy: 'Azure Data Factory, SQL Server, Azure Synapse, Databricks'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Surface insights that matter through dashboards, reports, and analytics your team will actually use to make decisions.',
      features: [
        'Build interactive dashboards for daily operations',
        'Design executive reporting for KPIs and trends',
        'Enable self-service analytics for business users',
        'Create automated report distribution and alerts',
        'Implement predictive models and forecasting',
        'Integrate AI-powered recommendations into workflows'
      ],
      poweredBy: 'Power BI, Tableau, Azure Machine Learning'
    }
  ];

  const workPhases = [
    {
      title: 'Discovery Sprint',
      duration: '1–2 weeks',
      description: 'We start with a focused assessment to understand your systems, pain points, and goals. You get a roadmap of what to build, in what order, and why. No fluff, no 100-page decks.',
      icon: <GitBranch className="w-6 h-6" />
    },
    {
      title: 'Foundation Project',
      duration: '8–12 weeks',
      description: 'We build your first high-impact solution. This proves the model works, delivers measurable ROI, and creates reusable infrastructure for future improvements. You see results, not just promises.',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Fractional Partnership',
      duration: 'Ongoing',
      description: 'After the foundation is live, we become your fractional data and automation team. We maintain what we built, add new capabilities as your needs evolve, and act as a strategic partner as you scale.',
      icon: <RefreshCw className="w-6 h-6" />
    }
  ];

  const differentiators = [
    {
      icon: <GitBranch className="w-5 h-5" />,
      text: 'Integration-first mindset — we connect what you already have, not rip and replace'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Built for SMBs — you get enterprise capabilities without enterprise budgets or bureaucracy'
    },
    {
      icon: <Code className="w-5 h-5" />,
      text: 'Microsoft ecosystem expertise — Azure, Power Platform, Dynamics, SQL Server'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: 'Reusable frameworks — every project leaves you with infrastructure you can build on'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Local partnership in Louisiana — responsive, accessible, invested in your success'
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      text: 'Practical AI readiness — we build the data foundation AI needs to work'
    }
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
              Integrate. Automate.<br />Dominate.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
              StrataXM helps small and mid-sized businesses modernize operations through Automation, Data Engineering, and Business Intelligence. We build the digital backbone that makes your business run better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl inline-flex items-center group"
              >
                Let's Modernize Your Operations
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do - 3 Pillars */}
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
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We build the digital backbone of your business across three integrated pillars.
            </p>
          </motion.div>

          <div className="space-y-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {pillar.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-300">
                  <p className="text-sm text-slate-500">
                    <span className="font-semibold">Powered by:</span> {pillar.poweredBy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
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
              Project to prove. Fractional to sustain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {workPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                  {phase.icon}
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">{phase.duration}</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-100 rounded-xl p-8 border border-slate-300 text-center"
          >
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              This approach ensures you see real ROI fast, build reusable infrastructure, and have ongoing support as your needs evolve. No wasted time, no vendor lock-in.
            </p>
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
              Why StrataXM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not consultants who hand you a plan and leave. We build, maintain, and grow with you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 bg-slate-50 rounded-lg p-6 border border-slate-200"
              >
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to modernize your operations?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Book a discovery call and we'll talk through your systems, workflows, and goals. No pitch, no pressure. Just a conversation about what makes sense for your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl inline-flex items-center group"
            >
              Schedule Your Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;