import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [openCase, setOpenCase] = useState(null);

  const services = [
    {
      id: 'foundation',
      eyebrow: 'Step 01',
      title: "Your numbers don't agree. Let's fix that.",
      subtitle: 'Data Foundation & Reporting',
      pain: "You ask a simple question — how much did we make last month? — and get three different answers depending on which system you look at. Your team spends hours every week pulling exports, reconciling spreadsheets, and second-guessing every number. Nobody trusts the data, so nobody uses it.",
      outcome: "We connect your systems into one reliable source of truth. Automated reporting that runs without anyone touching it. Numbers your whole team can stand behind.",
      bullets: [
        "Stop reconciling systems manually every month",
        "End the argument about which number is right",
        "Get reports that run themselves",
        "See what's happening in your business without digging for it",
      ],
      caseStudy: {
        business: 'Regional HVAC Contractor',
        problem: 'Job tracking lived in one system, invoicing in another, and job costs in a spreadsheet someone maintained manually. Answering "are we profitable on this customer?" required three days of work and still wasn\'t trustworthy.',
        solution: 'Connected all three systems into a single automated data pipeline. Eliminated the manual spreadsheet entirely. Built a profitability model that updates nightly.',
        result: 'Profitability by customer, service type, and technician — available in real time. Monthly financial close went from two weeks to three days. The spreadsheet no longer exists.'
      }
    },
    {
      id: 'analytics',
      eyebrow: 'Step 02',
      title: "You can see what happened. Now understand why.",
      subtitle: 'Performance Analytics',
      pain: "You have reports. Maybe even a dashboard someone built two years ago. But when something goes wrong — a slow month, a margin problem, a customer segment that's quietly bleeding money — you can't pinpoint it fast enough to do anything about it. You're reacting instead of leading.",
      outcome: "We turn your data into analysis that explains your business: what's driving profit, where you're losing money, what's trending in the wrong direction before it becomes a problem.",
      bullets: [
        "Know which customers, jobs, or products are actually profitable",
        "Catch margin problems before they hit the P&L",
        "Understand seasonal patterns and plan around them",
        "Stop reacting to surprises — see them coming",
      ],
      caseStudy: {
        business: 'Multi-Location Healthcare Practice',
        problem: 'Revenue looked healthy at the top line, but the owner suspected some service lines were underperforming. Without clean per-service profitability data, there was no way to know where to focus — or what to cut.',
        solution: 'Built service-line and provider-level profitability reporting. Layered in payer mix analysis and referral source tracking. Surfaced which services were growing and which were silently dragging margins.',
        result: 'Two underperforming service lines identified and restructured within 90 days. Referral source data redirected marketing spend. Net margin improved without adding revenue.'
      }
    },
    {
      id: 'decisions',
      eyebrow: 'Step 03',
      title: "Big decision ahead. Know the real risk before you commit.",
      subtitle: 'Decision Modeling & Forecasting',
      pain: "You're staring down a major decision — a new location, a big contract, a pricing change, new equipment — and your gut says yes but you can't back it up with numbers. Your accountant can tell you what happened last year. Nobody's telling you what's likely to happen next.",
      outcome: "We model the decision before you make it. Revenue forecasts, scenario analysis, break-even timelines, cash flow projections. You see the best case, the worst case, and everything in between — before you sign anything.",
      bullets: [
        "Forecast revenue with confidence, not guesswork",
        "Model expansion before you commit capital",
        "Know your break-even before you hire or lease",
        "Walk into any negotiation with real numbers behind you",
      ],
      caseStudy: {
        business: 'Specialty Manufacturing Company',
        problem: 'A large contract offer looked attractive on the surface but required hiring three people and leasing new equipment. The owner couldn\'t tell if the margins justified the fixed cost increase — or what happened to the business if the contract ended early.',
        solution: 'Built a scenario model projecting cash flow, margin, and capacity utilization under multiple outcomes. Modeled early termination risk and the conditions under which the deal stopped making sense.',
        result: 'Analysis showed break-even at month 7, contingent on utilization staying above 65%. The owner negotiated a longer commitment period before accepting. A competitor took the original terms. They were out of business within a year.'
      }
    }
  ];

  const pains = [
    "My reports take days to pull together and I still don't trust them",
    "I don't know which part of my business is actually making money",
    "I'm about to make a big decision and I'm flying blind",
    "My team argues about which numbers are right",
    "I know something's wrong but I can't pinpoint it",
    "My accountant tells me what happened — nobody tells me what's coming",
  ];

  return (
    <div className="pt-16 lg:pt-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-6">
              What We Do
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Your business is generating data every day.<br />
              <span className="text-slate-400">Most of it isn't working for you.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
              We turn scattered, conflicting business data into clear answers — what's driving profit, what's coming next, and whether the decision in front of you is worth the risk. No in-house analytics team required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Strip */}
      <section className="bg-slate-100 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">
            Sound familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pains.map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg px-5 py-4 border border-slate-200 text-slate-700 text-sm leading-relaxed"
              >
                <span className="text-slate-400 mr-2">"</span>
                {pain}
                <span className="text-slate-400">"</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="max-w-4xl mb-12">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {service.eyebrow} &mdash; {service.subtitle}
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {service.pain}
                </p>
                <p className="text-lg font-semibold text-slate-900 leading-relaxed">
                  {service.outcome}
                </p>
              </div>

              {/* Two Column */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">

                {/* Bullets */}
                <div className="bg-slate-900 rounded-xl p-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                    What this means for you
                  </p>
                  <ul className="space-y-4">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <ArrowRight className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                        <span className="text-white text-base leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Toggle */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenCase(openCase === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between px-8 py-6 bg-white hover:bg-slate-50 transition-colors duration-200"
                  >
                    <div className="text-left">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                        Case Study
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        {service.caseStudy.business}
                      </p>
                    </div>
                    {openCase === service.id
                      ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    }
                  </button>

                  <AnimatePresence>
                    {openCase === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 bg-white border-t border-slate-100 space-y-6 pt-6">
                          {[
                            { label: 'The Problem', text: service.caseStudy.problem },
                            { label: 'What We Did', text: service.caseStudy.solution },
                            { label: 'The Result', text: service.caseStudy.result },
                          ].map(({ label, text }) => (
                            <div key={label}>
                              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                                {label}
                              </p>
                              <p className="text-slate-700 leading-relaxed text-sm">{text}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* How It Fits Together */}
      <section className="py-20 lg:py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TrendingUp className="w-10 h-10 text-slate-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Most businesses don't start at Step 3.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              You can't forecast revenue on data you don't trust. You can't model decisions without understanding your current performance. The three services above build on each other — and most of our clients start at Step 1, whether they expected to or not.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              We meet you where you are. Some clients need everything. Some need one thing done right. We'll tell you honestly where to start and why.
            </p>
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
              What problem are you trying to solve?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Tell us about your data situation and the decisions you need to make. We'll tell you whether we can help and what that would look like.
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

export default Services;
