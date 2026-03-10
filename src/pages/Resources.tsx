import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Database, TrendingUp, Target, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const concepts = [
    {
      term: 'Business Intelligence (BI)',
      slug: 'business-intelligence',
      explanation: 'Business intelligence means turning your raw operational data — sales, costs, customer activity, job records — into clear, organized reporting you can actually use. Instead of logging into five systems to piece together what happened last month, BI gives you one place where the numbers are already consolidated, reconciled, and presented in a way that makes sense.',
      whyItMatters: 'Most small businesses have more data than they realize. The problem isn\'t a lack of information — it\'s that the information is scattered, conflicting, and hard to access. BI solves that. It\'s the foundation for everything else: forecasting, profitability analysis, and confident decision-making.',
      icon: <Database className="w-8 h-8" />
    },
    {
      term: 'Revenue Forecasting',
      slug: 'revenue-forecasting',
      explanation: 'Revenue forecasting uses your historical data — patterns, seasonality, growth trends, customer behavior — to project what revenue is likely to look like over the next quarter or year. It\'s not a goal or a wish. It\'s a data-driven estimate of what\'s probable, with a realistic range built around it.',
      whyItMatters: 'You can\'t manage cash flow, plan hiring, or decide whether to take on new overhead without knowing what revenue is likely to be. Banks want projections for financing. Operators need them for planning. A reliable forecast turns "I hope next quarter is good" into "here\'s what we expect and why."',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      term: 'Profitability Analysis',
      slug: 'profitability-analysis',
      explanation: 'Top-line revenue can look healthy while certain customers, jobs, locations, or service lines quietly drain margin. Profitability analysis breaks down your business at the level that matters — by customer, product, service type, or location — so you can see exactly where you\'re making money and where you\'re not.',
      whyItMatters: 'Many businesses are surprised to find that 20% of their customers generate most of their profit — and another 20% are barely breaking even or losing money. You can\'t make smart pricing, capacity, or growth decisions without knowing where the margin actually lives.',
      icon: <Target className="w-8 h-8" />
    },
    {
      term: 'Scenario Modeling',
      slug: 'scenario-modeling',
      explanation: 'Scenario modeling means building a mathematical representation of your business and running decisions through it before you commit. What happens to cash flow if you hire two people? What\'s the break-even on a new location? What if a major contract ends early? Run the numbers first, then decide.',
      whyItMatters: 'Major business decisions involve real financial risk. Scenario modeling lets you quantify that risk and compare options with actual numbers instead of gut instinct. It\'s how you walk into a negotiation — or a bank meeting — with something credible to show.',
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  const scenarios = [
    {
      situation: 'Opening a Second Location',
      before: 'You believe a second location will work based on the success of your first. You have general instincts about demand and cost — but banks want financial projections, and you\'re largely estimating.',
      after: 'We build a forecast model using your existing location\'s performance, adjusted for local market conditions, competition, and realistic ramp-up timelines. You see projected revenue, break-even timeline, and downside risk — before you sign a lease.',
      impact: 'You secure financing with credible projections. You know what success looks like — and what failure looks like — before committing capital.'
    },
    {
      situation: 'Evaluating a Large Contract',
      before: 'A customer offers you a contract worth 30% of current revenue. The number looks attractive, but it requires new hires and equipment. You\'re not sure if the margins justify the fixed cost commitment — or what happens if the contract ends early.',
      after: 'We model cash flow, margin, and capacity under multiple scenarios — including early termination and cost overruns. The analysis shows exactly where break-even is and what conditions have to hold for the deal to make sense.',
      impact: 'You negotiate better terms based on quantified risk. You accept — or decline — with clear financial guardrails instead of hoping it works out.'
    },
    {
      situation: 'Deciding Whether to Raise Prices',
      before: 'Your costs are up. Your prices haven\'t changed in two years. You want to raise rates but you\'re worried about losing customers — and you don\'t know how much revenue is actually at risk.',
      after: 'We analyze your customer mix, margin by segment, and historical retention patterns. We model revenue impact under different pricing scenarios and quantify the customer churn risk at each price point.',
      impact: 'You implement a pricing strategy backed by data. Revenue improves without losing the volume you were worried about.'
    }
  ];

  const faqs = [
    {
      question: 'How is working with StrataXM different from hiring a full-time analyst?',
      answer: 'A full-time data analyst or BI developer typically costs $80,000–$120,000 per year before benefits — and that person still needs data infrastructure to work from, which is a separate build. We provide both the infrastructure and the ongoing analytical capability as a service. You get enterprise-level BI without the overhead of building and staffing an internal team.'
    },
    {
      question: 'What does "business intelligence for small business" actually mean in practice?',
      answer: 'For most small businesses, it starts with one problem: your systems don\'t agree. QuickBooks says one revenue number, your POS says another, and Excel has a third. BI means connecting those systems into one reliable source, building automated reporting that runs without manual work, and surfacing the analysis that helps you run the business — profitability by customer, trend tracking, performance against plan. It\'s not exotic. It\'s just your data, organized and working for you.'
    },
    {
      question: 'What if my data is a mess right now?',
      answer: 'That\'s the norm, not the exception. Messy, scattered data is the starting point for most of our engagements. We build the data foundation first — connecting your systems, cleaning up conflicts, establishing a single source of truth — before we layer on reporting and analysis. If key data doesn\'t exist yet, we tell you exactly what needs to be collected and why.'
    },
    {
      question: 'How long before we see results?',
      answer: 'Most clients have initial reporting and a consolidated data foundation within 6–10 weeks, depending on how many systems are involved. Profitability analysis and forecasting work can begin as soon as clean data exists. Most engagements produce actionable insights within 60–90 days of kickoff.'
    },
    {
      question: 'Do you work with businesses outside of Louisiana?',
      answer: 'Yes. Our clients are across industries and geographies. We\'re based in Central Louisiana, but our work is entirely remote-capable. If you have the data and the decisions to make, location doesn\'t matter.'
    },
    {
      question: 'Do you guarantee forecast accuracy?',
      answer: 'No forecast is a guarantee — and anyone who promises one is selling something. What we provide is rigorous analysis with documented assumptions, clear methodology, and an honest range of outcomes. You understand what the model says, why it says it, and where the uncertainty lives. That\'s the difference between a credible projection and a guess.'
    },
    {
      question: 'What tools and software do you use?',
      answer: 'We use whatever fits the problem and the client\'s environment. The tools are not the deliverable — the analysis and the infrastructure are. We evaluate each engagement based on what will actually work best for your systems, your team, and your budget, and we recommend accordingly.'
    },
    {
      question: 'Is this only for businesses that are growing?',
      answer: 'No. The need for data-backed decisions doesn\'t change based on growth stage. Businesses managing cost reduction, evaluating whether to stay flat or contract, or trying to stabilize operations need the same analytical clarity. The questions are different; the approach is the same.'
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
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
              Small Business Analytics Guide
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Business Intelligence for Small Business — What It Is and When You Need It
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Plain-English explanations of BI, revenue forecasting, profitability analysis, and decision modeling — what each one means, what it costs you not to have it, and how it applies to real business decisions.
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
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              The Core Concepts — In Plain English
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most small business owners hear terms like "business intelligence" and assume it's for larger companies. It's not. Here's what each concept actually means — and why it matters at your scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                id={concept.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl border border-slate-200 p-8"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                  {concept.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {concept.term}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {concept.explanation}
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-slate-900">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Why it matters for your business:</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {concept.whyItMatters}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How Data-Backed Decisions Work in Practice
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Abstract concepts are easy to understand. Here's what the difference between guessing and knowing actually looks like — across the decisions small business owners face most often.
            </p>
          </motion.div>

          <div className="space-y-8">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    {scenario.situation}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        Without analytics
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {scenario.before}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                        With StrataXM
                      </h4>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {scenario.after}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-lg p-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                      The outcome
                    </h4>
                    <p className="text-slate-200 leading-relaxed text-sm">
                      {scenario.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Honest answers to the questions business owners ask most before engaging with a BI or analytics partner.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 bg-slate-50 hover:bg-slate-100 transition-colors duration-200 text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4">{item.question}</span>
                  {openFaq === index
                    ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  }
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-white border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Link Bridge */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            {[
              { label: 'See how we work', desc: 'The three problems we solve and what that looks like in practice', to: '/services', cta: 'View Services' },
              { label: 'Industries we serve', desc: 'Healthcare, retail, service businesses, construction and contracting', to: '/about', cta: 'About StrataXM' },
              { label: 'Start a conversation', desc: 'Tell us about your data situation. We\'ll tell you whether we can help.', to: '/contact', cta: 'Get in Touch' },
            ].map((link, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{link.label}</p>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{link.desc}</p>
                <Link
                  to={link.to}
                  className="text-sm font-semibold text-slate-900 inline-flex items-center hover:gap-2 transition-all duration-200"
                >
                  {link.cta} <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
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
              Ready to put your data to work?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tell us about the decision you're facing and the data you have. We'll tell you whether we can help and what that engagement would look like.
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
