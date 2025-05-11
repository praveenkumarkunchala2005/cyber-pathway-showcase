
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Languages, Award, GraduationCap } from 'lucide-react';

const SkillCategory = ({ title, skills, icon, className }: { title: string; skills: string; icon: React.ReactNode; className?: string }) => {
  return (
    <Card className={`cyber-card hover-transform ${className}`}>
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="h-8 w-8 text-cyber-glow animate-pulse-subtle">{icon}</div>
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{skills}</p>
      </CardContent>
    </Card>
  );
};

const Achievement = ({ title, date, className }: { title: string; date: string; className?: string }) => {
  return (
    <div className={`achievement-card group hover:scale-[1.02] transition-transform duration-300 ${className}`}>
      <Award className="h-5 w-5 text-cyber-glow mt-0.5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
      <div>
        <p className="text-white dark:text-white light-mode:text-gray-800">{title}</p>
        <p className="text-sm text-gray-400 dark:text-gray-400 light-mode:text-gray-600 mt-1">{date}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute right-0 bottom-0 w-60 h-60 bg-cyber-accent/5 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute left-0 top-0 w-40 h-40 bg-cyber-glow/5 rounded-full blur-[50px] animate-float"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 reveal-fade-up">
          <h2 className="section-title mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My technical expertise in web development, including frontend and backend technologies, frameworks, and development tools.
          </p>
        </div>
        
        <div className="skills-grid mb-16">
          <div className="reveal-fade-up delay-100">
            <SkillCategory 
              title="Programming Languages" 
              skills="C, C++, Python, Java"
              icon={<Languages />}
            />
          </div>
          <div className="reveal-fade-up delay-200">
            <SkillCategory 
              title="Frontend Technologies" 
              skills="React, TailwindCSS, Material UI, Bootstrap, HTML, CSS"
              icon={<Code />}
            />
          </div>
          
          <div className="reveal-fade-up delay-300">
            <SkillCategory 
              title="Backend Technologies" 
              skills="Node.js, Express.js, JavaScript, TypeScript"
              icon={<Server />}
            />
          </div>
          
          <div className="reveal-fade-up delay-100">
            <SkillCategory 
              title="Databases" 
              skills="MongoDB, MySQL, Firebase"
              icon={<Database />}
            />
          </div>
          
          <div className="reveal-fade-up delay-200">
            <SkillCategory 
              title="Developer Tools" 
              skills="GitHub, VS Code, Postman, Sublime Text"
              icon={<Code />}
            />
          </div>
          
          {/* <div className="reveal-fade-up delay-300">
            <SkillCategory 
              title="Additional Skills" 
              skills="Responsive Design, Web Accessibility, UI/UX Principles, Performance Optimization"
              icon={<GraduationCap />}
            />
          </div> */}
        </div>
        
        <div className="flex flex-col items-center justify-center text-center mb-12 reveal-fade-up">
          <h2 className="section-title mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Notable accomplishments and projects that demonstrate my web development skills and expertise.
          </p>
        </div>
        
        <div className="achievements-grid">
          <div className="reveal-fade-right delay-100">
            <Achievement
              title="Codeforces: Specialist (1419)"
              date="April 2025"
            />
          </div>
          
          <div className="reveal-fade-left delay-100">
            <Achievement
              title="CodeChef: 3 Star (1743)"
              date="April 2025"
            />
          </div>
          
          <div className="reveal-fade-right delay-200">
            <Achievement
              title="Leetcode: Knight (1998, top 1.4%)"
              date="April 2025"
            />
          </div>
          
          <div className="reveal-fade-left delay-200">
            <Achievement
              title="Solved 2000+ DSA problems across multiple platforms"
              date="May 2025"
            />
          </div>
          
          <div className="reveal-fade-right delay-300">
            <Achievement
              title="Winner, Code-A-thon @ MREC Sponsored by GeeksForGeeks – Rs. 10,000 cash prize (500+ participants) "
              date="April 2025"
            />
          </div>
          
          <div className="reveal-fade-left delay-300">
            <Achievement
              title="2nd Runner-Up, Codeathon @ ACEEC (270+ participants) "
              date="June 2024"
            />
          </div>
          
          <div className="reveal-fade-right delay-400">
            <Achievement
              title="2nd Runner-Up, Freshman Code Cup @ CMRCET"
              date="April 2023"
            />
          </div>
          
          <div className="reveal-fade-left delay-400">
            <Achievement
              title="3rd Runner-Up, Code Clash at JNTUH, with Rs 7000 cash prize (550+ participants)"
              date="April 2025"
            />
          </div>
          
          <div className="reveal-fade-up delay-500">
            <Achievement
              title="AIR 5, Mentorpick Leaderboard (12,000+ participants)"
              date="2023 - Present"
            />
          </div>
          <div className="reveal-fade-up delay-500">
            <Achievement
              title="Global Rank 63, CodeChef Starters 169 Div2"
              date="January 2025"
            />
          </div>
          <div className="reveal-fade-up delay-500">
            <Achievement
              title="Ranked 239 in TCS CodeVita Season 12, a national-level coding competition"
              date="January 2025"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
