
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 bg-cyber border-b border-cyber-light/30 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-cyber-glow animate-pulse-slow" />
            <span className="font-space text-xl font-bold text-white">Praveen K</span>
          </div>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex md:items-center absolute md:relative top-16 md:top-0 left-0 right-0 bg-cyber md:bg-transparent flex-col md:flex-row items-start md:space-x-8 p-4 md:p-0 space-y-4 md:space-y-0 shadow-md md:shadow-none z-50`}>
            <a href="#home" className="text-gray-300 hover:text-cyber-glow transition-colors">Home</a>
            <a href="#education" className="text-gray-300 hover:text-cyber-glow transition-colors">Education</a>
            <a href="#projects" className="text-gray-300 hover:text-cyber-glow transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-cyber-glow transition-colors">Skills</a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button 
              onClick={toggleTheme}
              variant="outline" 
              size="icon" 
              className="bg-transparent border-cyber-light/30 text-gray-300 hover:text-cyber-glow hover:border-cyber-glow/50"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button className="cyber-button-outline hidden md:flex">
              Contact Me
            </Button>
            
            <Button 
              className="cyber-button md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
