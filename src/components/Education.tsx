
import React, { useEffect } from 'react';
import EducationCard from './EducationCard';
import { useTheme } from '@/context/ThemeContext';
import { DotPattern } from '@/components/ui/dot-pattern';

const Education = () => {
  const { theme } = useTheme();
  
  // Add parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-scroll');
      
      parallaxElements.forEach((element, index) => {
        const speed = index % 2 === 0 ? 0.05 : -0.05;
        const yPos = scrollPosition * speed;
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="education" className="py-16 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-60 h-60 bg-cyber-accent/5 rounded-full blur-[80px] parallax-scroll"></div>
        <div className="absolute left-0 top-0 w-40 h-40 bg-cyber-glow/5 rounded-full blur-[50px] parallax-scroll"></div>
        
        {/* Dot pattern for extra visual interest */}
        <DotPattern 
          glow={false}
          width={32}
          height={32}
          cr={0.3}
          className={`opacity-5 ${theme === 'light' ? 'text-purple-800' : ''}`}
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 reveal-fade-up">
          <h2 className="section-title mb-4">
            Academic Background
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My educational journey in the field of computer science and cybersecurity has equipped me with a strong foundation in both theoretical knowledge and practical skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          <div className="reveal-fade-right delay-100">
            <EducationCard 
              institution="CMR College of Engineering & Technology"
              degree="B.Tech in Computer Science Engineering (Cyber Security)"
              location="Medchal, Telangana"
              duration="Nov. 2022 - May 2026 (Expected)"
              grade="GPA: 7.96"
              isActive={true}
            />
          </div>
          
          <div className="reveal-fade-left delay-200">
            <EducationCard 
              institution="Narayana Jr College"
              degree="Class 12th"
              location="Hyderabad, Telangana"
              duration="2020 - 2022"
              grade="Percentage: 95%"
            />
          </div>

          <div className="reveal-fade-right delay-300 md:transform md:translate-y-8">
            <EducationCard 
              institution="Naagarjuna Model High School"
              degree="Class 10th"
              location="Hyderabad, Telangana"
              duration="2019 - 2020"
              grade="GPA: 10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
