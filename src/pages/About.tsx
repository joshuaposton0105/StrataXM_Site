import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Lightbulb, Award, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'People-First Approach',
      description: 'Technology should make your team\'s work easier, not replace them. We focus on augmenting human capabilities.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Driven',
      description: 'Every solution we implement is measured against clear business outcomes. If it doesn\'t improve your bottom line, we don\'t do it.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Practical Innovation',
      description: 'We believe in using proven technologies in smart ways, not chasing the latest trends that don\'t solve real problems.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Methodologies',
      description: 'We use battle-tested frameworks and approaches that have delivered results across industries.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Plain English Communication',
      description: 'No technical jargon. We explain everything in terms that make business sense.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Results-Focused Approach',
      description: 'Every solution we recommend is tied to clear business outcomes and measurable improvements.'
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
              About <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">StrataXM</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We exist to help businesses grow smarter through practical automation and AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-4xl">JP</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Josh Poston</h3>
                <p className="text-cyan-700 font-medium">Founder & Lead Consultant</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Meet Josh Poston
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  After spending years helping Fortune 500 companies implement complex automation systems, 
                  Josh saw a gap in the market: small and mid-sized businesses were being left behind in the 
                  digital transformation wave.
                </p>
                <p>
                  Too many consultants speak in technical jargon and propose over-engineered solutions. 
                  Josh founded StrataXM to bridge this gap—bringing enterprise-level automation and AI 
                  capabilities to businesses in a way that's practical, affordable, and actually useful.
                </p>
                <p>
                  "Technology should solve real problems for real people. If we can't explain how something 
                  will make your business better in plain English, we shouldn't be building it."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why StrataXM Exists
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe every business deserves access to the tools and strategies that help them compete and thrive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-12 mb-16"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                To democratize business automation and AI, making these powerful tools accessible to companies 
                of all sizes. We help businesses scale their operations intelligently, freeing up human 
                potential for creativity, strategy, and growth.
              </p>
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-1 w-24 mx-auto rounded-full"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Proven Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a systematic methodology that ensures every automation project delivers measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Assess & Analyze',
                description: 'We map your current processes, identify bottlenecks, and quantify improvement opportunities.',
                outcome: 'Clear picture of where automation will have the biggest impact'
              },
              {
                step: '02', 
                title: 'Design & Plan',
                description: 'We create a detailed roadmap with priorities, timelines, and expected ROI for each initiative.',
                outcome: 'Concrete plan with realistic expectations and measurable goals'
              },
              {
                step: '03',
                title: 'Implement & Optimize',
                description: 'We build, test, and deploy solutions while training your team for long-term success.',
                outcome: 'Working systems that deliver immediate value and scale with your business'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {phase.description}
                </p>
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                  <p className="text-sm text-cyan-800 font-medium">
                    <strong>Outcome:</strong> {phase.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-600 mb-6">
              Ready to see how this approach can transform your business?
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why Businesses Choose StrataXM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another tech consultancy. Here's what makes us different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
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
              Still Have Questions?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              The best way to understand if we're a good fit is to have a conversation. 
              No sales pitch, just an honest discussion about your challenges and opportunities.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Let's Have That Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Industry Benchmarks
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's what businesses typically achieve through smart automation and AI implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '60-80%', label: 'Typical reduction in manual work' },
              { number: '40-60%', label: 'Faster decision-making with unified data' },
              { number: '6-18mo', label: 'Average payback period' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-4">
                  {stat.number}
                </div>
                <p className="text-lg text-slate-600 font-medium">
                  {stat.label}
                </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business grow smarter with automation and AI.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Let's Start the Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;