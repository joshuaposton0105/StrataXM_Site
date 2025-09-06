import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">StrataXM</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Building the data infrastructure that makes Louisiana businesses AI-ready and competitive.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:josh@strataxm.com"
                className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail size={20} />
                <span>josh@strataxm.com</span>
              </a>
              <a
                href="https://linkedin.com/company/strataxm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Data Infrastructure</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400">Data Foundations</span>
              </li>
              <li>
                <span className="text-slate-400">Automated Data Flows</span>
              </li>
              <li>
                <span className="text-slate-400">Insights & AI</span>
              </li>
              <li>
                <span className="text-slate-400">Managed Infrastructure</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} StrataXM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;