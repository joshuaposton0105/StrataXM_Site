import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Database, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const principles = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Clean Data First',
      description: 'You can\'t forecast revenue or understand profit if your data is messy and conflicting. We always start by consolidating systems and cleaning up the foundation before building analysis on top.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Plain English Explanations',
      description: 'We explain what the numbers mean and why they matter in language you actually understand. No jargon. No academic formulas. Just clear answers about your business.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Decision-Focused',
      description: 'Every analysis ties back to a real business decision you need to make. We don\'t build reports for the sake of reports. We help you choose with confidence.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ongoing Partnership',
      description: 'We build the systems, maintain what we create, and stay with you as your business grows. You\'re not hiring a consultant who delivers a presentation and disappears.'
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
              Your analytical team for profit, forecasting, and growth
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              StrataXM helps business owners turn messy data into clear answers about profit, performance, and risk. We're the analytical capability you don't have in-house.
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
                Most small business owners make major decisions—opening a second location, changing prices, taking on a big contract—based on instinct and what they remember from the past. It works until the stakes get high enough that a wrong choice threatens everything.
              </p>
              <p>
                StrataXM was founded to give small businesses the analytical capability that big companies have in-house. We consolidate your messy data, build dashboards that actually make sense, forecast revenue, and help you model major decisions before you commit.
              </p>
              <p>
                This is not just pretty dashboards. This is not process automation. This is understanding what's driving your profit, forecasting what's coming, and evaluating business decisions with real numbers—the kind of analysis that large companies do internally, adapted for businesses that can't justify hiring a full analytics team.
              </p>
              <p>
                We work with owners who need to make consequential choices with confidence. Expansion. Pricing changes. Contract evaluation. Capacity planning. The decisions where being wrong costs real money.
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
              How We Do It
            </h2>
            <div className="space-y-4 text-lg text-slate-700">
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We focus on building reliable data foundations that businesses can actually trust</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We create clear reporting that shows what is truly happening inside the business</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We apply forecasting and scenario modeling to support real financial decisions</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We work as a long-term analytical partner, not a one-time project vendor</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-slate-500 mt-1">—</span>
                <p>We are not advisors who deliver a report and leave. We build the systems, maintain what we create, and stay with you as an ongoing partner. This is not a one-time project.</p>
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
                We work with business owners at small and mid-sized companies—typically 10 to 500 employees—who need to make big decisions and want real numbers backing them up, not just gut instinct.
              </p>
              <p>
                Our clients are often at turning points: considering expansion, evaluating large contracts, planning capacity changes, or making pricing decisions that could significantly impact the business. They know their industry and operations. What they need is someone to consolidate their messy data and help them understand what the numbers actually say.
              </p>
              <p>
                We work across industries: manufacturing, healthcare, construction, trades, distribution, professional services. The common thread isn't the industry—it's the need for clean data and clear analysis to support major business decisions.
              </p>
              <p>
                If you're trying to decide whether to open a new location, take on a large contract, change your pricing, or add capacity—and you want real numbers backing that choice—we can help.
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
                StrataXM is led by Joshua Poston, who has spent years building data systems and analytics capabilities for complex organizations—from enterprise analytics platforms to decision support systems for operations teams.
              </p>
              <p>
                This practice was founded on a simple observation: small and mid-sized businesses face the same challenges as large companies—forecasting revenue, understanding profit drivers, modeling expansion decisions—but don't have access to the analytical teams that big companies build in-house.
              </p>
              <p>
                We bring that capability without requiring you to hire a full team. You get the data consolidation, the analysis, and the ongoing partnership that makes smart decision-making practical for businesses your size.
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
