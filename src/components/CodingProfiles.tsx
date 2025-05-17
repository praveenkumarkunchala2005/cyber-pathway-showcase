
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Code, Award } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const CodingProfiles = () => {
  const { theme } = useTheme();
  
  const platforms = [
    {
      name: 'LeetCode',
      username: 'PraveenKumarKunchala',
      url: 'https://leetcode.com/u/PraveenKumarKunchala/',
      stats: [
        { label: 'Problems Solved', value: '950+' },
        { label: 'Contest Rating', value: '1998' },
        { label: 'Ranking', value: 'Knight (Top 1.4%)' }
      ],
      icon: <Code className="h-8 w-8 text-cyber-glow" />,
      bgClass: 'from-[#ffa116]/10 to-transparent',
      borderClass: 'border-[#ffa116]/20',
      iconClass: 'text-[#ffa116]'
    },
    {
      name: 'CodeForces',
      username: 'PraveenKumar2201',
      url: 'https://codeforces.com/profile/PraveenKumar2201',
      stats: [
        { label: 'Problems Solved', value: '850+' },
        { label: 'Max Rating', value: '1419' },
        { label: 'Ranking', value: 'Specialist' }
      ],
      icon: <Trophy className="h-8 w-8 text-cyber-glow" />,
      bgClass: 'from-[#1992e3]/10 to-transparent',
      borderClass: 'border-[#1992e3]/20',
      iconClass: 'text-[#1992e3]'
    },
    {
      name: 'CodeChef',
      username: 'praveen_220105',
      url: 'https://www.codechef.com/users/praveen_220105',
      stats: [
        { label: 'Problems Solved', value: '650+' },
        { label: 'Max Rating', value: '1743' },
        { label: 'Ranking', value: '3 Star' }
      ],
      icon: <Award className="h-8 w-8 text-cyber-glow" />,
      bgClass: 'from-[#7b5e47]/10 to-transparent',
      borderClass: 'border-[#7b5e47]/20',
      iconClass: 'text-[#7b5e47]'
    }
  ];

  return (
    <section id="coding-profiles" className="py-16 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute left-0 bottom-0 w-60 h-60 bg-cyber-accent/5 rounded-full blur-[80px] animate-pulse-slow"></div>
        <div className="absolute right-0 top-0 w-40 h-40 bg-cyber-glow/5 rounded-full blur-[50px] animate-float"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 reveal-fade-up">
          <h2 className="section-title mb-4">
            Competitive Coding Profiles
          </h2>
          <p className="text-gray-400 max-w-2xl">
            My performance and achievements across various competitive programming platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <div key={platform.name} className={`reveal-fade-up delay-${index * 100}`}>
              <a 
                href={platform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full transition-transform duration-300 hover:scale-[1.02]"
              >
                <Card className={`cyber-card h-full bg-gradient-to-br ${platform.bgClass} ${platform.borderClass} hover:shadow-lg relative overflow-hidden group`}>
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyber-glow/5 to-transparent blur-2xl group-hover:opacity-70 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full bg-cyber-light/30 backdrop-blur-sm ${platform.iconClass}`}>
                        {platform.icon}
                      </div>
                      <CardTitle className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {platform.name}
                      </CardTitle>
                    </div>
                    <div className="bg-cyber-glow/10 px-3 py-1 rounded-full text-sm text-cyber-glow">
                      @{platform.username.length > 15 ? platform.username.substring(0, 12) + '...' : platform.username}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-4 space-y-3">
                      {platform.stats.map((stat) => (
                        <div key={stat.label} className="flex justify-between items-center">
                          <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                            {stat.label}:
                          </span>
                          <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <span className="inline-flex items-center text-sm font-medium text-cyber-glow hover:text-cyber-accent transition-colors">
                        View Profile 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
