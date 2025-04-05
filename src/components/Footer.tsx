
import React from 'react';
import { Shield, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-8 bg-cyber border-t border-cyber-light/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-cyber-glow" />
              <span className="font-space text-lg font-bold text-white">Praveen Kumar Kunchala</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              Aspiring cybersecurity engineer focused on building secure applications
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a href="mailto:praveenkumarkunchala1122@gmail.com" className="contact-item text-sm">
              <Mail className="h-4 w-4" />
              <span>praveenkumarkunchala1122@gmail.com</span>
            </a>
            <a href="tel:+919347368517" className="contact-item text-sm">
              <Phone className="h-4 w-4" />
              <span>+91 9347368517</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-cyber-glow transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyber-glow transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400">
          © {new Date().getFullYear()} Praveen Kumar Kunchala | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
