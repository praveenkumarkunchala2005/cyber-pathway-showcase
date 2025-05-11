
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const Index = () => {
  // Add scroll animation effect to sections
  useEffect(() => {
    // Create intersection observer for fade animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Uncomment this to re-trigger animations when scrolling back up
          // entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    // Create intersection observer for parallax elements
    const parallaxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-fade-up, .reveal-fade-right, .reveal-fade-left').forEach(element => {
      observer.observe(element);
    });

    // Observe parallax elements
    document.querySelectorAll('.parallax-element').forEach(element => {
      parallaxObserver.observe(element);
    });

    // Handle scroll progress indicator
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) {
        progressBar.style.width = scrollPercentage + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      parallaxObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-cyber-dark transition-colors duration-300">
        {/* Scroll progress indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
          <div 
            id="scroll-progress" 
            className="h-full bg-gradient-to-r from-cyber-accent to-cyber-glow"
            style={{ width: '0%', transition: 'width 0.1s' }}
          ></div>
        </div>
        
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Education />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
