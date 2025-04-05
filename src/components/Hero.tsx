
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background elements - cyber-themed grid */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyber-glow/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyber-accent/10 border border-cyber-accent/30 mb-6">
            <Shield className="w-4 h-4 mr-2 text-cyber-glow" />
            <span className="text-sm font-medium text-cyber-glow">Computer Science with Cyber Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-6 tracking-tight">
            Building a <span className="cyber-highlight">Secure</span> Digital Future
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Aspiring cybersecurity engineer focused on creating robust security solutions.
            Currently pursuing B.Tech in Computer Science Engineering with a specialization in Cyber Security.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button className="cyber-button group flex items-center">
              View Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="cyber-button-outline">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
