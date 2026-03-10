import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const principles = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Clean Data First',
      description:
        'You can\'t forecast revenue or understand profit if your data is messy and conflicting. We always start by consolidating systems and cleaning up the foundation before building analysis on top.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Plain English Explanations',
      description:
        'We explain what the numbers mean and why they matter in language you actually understand. No jargon. No academic formulas. Just clear answers about your business.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Decision-Focused',
      description:
        'Every analysis ties back to a real business decision you need to make. We don\'t build reports for the sake of reports. We help you choose with confidence.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ongoing Partnership',
      description:
        'We build the systems, maintain what we create, and stay with you as your business grows. You\'re not hiring a consultant who delivers a presentation and disappears.'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'Practice performance, payer mix analysis, referral tracking, and operational dashboards for clinics and multi-location practices.'
    },
    {
      name: 'Retail & POS Businesses',
      description: 'Sales trend analysis, inventory performance, customer profitability, and reconciliation across POS, QuickBooks, and ecommerce systems.'
    },
    {
      name: 'Service Businesses',
      description: 'Job costing, technician performance, revenue forecasting, and capacity planning for field service and professional service firms.'
    },
    {
      name: 'Construction & Field Services',
      description: 'Contract margin analysis, project profitability, labor cost tracking, and cash flow forecasting for contractors and trades businesses.'
    }
  ];

  return (
    <div className="pt-16 lg:pt-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Enterprise-level business intelligence.<br />Built for small business budgets.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              StrataXM stands in the gap between the spreadsheet-and-guesswork stage and the analytical capability that growing businesses actually need — without requiring you to hire a full in-house team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Are */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              What We Do
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Most small business owners make major decisions — opening a second location, changing prices, taking on a big contract — based on instinct and incomplete information. It works until the stakes get high enough that a wrong choice threatens everything.
              </p>
              <p>
                StrataXM gives small and mid-sized businesses the analytical capability that large companies build in-house. We consolidate scattered data, build dashboards that tell you what's actually happening, forecast revenue with confidence, and model major decisions before you commit — using tools like Power BI, Looker Studio, and Google Sheets, connected through automated data flows and integrations that eliminate manual work.
              </p>
              <p>
                The result isn't just better-looking reports. It's a clear understanding of what's driving your profit, what's coming next, and whether the decision in front of you is worth the risk. The kind of analysis that large companies pay internal teams to do — adapted for businesses that can't justify that overhead.
              </p>
              <p>
                We work with owners and leadership teams who face consequential choices: expansion, pricing changes, contract evaluation, capacity planning. Decisions where being wrong costs real money.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              How We Work
            </h2>
            <div className="space-y-4 text-lg text-slate-700">
              {[
                'We connect your systems — QuickBooks, POS, CRM, spreadsheets — into one reliable source of truth',
                'We build dashboards and automated reporting that show what\'s actually happening in your business',
                'We apply revenue forecasting and scenario modeling to support real financial decisions',
                'We integrate AI-assisted analysis and automation where it creates real operational value',
                'We work as a long-term analytical partner, not a one-time project vendor — we build it, maintain it, and stay with you'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-slate-400 mt-1 font-bold">—</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We work across industries where operational data is complex, decisions are high-stakes, and the margin for guesswork is thin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              How We Operate
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              The Team
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                StrataXM is led by Joshua Poston, who has spent years building data systems and analytics capabilities across complex organizations — from enterprise BI platforms to operational decision support systems.
              </p>
              <p>
                This practice was built on a straightforward observation: small and mid-sized businesses face the same analytical challenges as large companies — forecasting revenue, understanding true profit drivers, modeling expansion decisions — but don't have access to the teams that make those capabilities possible at scale.
              </p>
              <p>
                We bring that capability to businesses that need it without the overhead of hiring it. You get the data infrastructure, the analysis, and the ongoing partnership — without building an internal team to support it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to make decisions with confidence?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tell us about your data situation and the decision you're facing. We'll explain whether we can help and what working together would look like.
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

export default About;
