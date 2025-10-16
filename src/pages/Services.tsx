import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Database, BarChart3, ArrowRight, CheckCircle, GitBranch, Code, RefreshCw, Building2, Wrench, Factory, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const pillars = [
    {
      icon: <Cog className="w-10 h-10" />,
      title: 'Automation',
      summary: 'Streamline workflows and remove manual steps. Connect systems so data flows automatically between them.',
      capabilities: [
        'Replace manual data entry across multiple systems',
        'Connect disconnected platforms and eliminate silos',
        'Automate approvals, notifications, and scheduled tasks',
        'Build intelligent document processing and data extraction',
        'Sync data between systems in real-time',
        'Create self-service portals for customers and internal teams'
      ],
      poweredBy: 'Power Automate, Azure Logic Apps, Custom APIs',
      scenario: {
        context: 'An HVAC company was manually entering every invoice into QuickBooks, tracking service appointments in Excel, and calling customers to confirm visits.',
        solution: 'We automated invoice generation from completed jobs, synced scheduling with their field team\'s mobile app, and set up automatic customer confirmations via text.',
        result: 'They cut administrative time by 60% and eliminated billing errors entirely.'
      },
      visualConcept: 'Flow diagram showing systems connecting with arrows and data moving between them'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Engineering',
      summary: 'Consolidate systems and create reliable pipelines. Build infrastructure that turns raw data into a trusted asset.',
      capabilities: [
        'Design scalable databases and centralized data warehouses',
        'Build ETL/ELT pipelines that run on schedule or in real-time',
        'Integrate APIs, legacy systems, files, and cloud platforms',
        'Implement data quality checks and monitoring',
        'Create reusable data models for reporting and AI',
        'Establish security, governance, and backup standards'
      ],
      poweredBy: 'Azure Data Factory, SQL Server, Azure Synapse, Databricks, Python',
      scenario: {
        context: 'A medical group had patient data split across their EHR, billing system, scheduling software, and paper intake forms. Running reports meant pulling data from four places manually.',
        solution: 'We built a centralized data warehouse that pulls from all their systems nightly, standardizes the data, and makes it available for reporting and analysis.',
        result: 'They can now run accurate reports in minutes instead of days, and their compliance audits became straightforward.'
      },
      visualConcept: 'Central database icon with multiple source systems feeding into it via pipelines'
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Business Intelligence',
      summary: 'Transform data into dashboards and insights. Surface what matters so your team can make better decisions.',
      capabilities: [
        'Build interactive dashboards for daily operations',
        'Design executive reporting for KPIs and business trends',
        'Enable self-service analytics for business users',
        'Create automated report distribution and alerts',
        'Implement predictive models and forecasting',
        'Integrate AI-powered recommendations into workflows'
      ],
      poweredBy: 'Power BI, Tableau, Azure Machine Learning, Python',
      scenario: {
        context: 'A manufacturer had no real-time visibility into production costs, machine downtime, or inventory levels. They were making decisions based on outdated spreadsheets.',
        solution: 'We built live dashboards showing production metrics, cost tracking, and inventory status. Alerts notify managers when machines go offline or inventory runs low.',
        result: 'They reduced downtime by 40%, improved inventory accuracy, and cut production costs by 15%.'
      },
      visualConcept: 'Dashboard interface with charts, graphs, and real-time metrics on a screen'
    }
  ];

  const workPhases = [
    {
      title: 'Discovery Sprint',
      duration: '1–2 weeks',
      icon: <GitBranch className="w-8 h-8" />,
      description: 'We start by mapping your systems, understanding your workflows, and identifying high-impact opportunities. You get a clear roadmap of what to build, in what order, and why it matters to your business.'
    },
    {
      title: 'Foundation Project',
      duration: '8–12 weeks',
      icon: <Code className="w-8 h-8" />,
      description: 'We implement your first core solution — typically an automation, integration, or dashboard that delivers measurable ROI. This proves the model works and creates reusable infrastructure for future improvements.'
    },
    {
      title: 'Fractional Partnership',
      duration: 'Ongoing',
      icon: <RefreshCw className="w-8 h-8" />,
      description: 'After the foundation is live, we become your ongoing fractional data and automation team. We maintain what we built, add new capabilities as needs evolve, and act as your strategic partner as you scale.'
    }
  ];

  const scenarios = [
    {
      icon: <Wrench className="w-8 h-8" />,
      businessType: 'HVAC Company',
      problem: 'Field technicians were using paper work orders. The office team re-entered everything into QuickBooks and scheduling software. Customers had to call for status updates.',
      result: 'Built a mobile app for technicians connected to scheduling and billing. Automated invoice generation and customer notifications. Same-day invoicing, zero lost paperwork.'
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      businessType: 'Medical Group',
      problem: 'Patient data scattered across EHR, billing system, and intake forms. Running monthly reports took days of manual work. Compliance audits were painful.',
      result: 'Centralized all patient data in Azure with Power BI dashboards. Real-time reporting for operations and finance. Compliance reporting went from days to minutes.'
    },
    {
      icon: <Factory className="w-8 h-8" />,
      businessType: 'Manufacturer',
      problem: 'No visibility into real-time production costs, machine downtime, or inventory levels. Decisions made on outdated spreadsheets and gut feel.',
      result: 'Built live production dashboards tracking costs, downtime, and inventory. Automated alerts for issues. 40% less downtime, 15% lower production costs.'
    }
  ];

  const differentiators = [
    'Integration-first mindset — we connect what you already have',
    'Local partnership in Louisiana — responsive and invested',
    'Microsoft ecosystem expertise — Azure, Power Platform, Dynamics',
    'Reusable frameworks — every project builds on the last',
    'Practical AI readiness — we build the foundation AI needs'
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
              Your fractional data and automation team
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              StrataXM helps small and mid-sized businesses modernize operations through integrated systems, automated workflows, and intelligent insights. We build the digital backbone that makes your business run better.
            </p>
            <p className="text-lg text-slate-500 mb-10">
              Automation · Data Engineering · Business Intelligence
            </p>
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl inline-flex items-center group"
            >
              Start Your Modernization Plan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
          </motion.div>

          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                <div>
                  <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {pillar.summary}
                  </p>

                  <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <ul className="space-y-3">
                      {pillar.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-slate-700 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-sm text-slate-500">
                      <span className="font-semibold">Powered by:</span> {pillar.poweredBy}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-2xl p-8 lg:p-10 border border-slate-200">
                  <div className="mb-6">
                    <div className="inline-block bg-slate-900 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                      Real Scenario
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {pillar.scenario.context}
                    </p>
                    <div className="border-l-4 border-slate-900 pl-4">
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {pillar.scenario.solution}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-slate-300">
                      <p className="text-slate-900 font-semibold">
                        {pillar.scenario.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our three-phase delivery model ensures you see results fast and have ongoing support as you scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {workPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 relative"
              >
                {index < workPhases.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
                <div className="w-16 h-16 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
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
            className="bg-slate-100 rounded-xl p-8 border border-slate-300 text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-slate-700 leading-relaxed">
              This approach ensures you see real ROI fast, build reusable infrastructure, and have ongoing support as your needs evolve. No wasted time, no vendor lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scenario Highlights */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Real Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Examples from businesses we work with across Louisiana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{scenario.businessType}</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {scenario.problem}
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-slate-300">
                    <p className="text-slate-900 font-medium text-sm leading-relaxed">
                      {scenario.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why StrataXM */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why StrataXM
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-6 border border-slate-200 flex items-center gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0" />
                  <p className="text-lg text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
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
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Start with a Discovery Sprint. We'll map your systems, identify opportunities, and build a roadmap tailored to your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-slate-100 hover:shadow-xl inline-flex items-center group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;