
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyber-dark">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Education />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
