import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, Zap, Brain, Settings, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCards, setExpandedCards] = useState<{[key: string]: boolean}>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const glossaryTerms = [
    {
      term: 'Automation',
      definition: 'Making tasks happen automatically without human involvement. Like setting up your coffee maker to brew at 7 AM every day.',
      example: 'Automatically sending welcome emails to new customers instead of typing each one manually.'
    },
    {
      term: 'Artificial Intelligence (AI)',
      definition: 'Computer systems that can perform tasks that typically require human intelligence, like understanding text or recognizing patterns.',
      example: 'A chatbot that can answer customer questions or software that can sort your emails by importance.'
    },
    {
      term: 'Integration',
      definition: 'Connecting different software programs so they can share information automatically.',
      example: 'When a customer places an order on your website, it automatically updates your inventory and accounting software.'
    },
    {
      term: 'Workflow',
      definition: 'The series of steps needed to complete a business task from start to finish.',
      example: 'The process of handling a customer complaint: receive complaint → assign to team member → investigate → respond to customer → close ticket.'
    },
    {
      term: 'Dashboard',
      definition: 'A single screen that shows you the most important information about your business in real-time.',
      example: 'One page that shows your daily sales, top customers, inventory levels, and outstanding invoices.'
    },
    {
      term: 'API',
      definition: 'A way for different software programs to talk to each other and share information.',
      example: 'How your online store can automatically check shipping rates from FedEx without you having to visit their website.'
    },
    {
      term: 'Cloud Computing',
      definition: 'Using software and storing data on the internet instead of on your computer.',
      example: 'Using Gmail instead of Outlook, or storing files in Google Drive instead of on your hard drive.'
    },
    {
      term: 'Data Analytics',
      definition: 'Looking at your business information to find patterns and make better decisions.',
      example: 'Discovering that customers who buy product A usually also buy product B, so you can recommend B to future A buyers.'
    },
    {
      term: 'CRM',
      definition: 'Customer Relationship Management - software that keeps track of all your interactions with customers.',
      example: 'A system that remembers every email, phone call, and purchase for each customer so anyone on your team can help them.'
    },
    {
      term: 'ERP',
      definition: 'Enterprise Resource Planning - software that manages all your business operations in one place.',
      example: 'A system that handles your inventory, accounting, customer orders, and employee schedules all together.'
    }
  ];

  const automationTools = [
    {
      name: 'Microsoft Power Platform',
      category: 'Business Automation',
      description: 'A suite of tools from Microsoft that helps businesses automate processes and create simple applications without coding.',
      bestFor: 'Businesses already using Microsoft Office who want to automate workflows and create custom solutions.',
      cost: 'Mid-range pricing, often bundled with Microsoft subscriptions',
      complexity: 'Beginner to Intermediate',
      examples: [
        'Automatically approve expense reports under $100',
        'Send reminder emails for overdue invoices',
        'Create a simple app to track customer requests'
      ]
    },
    {
      name: 'Make.com (formerly Integromat)',
      category: 'Integration & Automation',
      description: 'A visual platform that connects different apps and automates workflows between them.',
      bestFor: 'Businesses that use many different software tools and want them to work together seamlessly.',
      cost: 'Affordable, pay-per-use pricing',
      complexity: 'Beginner to Intermediate',
      examples: [
        'When someone fills out a contact form, add them to your email list and CRM',
        'Automatically save email attachments to cloud storage',
        'Post new blog articles to all your social media accounts'
      ]
    },
    {
      name: 'Zapier',
      category: 'App Integration',
      description: 'Connects over 5,000 apps to automate workflows without any coding required.',
      bestFor: 'Small to medium businesses wanting simple automations between popular apps.',
      cost: 'Affordable, subscription-based',
      complexity: 'Beginner',
      examples: [
        'Add new customers from your website to your email marketing tool',
        'Create calendar events from new project tasks',
        'Send Slack notifications for new sales'
      ]
    },
    {
      name: 'UiPath',
      category: 'Robotic Process Automation (RPA)',
      description: 'Advanced automation software that can perform complex, repetitive computer tasks just like a human would.',
      bestFor: 'Larger businesses with complex, high-volume repetitive tasks.',
      cost: 'Higher cost, enterprise-focused',
      complexity: 'Advanced',
      examples: [
        'Automatically process hundreds of invoices',
        'Extract data from PDFs and enter it into databases',
        'Handle insurance claims processing'
      ]
    },
    {
      name: 'Monday.com',
      category: 'Project Management & Automation',
      description: 'A work management platform with built-in automation features for project tracking and team collaboration.',
      bestFor: 'Teams that need project management with simple automation features.',
      cost: 'Mid-range, per-user pricing',
      complexity: 'Beginner to Intermediate',
      examples: [
        'Automatically assign tasks based on project type',
        'Send status updates to clients when milestones are reached',
        'Move tasks through different stages automatically'
      ]
    },
    {
      name: 'Airtable',
      category: 'Database & Automation',
      description: 'A flexible database tool that combines the simplicity of a spreadsheet with automation capabilities.',
      bestFor: 'Businesses that need organized data with simple automation features.',
      cost: 'Affordable to mid-range',
      complexity: 'Beginner to Intermediate',
      examples: [
        'Automatically categorize customer inquiries',
        'Send follow-up emails based on customer status',
        'Track inventory and alert when items are low'
      ]
    }
  ];

  const aiTools = [
    {
      name: 'ChatGPT for Business',
      category: 'Conversational AI',
      description: 'AI-powered chatbot that can understand and respond to customer questions, write content, and assist with various business tasks.',
      bestFor: 'Businesses wanting to improve customer service or need help with content creation.',
      cost: 'Affordable monthly subscription',
      complexity: 'Beginner',
      examples: [
        'Answer common customer questions 24/7',
        'Write product descriptions and marketing copy',
        'Help draft emails and proposals'
      ]
    },
    {
      name: 'Salesforce Einstein',
      category: 'Sales & Marketing AI',
      description: 'AI features built into Salesforce that help predict customer behavior and automate sales processes.',
      bestFor: 'Businesses already using Salesforce who want smarter sales insights.',
      cost: 'Premium add-on to Salesforce',
      complexity: 'Intermediate',
      examples: [
        'Predict which leads are most likely to buy',
        'Automatically score and prioritize opportunities',
        'Suggest the best time to contact prospects'
      ]
    },
    {
      name: 'Microsoft Copilot',
      category: 'Productivity AI',
      description: 'AI assistant integrated into Microsoft Office apps that helps with writing, analysis, and task automation.',
      bestFor: 'Businesses using Microsoft Office who want AI assistance with daily tasks.',
      cost: 'Add-on to Microsoft 365 subscription',
      complexity: 'Beginner',
      examples: [
        'Summarize long email threads',
        'Create PowerPoint presentations from bullet points',
        'Analyze Excel data and create charts'
      ]
    },
    {
      name: 'HubSpot AI',
      category: 'Marketing & Sales AI',
      description: 'AI features within HubSpot that help with content creation, lead scoring, and customer insights.',
      bestFor: 'Small to medium businesses using HubSpot for marketing and sales.',
      cost: 'Included with higher HubSpot tiers',
      complexity: 'Beginner to Intermediate',
      examples: [
        'Write blog posts and social media content',
        'Predict customer lifetime value',
        'Automatically segment customers for targeted campaigns'
      ]
    },
    {
      name: 'Tableau with AI',
      category: 'Business Intelligence AI',
      description: 'Data visualization software with AI features that help you understand your business data better.',
      bestFor: 'Businesses with lots of data who want to make better decisions.',
      cost: 'Higher cost, per-user licensing',
      complexity: 'Intermediate to Advanced',
      examples: [
        'Automatically find trends in your sales data',
        'Predict future business performance',
        'Get plain-English explanations of complex data'
      ]
    },
    {
      name: 'Intercom Resolution Bot',
      category: 'Customer Service AI',
      description: 'AI-powered customer service bot that can resolve common customer issues automatically.',
      bestFor: 'Businesses with high customer service volume and repetitive questions.',
      cost: 'Add-on to Intercom subscription',
      complexity: 'Intermediate',
      examples: [
        'Answer frequently asked questions instantly',
        'Help customers reset passwords or update accounts',
        'Route complex issues to the right human agent'
      ]
    }
  ];

  const filteredGlossary = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAutomation = automationTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAI = aiTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Business <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Everything you need to understand automation and AI for your business. 
              No technical jargon, just clear explanations in plain English.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#glossary" className="flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200">
              <Book className="w-5 h-5" />
              <span className="font-medium">Glossary</span>
            </a>
            <a href="#automation" className="flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200">
              <Zap className="w-5 h-5" />
              <span className="font-medium">Automation Tools</span>
            </a>
            <a href="#ai" className="flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200">
              <Brain className="w-5 h-5" />
              <span className="font-medium">AI Technologies</span>
            </a>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section id="glossary" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Book className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                Business Technology Glossary
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Common terms explained in simple language, with real business examples.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGlossary.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.term}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.definition}
                </p>
                <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
                  <p className="text-sm text-cyan-800">
                    <strong>Example:</strong> {item.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Tools Section */}
      <section id="automation" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                Automation Technologies
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Popular automation tools and platforms, explained in terms of what they can do for your business.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredAutomation.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {tool.name}
                      </h3>
                      <span className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tool.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleCard(`automation-${index}`)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                    >
                      {expandedCards[`automation-${index}`] ? 
                        <ChevronUp className="w-5 h-5 text-slate-500" /> : 
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      }
                    </button>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Best For:</h4>
                      <p className="text-sm text-slate-600">{tool.bestFor}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Cost:</h4>
                      <p className="text-sm text-slate-600">{tool.cost}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Complexity:</h4>
                      <p className="text-sm text-slate-600">{tool.complexity}</p>
                    </div>
                  </div>

                  {expandedCards[`automation-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-100 pt-4"
                    >
                      <h4 className="font-semibold text-slate-900 mb-3">Real Business Examples:</h4>
                      <ul className="space-y-2">
                        {tool.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section id="ai" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Brain className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                AI Technologies
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Artificial intelligence tools that can help your business work smarter, not harder.
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredAI.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {tool.name}
                      </h3>
                      <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tool.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleCard(`ai-${index}`)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                    >
                      {expandedCards[`ai-${index}`] ? 
                        <ChevronUp className="w-5 h-5 text-slate-500" /> : 
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      }
                    </button>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Best For:</h4>
                      <p className="text-sm text-slate-600">{tool.bestFor}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Cost:</h4>
                      <p className="text-sm text-slate-600">{tool.cost}</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3">
                      <h4 className="font-medium text-slate-900 mb-1">Complexity:</h4>
                      <p className="text-sm text-slate-600">{tool.complexity}</p>
                    </div>
                  </div>

                  {expandedCards[`ai-${index}`] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-slate-100 pt-4"
                    >
                      <h4 className="font-semibold text-slate-900 mb-3">What It Can Do:</h4>
                      <ul className="space-y-2">
                        {tool.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              These resources are just the beginning. Let's talk about which technologies 
              would work best for your specific business situation.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:from-cyan-600 hover:to-cyan-700 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center group"
            >
              Get Personalized Recommendations
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;