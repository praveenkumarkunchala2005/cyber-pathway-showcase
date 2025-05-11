
import React from 'react';
import { Code, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer id="contact" className="py-12 px-4 md:px-8 bg-cyber-dark border-t border-cyber-light/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cyber-glow/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyber-accent/5 rounded-full blur-[50px]"></div>
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <Code className="h-5 w-5 text-cyber-glow" />
              <span className={`font-space text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                Praveen Kumar Kunchala<span className="text-cyber-accent"></span>
              </span>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-sm text-center md:text-left`}>
              Full-stack developer specializing in responsive, modern web applications with expertise in React, Node.js, and related technologies.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://github.com/praveenkumarkunchala2005" 
                className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} hover:text-cyber-glow transition-colors`}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/praveen-kumar-kunchala/" 
                className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} hover:text-cyber-glow transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className={`font-space font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-2`}>
              Contact Info
            </h3>
            <a href="mailto:praveenkumarkunchala1122@gmail.com" className="footer-link text-sm flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyber-accent" />
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>praveenkumarkunchala1122@gmail.com</span>
            </a>
            <a href="tel:+919347368517" className="footer-link text-sm flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyber-accent" />
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>+91 9347368517</span>
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className={`font-space font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-2`}>
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <a href="#home" className="footer-link text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Home</span>
              </a>
              <a href="#education" className="footer-link text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Education</span>
              </a>
              <a href="#projects" className="footer-link text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Projects</span>
              </a>
              <a href="#skills" className="footer-link text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Skills</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`border-t ${theme === 'dark' ? 'border-cyber-light/20' : 'border-cyber-light/50'} pt-6 mt-6 text-center`}>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Praveen Kumar Kunchala | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
