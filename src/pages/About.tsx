import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Lightbulb, Award, MessageSquare, CheckCircle2, MapPin, Heart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Meet Where You Are Approach',
      description: 'We meet businesses where they are on the digital transformation journey, helping them take the right next step instead of forcing oversized platforms that create more chaos than clarity.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Long-Term Partnership',
      description: 'We\'re not project vendors—we\'re your ongoing digital transformation partner, committed to your long-term success.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Future-Ready Foundation',
      description: 'Every solution we build lays the groundwork for more advanced reporting and decision-making over time.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Proven Data Infrastructure',
      description: 'We build on reliable, modern technologies and proven approaches that adapt as your business expands.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Business-First Communication',
      description: 'We explain everything in business terms, not technical jargon. You\'ll always understand what we\'re building and why.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Managed Infrastructure Model',
      description: 'Unlike one-time projects, we provide ongoing managed data infrastructure through monthly retainer partnerships.'
    }
  ];

  const communityCommitment = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Expertise',
      description: 'Born and raised in Louisiana, we understand local business culture, regulations, and market dynamics.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Practical Innovation',
      description: 'We bring modern solutions to real business challenges—balancing efficiency, clarity, and the right level of technology.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Economic Development',
      description: 'By helping local businesses modernize, we\'re contributing to Louisiana\'s economic growth and competitiveness.'
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
              Your digital transformation partner, building the foundation that makes AI and automation possible for local businesses.
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
                <p className="text-cyan-700 font-medium mb-4">Founder & Data Infrastructure Architect</p>
                <p className="text-slate-600 text-sm">Louisiana Native • Microsoft Certified • Community Leader</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Building Louisiana's Data Future
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  StrataXM was founded with a clear mission: to democratize enterprise-grade technology 
                  for Louisiana's small and mid-sized businesses. While large corporations have teams of data 
                  engineers and AI specialists, local businesses have been left behind.
                </p>
                <p>
                  We exist to change that. StrataXM brings the same digital transformation capabilities that power 
                  Fortune 500 companies to small businesses—in a way that's practical, affordable, and 
                  designed for long-term partnership.
                </p>
                <p>
                  Every business we work with becomes more competitive, more efficient, and better positioned 
                  for the AI-driven future. That's not just good for individual companies—it's good for Louisiana's 
                  entire economic ecosystem.
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
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're building the data infrastructure that powers Louisiana's economic future.
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
                To build the data infrastructure that makes small and medium sized businesses AI-ready, competitive, 
                and positioned for sustainable growth. We transform scattered business data into unified, 
                intelligent foundations that power better decisions and automated operations.
              </p>
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-1 w-24 mx-auto rounded-full mb-8"></div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A landscape where every business—regardless of size—has access to enterprise-grade data 
                infrastructure and AI capabilities. Where local companies compete on equal footing with 
                national players because their data works as hard as they do.
              </p>
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
              Our Data Infrastructure Methodology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a proven three-phase approach that ensures every data infrastructure project 
              delivers measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Data Foundation Assessment',
                description: 'We audit your current data landscape, identify integration opportunities, and design a unified data architecture.',
                outcome: 'Clear roadmap for transforming scattered data into a unified foundation'
              },
              {
                step: '02', 
                title: 'Infrastructure Implementation',
                description: 'We build secure, scalable data pipelines and implement automated workflows using enterprise-grade Microsoft technologies.',
                outcome: 'Working data infrastructure that eliminates manual processes and data silos'
              },
              {
                step: '03',
                title: 'Insights & AI Enablement',
                description: 'We deploy dashboards, predictive models, and AI tools that turn your unified data into competitive advantage.',
                outcome: 'AI-ready business with data-driven decision making and automated intelligence'
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
              Ready to see how this methodology can transform your business data?
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Data Transformation
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
              Why Louisiana Businesses Choose StrataXM
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another tech vendor. We're your long-term data infrastructure partner.
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
        </div>
      </section>

      {/* Community Commitment */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Committed to Louisiana's Future
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just building data infrastructure—we're building Louisiana's economic future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {communityCommitment.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {commitment.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {commitment.description}
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
              Ready to Partner with Us?
            </h3>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can build the data infrastructure that transforms your business 
              and contributes to Louisiana's economic growth.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start the Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Data Infrastructure Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's what businesses typically achieve when they invest in proper data infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '70-90%', label: 'Reduction in manual data entry' },
              { number: '50-80%', label: 'Faster access to business insights' },
              { number: '12-24mo', label: 'Typical ROI payback period' }
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
              Ready to Build Your Data Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the Louisiana businesses that are already transforming their operations 
              with enterprise-grade data infrastructure.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Start Your Data Infrastructure Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;