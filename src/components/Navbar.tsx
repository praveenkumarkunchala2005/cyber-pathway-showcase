
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="py-4 px-4 md:px-8 bg-cyber border-b border-cyber-light/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-glow animate-pulse-slow" />
            <span className="font-space text-xl font-bold text-white">CyberPortfolio</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-cyber-glow transition-colors">Home</a>
            <a href="#education" className="text-gray-300 hover:text-cyber-glow transition-colors">Education</a>
            <a href="#skills" className="text-gray-300 hover:text-cyber-glow transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-cyber-glow transition-colors">Projects</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button className="cyber-button-outline hidden md:flex">
              Contact Me
            </Button>
            <Button className="cyber-button md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
