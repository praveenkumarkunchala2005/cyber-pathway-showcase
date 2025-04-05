
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Education />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
