import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, Database, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Database className="w-7 h-7" />,
      step: '01',
      title: 'Your numbers don\'t agree.',
      description: 'We connect your scattered systems into one source of truth. Clean data. Automated reporting. Numbers your team can actually stand behind.',
      link: '/services#foundation'
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      step: '02',
      title: 'You can see what happened. Not why.',
      description: 'We turn reliable data into analysis that explains your business — what\'s driving profit, what\'s trending wrong, and where the margin is quietly disappearing.',
      link: '/services#analytics'
    },
    {
      icon: <Target className="w-7 h-7" />,
      step: '03',
      title: 'Big decision. No real numbers to back it up.',
      description: 'We model the decision before you make it. Revenue forecasts, scenario analysis, break-even timelines. You see every outcome before you commit.',
      link: '/services#decisions'
    }
  ];

  const proofPoints = [
    {
      metric: '3 days',
      context: 'vs. two weeks',
      description: 'Monthly financial close for a regional contractor after consolidating three disconnected systems'
    },
    {
      metric: '8%',
      context: 'variance',
      description: 'How close a restaurant group\'s actual year-one revenue came to our forecast — used to secure bank financing'
    },
    {
      metric: '90 days',
      context: 'to results',
      description: 'Time from engagement start to identified margin improvements for a multi-location healthcare practice'
    }
  ];

  const whoWeServe = [
    'Healthcare & medical practices',
    'Retail & point-of-sale businesses',
    'Service & field operations',
    'Construction & contracting',
  ];

  return (
    <div className="overflow-hidden">

      {/* Hero */}
      <section className="relative bg-slate-900 pt-24 lg:pt-40 pb-24 lg:pb-40 overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-8"
            >
              Business Intelligence for Small & Mid-Sized Business
            </motion.p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Your business runs on data.<br />
              <span className="text-slate-400">Most of it isn't telling you anything.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
              StrataXM turns scattered, conflicting business data into clear answers about profit, performance, and risk — without the overhead of an in-house analytics team.
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

      {/* The Gap We Fill */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                The Gap We Fill
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Large companies have analytics teams. You have us.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Enterprise businesses employ entire departments to consolidate data, build forecasts, and model decisions. Small and mid-sized businesses face the exact same challenges — and make the same size mistakes — without any of that infrastructure.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                StrataXM stands in that gap. We bring the analytical capability that growing businesses need — without requiring you to hire, train, or manage a team to support it.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { left: 'Enterprise', right: 'StrataXM client' },
                { left: 'In-house data engineering team', right: 'We build it, we own it' },
                { left: 'Dedicated BI analysts', right: 'We run the analysis' },
                { left: 'Financial planning & strategy staff', right: 'We model the decisions' },
                { left: 'Ongoing internal maintenance', right: 'We stay with you' },
              ].map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`grid grid-cols-2 gap-4 rounded-lg px-5 py-4 ${index === 0 ? 'bg-slate-900' : 'bg-slate-50 border border-slate-200'}`}
                >
                  <span className={`text-sm font-medium ${index === 0 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {row.left}
                  </span>
                  <span className={`text-sm font-semibold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {row.right}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
              Three Problems We Solve
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Where do you recognize yourself?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-white rounded-xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-200 group h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <span className="text-3xl font-bold text-slate-100">{service.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold text-slate-900 inline-flex items-center group-hover:gap-2 transition-all duration-200">
                    See how it works
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
              Results
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              What this actually looks like in practice
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-slate-700 rounded-xl p-8"
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold text-white">{point.metric}</span>
                  <span className="text-slate-400 text-sm ml-2">{point.context}</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                Who We Work With
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Built for businesses that are past the startup stage and need to operate smarter.
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                We work with owners and operators who've outgrown spreadsheets and gut instinct — and know it. The decisions are bigger now. The margin for error is smaller. And the data to make those calls confidently exists somewhere in their systems. They just can't get to it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whoWeServe.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-5"
                >
                  <span className="font-semibold text-slate-900">{industry}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.32 }}
                className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-5 sm:col-span-2"
              >
                <span className="font-semibold text-slate-500 text-sm">
                  If your business generates real operational data and you're making decisions that matter — we should talk.
                </span>
              </motion.div>
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
              Ready to trust your numbers?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              We start by understanding your systems, your data, and the decisions you're facing. You'll leave with a clear picture of what needs to happen and why it matters.
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

export default Home;
