
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-cyber border-t border-cyber-light/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-5 w-5 text-cyber-glow" />
            <span className="font-space text-lg font-bold text-white">CyberPortfolio</span>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} | Designed with a focus on cybersecurity
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyber-glow transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-glow transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-glow transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
