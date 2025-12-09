import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, TrendingUp, Target, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const concepts = [
    {
      term: 'Single Source of Truth',
      explanation: 'Your QuickBooks says one revenue number. Your POS says another. Excel says a third. A single source of truth means one authoritative database where all your business data lives, reconciled and consistent. Everything else pulls from this source.',
      whyItMatters: 'You can\'t forecast revenue or model decisions if different systems show different numbers. Clean, consolidated data is the foundation for everything else.',
      icon: <Database className="w-8 h-8" />
    },
    {
      term: 'Revenue Forecasting',
      explanation: 'Statistical models that predict future revenue based on historical patterns, seasonality, economic factors, and leading indicators. Not a guess. Not a goal. A probability-weighted projection with confidence intervals.',
      whyItMatters: 'Banks want projections for loans. You need cash flow visibility. Hiring and capacity decisions depend on knowing what revenue will likely be three to six months out.',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      term: 'Scenario Modeling',
      explanation: 'Build mathematical models of your business that let you test different decisions before committing. What happens to cash flow if you hire two people? What if the contract ends in month six instead of twelve? Run the scenarios, see the numbers.',
      whyItMatters: 'Major decisions involve risk. Scenario models let you quantify that risk and compare options mathematically instead of guessing.',
      icon: <Target className="w-8 h-8" />
    },
    {
      term: 'Risk Quantification',
      explanation: 'Every business decision involves uncertainty. Risk quantification means putting numbers on that uncertainty: best case, expected case, worst case. What\'s the probability of breaking even? What\'s the downside exposure?',
      whyItMatters: 'You need to know not just what\'s likely to happen, but what could go wrong and how bad it could get. That\'s how you decide if a risk is worth taking.',
      icon: <AlertTriangle className="w-8 h-8" />
    }
  ];

  const realScenarios = [
    {
      situation: 'Opening a New Location',
      before: 'You think a second location will work based on the success of the first one. You have general instincts about market demand and cost structure. Banks want financial projections, but you\'re guessing.',
      after: 'We build a financial model using historical performance from your existing location, adjusted for demographics, competition, and market size. We forecast revenue under different scenarios, model break-even timeline, and quantify risk. You have credible projections backed by data.',
      impact: 'You secure financing with confidence. You know what success looks like and what failure looks like. You\'ve quantified the risk before committing.'
    },
    {
      situation: 'Evaluating a Large Contract',
      before: 'A customer offers you a contract that would be 30% of your current revenue. The numbers look good, but it requires hiring staff and leasing equipment. You\'re not sure if the margins justify the fixed cost commitment.',
      after: 'We model cash flow, profitability, and capacity utilization under different fulfillment scenarios. We quantify what happens if the contract ends early, if costs run over, or if you secure similar additional work. The math shows where the break-even point is and what conditions have to hold.',
      impact: 'You negotiate better terms based on quantified risk. You accept the contract with clear financial guardrails instead of hoping it works out.'
    },
    {
      situation: 'Pricing Decision',
      before: 'Your prices haven\'t changed in three years. Costs are up. Competitors may or may not be charging more. You don\'t know how customers will react to a price increase or what the revenue impact would be.',
      after: 'We analyze historical demand elasticity, model revenue under different pricing scenarios, and quantify the risk of customer churn versus margin improvement. The analysis shows the optimal price point and expected revenue change.',
      impact: 'You implement a pricing strategy backed by data instead of guessing. Revenue increases without losing the volume you were worried about.'
    }
  ];

  const commonQuestions = [
    {
      question: 'How is this different from hiring an analyst?',
      answer: 'A full-time analyst costs $80K-$120K per year plus benefits. You also need someone to build and maintain the data infrastructure they work from. We provide both the infrastructure and the analytical capability as a service. You get enterprise-grade capability at a fraction of the cost of building an internal team.'
    },
    {
      question: 'Do you guarantee your forecasts will be accurate?',
      answer: 'No one can guarantee future outcomes. What we provide is rigorous statistical analysis with documented assumptions, methodology, and confidence intervals. You understand what the model says, why it says it, and where the uncertainty lies. That\'s far better than guessing, but it\'s not a crystal ball.'
    },
    {
      question: 'What if my data is incomplete or messy?',
      answer: 'That\'s normal and part of what we solve. Data engineering comes first precisely because clean, consolidated data is required for statistical analysis. We build the infrastructure that consolidates your systems, then clean and standardize what we need for modeling. If the data doesn\'t exist, we tell you what needs to be collected and why.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Data infrastructure typically takes 6-12 weeks to establish, depending on how many systems you have and how messy the data is. Statistical analysis and scenario modeling can start as soon as clean data exists. Most engagements produce actionable analysis within 2-3 months from start.'
    },
    {
      question: 'Is this only for companies that are growing?',
      answer: 'No. Quantitative decision support matters whether you\'re growing, contracting, or stable. You might need to model cost reduction scenarios instead of expansion. The need is the same: making consequential choices with mathematical backing instead of instinct.'
    },
    {
      question: 'What tools or software do you use?',
      answer: 'We use whatever fits the problem: SQL Server, Azure, Snowflake for data warehousing. Python and R for statistical analysis. Power BI or Tableau for visualization. Excel for financial modeling that business owners understand. The tools are not the deliverable. The analysis and the infrastructure are.'
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
              Understanding Decision Support
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Plain-English explanations of data infrastructure, forecasting, and scenario modeling—what they mean for your business and when you need them.
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
              Key Concepts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl border border-slate-200 p-8"
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
                  <p className="text-sm font-semibold text-slate-900 mb-1">Why it matters:</p>
                  <p className="text-sm text-slate-600">
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Real Business Scenarios
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How quantitative analysis changes decision-making in practice
            </p>
          </motion.div>

          <div className="space-y-12">
            {realScenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg"
              >
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">
                    {scenario.situation}
                  </h3>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
                        Without Quantitative Analysis
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {scenario.before}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
                        With Quantitative Analysis
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {scenario.after}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-lg p-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-2">
                      The Impact
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 lg:py-32 bg-white">
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
          </motion.div>

          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6"
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to apply this to your business?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tell us about the decision you're facing and the data you have. We'll explain whether quantitative analysis can help and what that engagement would look like.
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
