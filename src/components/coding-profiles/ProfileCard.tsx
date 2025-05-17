
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/context/ThemeContext';

export type ProfileStat = {
  label: string;
  value: string;
};

export interface ProfileCardProps {
  name: string;
  username: string;
  url: string;
  status: 'loading' | 'success' | 'error';
  stats: ProfileStat[];
  icon: React.ReactNode;
  index: number;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  username,
  url,
  status,
  stats,
  icon,
  index
}) => {
  const { theme } = useTheme();
  
  // Dynamic classes based on platform name
  const getStyleClasses = (platformName: string) => {
    switch (platformName) {
      case 'LeetCode':
        return {
          bgClass: theme === 'dark' ? 'from-[#ffa116]/10 to-transparent' : 'from-[#ffa116]/5 to-transparent',
          borderClass: theme === 'dark' ? 'border-[#ffa116]/20' : 'border-[#ffa116]/10',
          iconClass: 'text-[#ffa116]'
        };
      case 'CodeForces':
        return {
          bgClass: theme === 'dark' ? 'from-[#1992e3]/10 to-transparent' : 'from-[#1992e3]/5 to-transparent',
          borderClass: theme === 'dark' ? 'border-[#1992e3]/20' : 'border-[#1992e3]/10',
          iconClass: 'text-[#1992e3]'
        };
      case 'CodeChef':
      default:
        return {
          bgClass: theme === 'dark' ? 'from-[#7b5e47]/10 to-transparent' : 'from-[#7b5e47]/5 to-transparent',
          borderClass: theme === 'dark' ? 'border-[#7b5e47]/20' : 'border-[#7b5e47]/10',
          iconClass: 'text-[#7b5e47]'
        };
    }
  };

  const { bgClass, borderClass, iconClass } = getStyleClasses(name);

  return (
    <div className={`reveal-fade-up delay-${index * 100}`}>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full transition-transform duration-300 hover:scale-[1.02]"
      >
        <Card className={`cyber-card h-full bg-gradient-to-br ${bgClass} ${borderClass} hover:shadow-lg relative overflow-hidden group ${theme === 'dark' ? 'bg-cyber-dark text-white' : 'bg-white text-gray-800'}`}>
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyber-glow/5 to-transparent blur-2xl group-hover:opacity-70 transition-opacity"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-cyber-light/30' : 'bg-gray-100'} backdrop-blur-sm ${iconClass}`}>
                {icon}
              </div>
              <CardTitle className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {name}
              </CardTitle>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <Badge className={`${theme === 'dark' ? 'bg-cyber-glow/10 hover:bg-cyber-glow/20 text-cyber-glow' : 'bg-cyber-accent/10 hover:bg-cyber-accent/20 text-cyber-accent'} px-3 py-1`}>
                  @{username.length > 15 ? username.substring(0, 12) + '...' : username}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className={`w-auto ${theme === 'dark' ? 'glass-effect' : 'bg-white/90 backdrop-blur-sm border border-gray-200'}`}>
                <div className="flex flex-col space-y-1">
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    @{username}
                  </p>
                  <div className="text-xs text-gray-400">
                    Click card to visit profile
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardHeader>
          <CardContent>
            {status === 'loading' ? (
              <div className="mt-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <Skeleton className={`h-4 w-24 ${theme === 'dark' ? 'bg-cyber-light/30' : 'bg-gray-200/50'}`} />
                    <Skeleton className={`h-4 w-16 ${theme === 'dark' ? 'bg-cyber-light/30' : 'bg-gray-200/50'}`} />
                  </div>
                ))}
                
                <div className="mt-6 flex justify-center">
                  <Skeleton className={`h-6 w-28 rounded-full ${theme === 'dark' ? 'bg-cyber-light/30' : 'bg-gray-200/50'}`} />
                </div>
              </div>
            ) : status === 'error' ? (
              <div className="mt-4 text-center py-4">
                <p className="text-sm text-muted-foreground">
                  Could not load profile data
                </p>
                <button 
                  className={`mt-2 text-sm ${theme === 'dark' ? 'text-cyber-accent hover:text-cyber-glow' : 'text-cyber-glow hover:text-cyber-accent'} transition-colors duration-300`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.reload();
                  }}
                >
                  Try again
                </button>
              </div>
            ) : (
              <>
                <div className="mt-4 space-y-3">
                  {stats.map((stat) => (
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
                  <span className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-cyber-glow hover:text-cyber-accent' : 'text-cyber-accent hover:text-cyber-glow'} transition-colors`}>
                    View Profile 
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default ProfileCard;
