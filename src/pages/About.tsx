import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const principles = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Foundation First',
      description: 'Forecasting and decision modeling require reliable data. We always start by establishing a single source of truth before layering on statistical analysis.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Quantitative Rigor',
      description: 'We document assumptions, explain methodology, and provide confidence intervals. You understand not just what the model says, but why it says it and where uncertainty exists.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Decision-Focused',
      description: 'Analysis exists to support decisions. Every model, forecast, and scenario we build ties directly to a choice you need to make with confidence.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Long-Term Partnership',
      description: 'We own the infrastructure we build and maintain the models we create. You\'re not hiring a consultant who disappears after delivering a deck.'
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
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              A quantitative practice for business owners
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              StrataXM applies statistical methods and data engineering to help business owners make major decisions with mathematical backing instead of gut instinct.
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
              What We Are
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Most small and mid-sized businesses make major decisions—expansion, pricing, capacity, investment—based on instinct and historical patterns they remember informally. It works until the stakes get high enough that a wrong choice threatens the business.
              </p>
              <p>
                StrataXM was founded to bring quantitative decision support to businesses that don't have their own analytics teams. We build data infrastructure, apply statistical methods, and model scenarios so business owners can evaluate risk mathematically before committing resources.
              </p>
              <p>
                This is not business intelligence dashboards. This is not workflow automation. This is forecasting, risk analysis, and scenario modeling—the kind of quantitative work that actuaries and analysts do inside large organizations, adapted for businesses that need the capability without hiring a full team.
              </p>
              <p>
                We serve owners and principals who need to make consequential decisions with confidence. Expansion. Capacity changes. Contract evaluation. Pricing strategy. The choices where being wrong costs more than hiring us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              What We Are Not
            </h2>
            <div className="space-y-4 text-lg text-slate-700">
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not a workflow automation agency. If you need Zapier integrations or low-code automation without underlying data infrastructure, we're not the right fit.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not an AI implementation shop. We don't sell machine learning solutions or deploy chatbots. If you want quantitative analysis, we can help. If you want AI because it's trendy, look elsewhere.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not a dashboard-only BI studio. We build data infrastructure and apply statistical methods. Dashboards are a tool, not the deliverable.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not marketing analytics consultants. We don't optimize ad spend or do attribution modeling. We focus on operational and financial decision support.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not advisors who deliver a strategy document and disappear. We own the infrastructure we build and maintain the models we create. This is a partnership, not a one-time engagement.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
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

      {/* Who We Work With */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Who We Work With
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                We work with business owners and principals at small and mid-sized companies—typically 10 to 500 employees—who need to make consequential decisions and want quantitative backing instead of guesswork.
              </p>
              <p>
                Our clients are often at inflection points: considering expansion, evaluating large contracts, planning capacity changes, or making pricing decisions that materially affect the business. They understand their industry and operations. What they need is someone to build the data infrastructure and run the analysis that tells them what the numbers actually say.
              </p>
              <p>
                We work across industries: manufacturing, healthcare, construction, specialty trades, distribution, professional services. The common thread is not the industry—it's the need for reliable data and statistical analysis to support major decisions.
              </p>
              <p>
                If you're trying to decide whether to open a new location, take on a large contract, change your pricing structure, or invest in additional capacity, and you want mathematical backing for that choice—we can help.
              </p>
            </div>
          </motion.div>
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
                StrataXM is led by Joshua Poston, who has spent years building data infrastructure and analytics systems for complex organizations—from enterprise-scale analytics platforms to decision support systems for mission-critical operations.
              </p>
              <p>
                This practice was founded on the observation that small and mid-sized businesses face many of the same quantitative challenges as large enterprises—forecasting, risk modeling, scenario analysis—but lack access to the statistical and engineering expertise needed to solve them.
              </p>
              <p>
                We bring that capability without requiring you to hire a full analytics team. You get the infrastructure, the analysis, and the ongoing partnership that makes quantitative decision support practical for businesses of your scale.
              </p>
            </div>
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
              Ready to apply quantitative rigor to your business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tell us about the decision you need to make and the data you have. We'll explain whether we can help and what that engagement would look like.
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
