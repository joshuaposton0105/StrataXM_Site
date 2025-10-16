import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart3, Wrench, Database, TrendingUp, Zap, Settings, BookOpen, Lightbulb, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const concepts = [
    {
      term: 'Business Process Automation',
      explanation: 'Automation handles repetitive tasks automatically so your team can focus on work that requires human judgment. Common examples include automatically generating invoices when work is completed, sending reminder emails for overdue payments, or updating multiple systems when customer information changes.',
      whenYouNeedIt: 'You find your team doing the same manual tasks repeatedly, copying data between systems, or spending hours on routine administrative work.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      term: 'Data Engineering',
      explanation: 'Data engineering connects your disconnected systems and ensures data flows automatically between them. Instead of manually exporting from one system and importing to another, data engineering builds "pipes" that move information automatically while keeping it clean and consistent.',
      whenYouNeedIt: 'Your data lives in multiple places (CRM, accounting, operations tools), you manually move data between systems, or different reports show different numbers for the same thing.',
      icon: <Database className="w-8 h-8" />
    },
    {
      term: 'Business Intelligence',
      explanation: 'Business Intelligence transforms raw data into visual dashboards and reports that help you make decisions quickly. Instead of pulling numbers from multiple spreadsheets, you see all your key metrics in one place, updating in real-time as your business operates.',
      whenYouNeedIt: 'You spend hours creating reports manually, make decisions based on outdated information, or can\'t quickly answer basic questions about your business performance.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      term: 'System Integration',
      explanation: 'Integration connects your existing software so they share data automatically. Your CRM, accounting software, and operations tools can work together without replacing any of them. When information changes in one system, it updates everywhere else automatically.',
      whenYouNeedIt: 'You use multiple software tools that don\'t talk to each other, re-enter the same information in different systems, or have customer/product data scattered across multiple places.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      term: 'Data Pipeline',
      explanation: 'A data pipeline is the "plumbing" that automatically moves information from where it lives to where you need it. It extracts data from your various systems, cleans and standardizes it, then loads it into a database or dashboard—all without manual intervention.',
      whenYouNeedIt: 'You manually export and import data between systems, spend time cleaning up inconsistent data, or need consolidated reporting across multiple tools.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      term: 'Single Source of Truth',
      explanation: 'A single source of truth means each piece of business data has one authoritative location. Customer information lives in one place, inventory numbers come from one system, and financial data has one master version. Everything else pulls from these sources, so you never question which number is "real."',
      whenYouNeedIt: 'Different reports show different numbers, your team argues about which spreadsheet is correct, or you waste time reconciling conflicting data sources.',
      icon: <Target className="w-8 h-8" />
    }
  ];

  const realScenarios = [
    {
      business: 'HVAC Contractor',
      industry: 'Trade Services',
      problem: 'Field technicians completed work orders on paper. Office staff spent 2-3 hours daily re-entering everything into QuickBooks and ServiceTitan. Invoices took 2-3 days to send, delaying payment.',
      whatWeDid: 'Connected the field service app directly to QuickBooks and ServiceTitan. When technicians mark a job complete, the system automatically creates the invoice in QuickBooks, updates the job status in ServiceTitan, and emails the invoice to the customer.',
      result: 'Invoices go out same-day. Zero duplicate data entry. Office staff saved 15 hours per week. Customers pay faster because they receive invoices immediately.',
      icon: <Wrench className="w-10 h-10" />
    },
    {
      business: 'Medical Practice',
      industry: 'Healthcare',
      problem: 'Patient data scattered across EHR, billing system, and intake forms. Creating monthly reports required 2-3 days of manual work pulling data from each system into Excel. No visibility into daily operations or capacity.',
      whatWeDid: 'Built a data pipeline that pulls from all systems into a central database. Created live dashboards showing patient volume, billing status, appointment capacity, and compliance metrics. Reports that took days now update automatically.',
      result: 'Staff check dashboards daily to make staffing decisions. Compliance reports generate in minutes instead of days. Management can see real-time capacity and respond to changes immediately.',
      icon: <BarChart3 className="w-10 h-10" />
    },
    {
      business: 'Fabrication Shop',
      industry: 'Manufacturing',
      problem: 'No real-time visibility into job costs, machine utilization, or inventory levels. Production decisions based on gut feel and outdated spreadsheets updated manually each week. Couldn\'t identify which jobs were profitable until after completion.',
      whatWeDid: 'Integrated production tracking with inventory and accounting systems. Built dashboards showing live cost-per-job, machine downtime, inventory by job, and profitability by customer. Historical data enables accurate job quoting.',
      result: 'Real-time cost visibility allows mid-project corrections. Machine downtime reduced 30% through better monitoring. Inventory accuracy improved from 70% to 98%. Quotes now based on actual historical costs.',
      icon: <Database className="w-10 h-10" />
    }
  ];

  const commonQuestions = [
    {
      question: 'How is this different from just buying new software?',
      answer: 'New software often creates new problems—learning curves, data migration, more disconnected systems. We work with what you have, connecting your existing tools so they work together. You keep the software your team knows, but eliminate the manual work between them.'
    },
    {
      question: 'Do I need to replace my current systems?',
      answer: 'Rarely. Most businesses already use good software—it just doesn\'t connect. We integrate your existing CRM, accounting, and operations tools so they share data automatically. Replacement only makes sense when software truly can\'t meet your needs.'
    },
    {
      question: 'How long until I see results?',
      answer: 'It depends on scope. Small automations (like auto-generating invoices) deliver value in weeks. Comprehensive data pipelines and dashboards typically take 2-3 months. We prioritize quick wins first so you see value while bigger projects progress.'
    },
    {
      question: 'What if my data is a mess?',
      answer: 'Messy data is normal—that\'s part of the problem we solve. Data engineering includes cleaning, standardizing, and organizing your information. We address data quality as part of every project because good decisions require good data.'
    },
    {
      question: 'Can small businesses afford this?',
      answer: 'If you\'re wasting 10+ hours per week on manual data work, you\'re already paying for it in lost productivity. Most automation and integration projects pay for themselves within 6-12 months through time savings alone, not counting better decisions from better data.'
    },
    {
      question: 'What\'s the difference between a project and fractional service?',
      answer: 'Projects have defined scope and end dates—like building a specific dashboard or automation. Fractional service is ongoing support—I act as your part-time technical team, handling new automations, maintaining integrations, and adapting as your business evolves. Many clients start with a project, then move to fractional for continued support.'
    }
  ];

  const processSteps = [
    {
      title: 'Audit & Assessment',
      description: 'We look at your current systems, data, and workflows to identify the biggest bottlenecks and opportunities. What\'s wasting the most time? Where are decisions being made without good data?',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: 'Prioritized Roadmap',
      description: 'Not everything happens at once. We build a phased plan that delivers quick wins first, then tackles bigger transformations. Each phase adds value while building toward long-term goals.',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Implementation',
      description: 'We build integrations, automate workflows, and create dashboards using your existing systems. Changes are tested thoroughly before going live to avoid disrupting daily operations.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Training & Handoff',
      description: 'Your team learns how to use new dashboards and automated systems. We document everything and provide training so your team is confident using the new capabilities.',
      icon: <Users className="w-6 h-6" />
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
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Understanding Modernization
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Plain-English explanations of automation, data engineering, and business intelligence—what they actually mean for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Key Concepts Explained
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What these services actually do and when you need them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl border border-slate-200 p-8 hover:border-slate-900 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                  {concept.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {concept.term}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {concept.explanation}
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-slate-900">
                  <p className="text-sm font-semibold text-slate-900 mb-1">When you need this:</p>
                  <p className="text-sm text-slate-600">
                    {concept.whenYouNeedIt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Real Client Examples
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How these solutions solve actual business problems
            </p>
          </motion.div>

          <div className="space-y-12">
            {realScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8">
                  <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="w-20 h-20 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-4">
                      {scenario.icon}
                    </div>
                    <span className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {scenario.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {scenario.business}
                    </h3>
                  </div>

                  <div className="lg:col-span-9 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">The Problem</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {scenario.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">What We Did</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {scenario.whatWeDid}
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-slate-900">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">Results</h4>
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {scenario.result}
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
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How This Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The typical process from initial conversation to working solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 h-full hover:border-slate-900 transition-all duration-300">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
                    {step.icon}
                  </div>
                  <div className="mb-3 text-sm font-bold text-slate-500 uppercase tracking-wide">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-slate-600">
              Answers to questions most business owners ask
            </p>
          </motion.div>

          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:border-slate-900 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
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
            <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              See how this applies to your business
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every business is different. Let's talk about your specific systems, workflows, and goals to identify the best opportunities.
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
