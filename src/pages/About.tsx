import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Link as LinkIcon, Shield, Building, Package, Stethoscope, Wrench, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const approach = [
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: 'Integration-First',
      description: 'We connect your existing systems before building anything new. Modernization starts with making what you have work together.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Clarity Over Complexity',
      description: 'We simplify your data landscape. The goal is to make information easier to access and understand, not bury you in more tools.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable Foundations',
      description: 'We build systems that grow with your business. Every solution is designed to expand as your needs evolve.'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Practical AI Readiness',
      description: 'We prepare your data infrastructure for intelligent automation—not hype, but real capability when you need it.'
    }
  ];

  const whoWeHelp = [
    {
      icon: <Wrench className="w-6 h-6" />,
      type: 'Trade Contractors',
      scenario: 'Field teams using paper, office staff drowning in spreadsheets, no visibility into job costs or scheduling.'
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      type: 'Medical & Dental Practices',
      scenario: 'Patient data scattered across systems, manual reporting, compliance headaches, billing delays.'
    },
    {
      icon: <Building className="w-6 h-6" />,
      type: 'Manufacturers & Distributors',
      scenario: 'Inventory counts off, production data siloed, no real-time cost tracking, decisions based on outdated reports.'
    }
  ];

  const values = [
    'Integrity: We do what we say we\'ll do, when we say we\'ll do it.',
    'Transparency: You always know what we\'re building, why it matters, and what it costs.',
    'Craftsmanship: We build systems the right way—secure, scalable, and built to last.',
    'Learning: Technology evolves. We stay current so your business stays competitive.',
    'Local Impact: We invest in Louisiana businesses because we believe in Louisiana\'s future.'
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
              Modernization built for real businesses
            </h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              We help small and mid-sized businesses modernize operations through connected systems, automated workflows, and intelligent insights.
            </p>
            <p className="text-lg text-slate-500">
              Automation · Data Engineering · Business Intelligence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                StrataXM started from a simple observation: most small and mid-sized businesses are drowning in disconnected systems and messy data.
              </p>
              <p>
                We spent years building analytics platforms, automation systems, and data pipelines inside large organizations—solving the same problems over and over. Systems that don't talk to each other. Reports built manually every month. Data locked in spreadsheets that no one trusts.
              </p>
              <p>
                The difference? Large enterprises have dedicated teams to solve these problems. Small businesses don't.
              </p>
              <p>
                So we built StrataXM to bring that same capability to growing companies in Louisiana and beyond. We help businesses modernize their operations affordably, using proven enterprise-grade tools and frameworks adapted for smaller organizations.
              </p>
              <p>
                We're not selling software. We're becoming your fractional data and automation team—the people who connect your systems, clean up your data, build your dashboards, and keep everything running while you focus on your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              To give small and mid-sized businesses access to the same data infrastructure and automation maturity as large enterprises. We empower growing companies to make better decisions, automate manual work, and compete on a level playing field—without needing to hire a full data team.
            </p>
          </motion.div>
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
              Our Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How we think about modernization and partnership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-8 border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Who We Help
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed">
                We work with any small or mid-sized business that's outgrown spreadsheets and manual processes. If you're running multiple systems that don't talk to each other, if your team spends hours on tasks that should be automated, or if you can't get clear answers from your data—we can help.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission is simple: give growing businesses the same data infrastructure and automation capabilities that large corporations have, without the enterprise price tag or complexity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Common scenarios we solve:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whoWeHelp.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-slate-200"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6">
                    {client.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    {client.type}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {client.scenario}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-10 border border-slate-300 text-center max-w-4xl mx-auto shadow-lg"
          >
            <p className="text-xl text-slate-900 font-semibold mb-4">
              But we're not limited to these industries.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              If you rely on QuickBooks, ServiceTitan, Shopify, Microsoft 365, or any industry-specific platforms—and you need them to work together better—we can help you modernize. Every business deserves enterprise-grade capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200 flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-slate-900 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-slate-700">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              The Team
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                StrataXM is led by Joshua Poston, who has spent years building analytics platforms and automation systems inside complex organizations—from enterprise analytics to data infrastructure for veterans services.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We've seen what works at scale, and we bring that expertise to growing businesses. We're not selling theory—we're bringing real capability, adapted for organizations that need results without the overhead of hiring a full data team.
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
              Let's build something better
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Start with a Discovery Sprint. We'll map your systems, understand your challenges, and build a roadmap that makes sense for your business.
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

export default About;