
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Languages, Award, GraduationCap } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string; icon: React.ReactNode }) => {
  return (
    <Card className="cyber-card">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="h-8 w-8 text-cyber-glow">{icon}</div>
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
    <div className="flex items-start space-x-3 p-4 border border-cyber-light/30 rounded-md bg-gradient-to-br from-cyber-default to-cyber-dark">
      <Award className="h-5 w-5 text-cyber-glow mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-gray-200">{title}</p>
        <p className="text-sm text-gray-400 mt-1">{date}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute right-0 bottom-0 w-60 h-60 bg-cyber-accent/5 rounded-full blur-[80px]"></div>
        <div className="absolute left-0 top-0 w-40 h-40 bg-cyber-glow/5 rounded-full blur-[50px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl">
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
          <h2 className="section-title mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Recognition and accomplishments that showcase my expertise in web development and problem-solving capabilities.
          </p>
        </div>
        
        <div className="achievements-grid">
          <Achievement
            title="Developed a React dashboard that increased client productivity by 35%"
            date="Feb 2025"
          />
          
          <Achievement
            title="Built an e-commerce platform that scaled to 10,000+ daily users"
            date="Dec 2024"
          />
          
          <Achievement
            title="Winner of Web Innovation Hackathon at TechConf 2024"
            date="July 2024"
          />
          
          <Achievement
            title="Created a PWA that reduced load times by 68% compared to previous version"
            date="April 2024"
          />
          
          <Achievement
            title="Open source contributor with 500+ GitHub stars across projects"
            date="Ongoing"
          />
          
          <Achievement
            title="Led frontend development for a startup that secured $1.2M funding"
            date="October 2024"
          />
          
          <Achievement
            title="Optimized rendering performance reducing client's AWS costs by 40%"
            date="September 2024"
          />
          
          <Achievement
            title="Published technical articles with over 50,000 cumulative views"
            date="January 2025"
          />
          
          <Achievement
            title="Mentored 20+ junior developers who advanced to mid-level roles"
            date="2023 - Present"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
