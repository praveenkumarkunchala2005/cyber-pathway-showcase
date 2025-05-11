
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
  // Add mouse position tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const mouseX = clientX / window.innerWidth;
      const mouseY = clientY / window.innerHeight;
      
      const moveX = mouseX * 25;
      const moveY = mouseY * 25;
      
      const hero = document.getElementById('hero-section');
      if (hero) {
        hero.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
      }
      
      // Subtle movement for dot patterns
      document.querySelectorAll('.interactive-bg').forEach((element) => {
        const speed = Number((element as HTMLElement).dataset.speed) || 0.1;
        const x = moveX * speed;
        const y = moveY * speed;
        (element as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background elements - cyber-themed grid and dots */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-indigo-600/30 rounded-full blur-[120px]"></div>
        
        {/* Dot pattern with glow effect */}
        <DotPattern 
          glow={true}
          width={24}
          height={24}
          cr={0.6}
          className={cn(
            "opacity-20 interactive-bg",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
          data-speed="0.03"
        />
        
        {/* Second dot pattern layer with different properties for added depth */}
        <DotPattern 
          glow={true}
          width={32}
          height={32}
          cr={0.4}
          className={cn(
            "opacity-10 interactive-bg",
            "animate-pulse-slow",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
          data-speed="0.05"
        />
        
        {/* Third dot pattern layer with larger dots for more visual interest */}
        <DotPattern 
          glow={true}
          width={48}
          height={48}
          cr={0.8}
          className={cn(
            "opacity-15 interactive-bg",
            "animate-float",
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
          data-speed="0.07"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 border border-violet-500/30 mb-6 animate-bounce-slow">
            <Shield className="w-4 h-4 mr-2 text-violet-400" />
            <span className={`text-sm font-medium ${theme === 'dark' ? 'text-violet-300' : 'text-violet-600'}`}>Full Stack Web Developer</span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-space font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-4 tracking-tight animate-slide-up`}>
            Praveen Kumar <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">Kunchala</span>
          </h1>

          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-4 animate-slide-up-delay-1`}>
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400 font-semibold">Modern</span> Web Experiences
          </p>
          
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-2xl animate-slide-up-delay-2`}>
            Passionate full-stack web developer specializing in creating responsive, performant web applications
            with modern technologies like React.js and Node.js.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up-delay-3">
            <a href="mailto:praveenkumarkunchala1122@gmail.com" className="contact-item hover:scale-105 transition-transform hover:text-violet-400 group">
              <Mail className="h-5 w-5 group-hover:text-violet-400" />
              <span>praveenkumarkunchala1122@gmail.com</span>
            </a>
            <a href="tel:+919347368517" className="contact-item hover:scale-105 transition-transform hover:text-violet-400 group">
              <Phone className="h-5 w-5 group-hover:text-violet-400" />
              <span>+91 9347368517</span>
            </a>
            <a href="https://www.linkedin.com/in/praveen-kumar-kunchala/" className="contact-item hover:scale-105 transition-transform hover:text-violet-400 group">
              <Linkedin className="h-5 w-5 group-hover:text-violet-400" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/praveenkumarkunchala2005" className="contact-item hover:scale-105 transition-transform hover:text-violet-400 group">
              <Github className="h-5 w-5 group-hover:text-violet-400" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up-delay-4">
            <a href="https://drive.google.com/file/d/14fYdX-iONFx5aZVe-lAg-eYeb6Y47f76/view?usp=sharing">
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 group flex items-center w-full sm:w-auto hover-scale animate-pulse-glow border-0">
              View Resume
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <a href="mailto:praveenkumarkunchala1122@gmail.com">
            <Button className="bg-transparent border border-violet-500/50 text-violet-600 hover:bg-violet-500/10 w-full sm:w-auto hover-scale animate-border-pulse">
              Contact Me
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
