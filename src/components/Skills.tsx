
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Server, Database, Languages, Award, GraduationCap } from 'lucide-react';

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string; icon: React.ReactNode }) => {
  return (
    <Card className="cyber-card h-full">
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
    <div className="flex items-start space-x-3 p-4 border border-cyber-light/30 rounded-md bg-cyber-dark/50">
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
            My technical toolkit and expertise developed through academic learning and hands-on project experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCategory 
            title="Languages" 
            skills="C/C++, Java, Python, JavaScript, TypeScript"
            icon={<Languages />}
          />
          
          <SkillCategory 
            title="Frontend Technologies" 
            skills="ReactJs, HTML, CSS, BootStrap, TailwindCSS"
            icon={<Code />}
          />
          
          <SkillCategory 
            title="Backend Technologies" 
            skills="NodeJs, ExpressJs"
            icon={<Server />}
          />
          
          <SkillCategory 
            title="Databases" 
            skills="MySQL"
            icon={<Database />}
          />
          
          <SkillCategory 
            title="Developer Tools" 
            skills="Git, GitHub, VS Code, Sublime Text"
            icon={<Code />}
          />
          
          <SkillCategory 
            title="Coursework" 
            skills="Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Cyber Security Essentials"
            icon={<GraduationCap />}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="section-title mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Recognitions and accomplishments that demonstrate my commitment to excellence and continuous learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Achievement
            title="Specialist at Codeforces (max 1419) and 3 Star at CodeChef (max 1743)"
            date="Feb 2025"
          />
          
          <Achievement
            title="Knight at LeetCode (max 1998) and solved 1500+ DSA Problems on all platforms"
            date="Feb 2025"
          />
          
          <Achievement
            title="Rank 3 in Codeathon out of 270+ participants at ACEEC, Hyderabad"
            date="July 2024"
          />
          
          <Achievement
            title="Rank 3 in Freshman Code Cup out of 50+ participants at CMR College of Engineering & Technology, Hyderabad"
            date="April 2023"
          />
          
          <Achievement
            title="Top 5 in 24-hour Coding Hackathon out of 220+ teams at Malla Reddy College of Engineering & Technology, Hyderabad"
            date="October 2024"
          />
          
          <Achievement
            title="Finalist and Top 30 in MIT Manipal Hackathon out of 350+ teams"
            date="October 2023"
          />
          
          <Achievement
            title="Global Rank 35 in CodeChef Starters 150 out of 3.5k+ participants"
            date="September 2024"
          />
          
          <Achievement
            title="Secured Rank 239 in TCS CodeVita Season 12"
            date="January 2025"
          />
          
          <Achievement
            title="Global Rank 670 in Codeforces Round 971 out of 15k+ participants"
            date="September 2024"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
