
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background elements - cyber-themed grid and dots */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-indigo-600/20 rounded-full blur-[120px]"></div>
        
        {/* Dot pattern with glow effect */}
        <DotPattern 
          glow={true}
          width={24}
          height={24}
          cr={0.6}
          className={cn(
            "opacity-20",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        
        {/* Second dot pattern layer with different properties for added depth */}
        <DotPattern 
          glow={true}
          width={32}
          height={32}
          cr={0.4}
          className={cn(
            "opacity-10",
            "animate-pulse-slow",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
        />
        
        {/* Third dot pattern layer with larger dots for more visual interest */}
        <DotPattern 
          glow={true}
          width={48}
          height={48}
          cr={0.8}
          className={cn(
            "opacity-15",
            "animate-float",
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/30 mb-6 animate-bounce-slow">
            <Shield className="w-4 h-4 mr-2 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Full Stack Web Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold text-white mb-4 tracking-tight animate-slide-up">
            Praveen Kumar <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">Kunchala</span>
          </h1>

          <p className="text-xl text-gray-300 mb-4 animate-slide-up-delay-1">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-semibold">Modern</span> Web Experiences
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl animate-slide-up-delay-2">
            Passionate full-stack web developer specializing in creating responsive, performant web applications
            with modern technologies like React, Next.js, and Node.js.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up-delay-3">
            <a href="mailto:praveenkumarkunchala1122@gmail.com" className="contact-item hover:scale-105 transition-transform hover:text-violet-400">
              <Mail className="h-5 w-5" />
              <span>praveenkumarkunchala1122@gmail.com</span>
            </a>
            <a href="tel:+919347368517" className="contact-item hover:scale-105 transition-transform hover:text-violet-400">
              <Phone className="h-5 w-5" />
              <span>+91 9347368517</span>
            </a>
            <a href="#" className="contact-item hover:scale-105 transition-transform hover:text-violet-400">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="contact-item hover:scale-105 transition-transform hover:text-violet-400">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up-delay-4">
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 group flex items-center w-full sm:w-auto hover-scale animate-pulse-glow border-0">
              View Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-transparent border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 w-full sm:w-auto hover-scale animate-border-pulse">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
