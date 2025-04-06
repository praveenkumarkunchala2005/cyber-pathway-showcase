
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Languages, Award, GraduationCap } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string; icon: React.ReactNode }) => {
  return (
    <Card className="cyber-card animate-fade-in hover-transform">
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

const Achievement = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="achievement-card group hover:scale-[1.02] transition-transform duration-300 animate-fade-in">
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
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl animate-fade-in">
            My technical expertise in web development, including frontend and backend technologies, frameworks, and development tools.
          </p>
        </div>
        
        <div className="skills-grid mb-16">
          <SkillCategory 
            title="Languages" 
            skills="JavaScript, TypeScript, HTML, CSS, Python, Java"
            icon={<Languages />}
          />
          
          <SkillCategory 
            title="Frontend Technologies" 
            skills="React, Next.js, TailwindCSS, Redux, Material UI, Bootstrap"
            icon={<Code />}
          />
          
          <SkillCategory 
            title="Backend Technologies" 
            skills="Node.js, Express, RESTful APIs, GraphQL"
            icon={<Server />}
          />
          
          <SkillCategory 
            title="Databases" 
            skills="MongoDB, MySQL, PostgreSQL, Firebase"
            icon={<Database />}
          />
          
          <SkillCategory 
            title="Developer Tools" 
            skills="Git, GitHub, VS Code, Docker, Webpack, Vite"
            icon={<Code />}
          />
          
          <SkillCategory 
            title="Additional Skills" 
            skills="Responsive Design, Web Accessibility, UI/UX Principles, Performance Optimization"
            icon={<GraduationCap />}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title mb-4 animate-fade-in">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl animate-fade-in">
            Notable accomplishments and projects that demonstrate my web development skills and expertise.
          </p>
        </div>
        
        <div className="achievements-grid">
          <Achievement
            title="Built responsive web interfaces that improved user engagement by 45%"
            date="Feb 2025"
          />
          
          <Achievement
            title="Developed a React dashboard with 98% performance score on Lighthouse"
            date="Dec 2024"
          />
          
          <Achievement
            title="Winner of Frontend Innovation Hackathon at DevConf 2024"
            date="July 2024"
          />
          
          <Achievement
            title="Created PWAs that reduced load times by 65% for mobile users"
            date="April 2024"
          />
          
          <Achievement
            title="Open source contributor with 500+ stars across React components"
            date="Ongoing"
          />
          
          <Achievement
            title="Led frontend development for a SaaS platform with 10k+ daily users"
            date="October 2024"
          />
          
          <Achievement
            title="Optimized web vitals reducing bounce rates by 35% for e-commerce client"
            date="September 2024"
          />
          
          <Achievement
            title="Published technical articles on web performance with 50k+ views"
            date="January 2025"
          />
          
          <Achievement
            title="Mentored junior developers in modern frontend technologies"
            date="2023 - Present"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
