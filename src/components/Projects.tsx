
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string;
  date: string;
  githubLink?: string;
  liveLink?: string;
  className?: string;
}

const ProjectCard = ({ title, description, technologies, date, githubLink, liveLink, className }: ProjectProps) => {
  const { theme } = useTheme();
  
  return (
    <Card className={`cyber-card transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyber-glow/10 ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{title}</CardTitle>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <CardDescription className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
          <span className="text-cyber-glow font-medium">{technologies}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow py-2">
        <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-start space-x-3 border-t border-cyber-light/20 pt-4">
        {githubLink && (
          <Button variant="outline" size="sm" className="cyber-button-outline" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </Button>
        )}
        {liveLink && (
          <Button variant="outline" size="sm" className="cyber-button-outline" asChild>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    // Create a staggered animation effect
    cards.forEach((card, index) => {
      const delay = 0.1 + (index * 0.1);
      const htmlCard = card as HTMLElement;
      htmlCard.style.animationDelay = `${delay}s`;
    });
    
    // Add hover effect that follows cursor
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const cardElement = e.currentTarget as HTMLElement;
        cardElement.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--cyber-glow-5), transparent 60%)`;
      });
      
      card.addEventListener('mouseleave', (e) => {
        const cardElement = e.currentTarget as HTMLElement;
        cardElement.style.background = '';
      });
    });
  }, []);
  
  return (
    <section id="projects" className="py-16 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-cyber-glow/5 rounded-full blur-[80px] parallax-scroll"></div>
        <div className="absolute right-0 top-0 w-40 h-40 bg-cyber-accent/5 rounded-full blur-[50px] parallax-scroll"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 reveal-scale">
          <h2 className="section-title mb-4">
            Projects
          </h2>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}>
            Showcasing my journey in web development through various projects that demonstrate my skills and technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="reveal-fade-up project-card">
            <ProjectCard 
              title="JetSetGo"
              technologies="React.js, Clerk, TailwindCSS, Gemini API"
              description="Developed a smart travel planning web app that generates personalized itineraries and recommends budget-friendly hotels using the Gemini API. Implemented user authentication with Clerk and integrated Firestore for data storage."
              date="Feb 2025"
              githubLink="#"
              liveLink="#"
            />
          </div>
          
          <div className="reveal-fade-up project-card">
            <ProjectCard 
              title="Web Scraper"
              technologies="Node.js, Express.js"
              description="Created a website scraper to extract semester results of students from the college website efficiently. Enabled seamless retrieval and access to students' results for administrative use within the college."
              date="Jul 2024"
              githubLink="#"
            />
          </div>
          
          <div className="reveal-fade-up project-card">
            <ProjectCard 
              title="The HangMan Game"
              technologies="React, TypeScript, TailwindCSS"
              description="Developed a dynamic and user-friendly Game Mechanics using React and TypeScript. Ensured a responsive and visually appealing user interface using TailwindCSS."
              date="Jan 2025"
              githubLink="#"
              liveLink="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
