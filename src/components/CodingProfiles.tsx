import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Code, Award, ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/context/ThemeContext';
import { 
  LeetCodeProfile,
  CodeForcesProfile,
  CodeChefProfile,
  fetchLeetCodeProfile,
  fetchCodeForcesProfile,
  fetchCodeChefProfile
} from '@/services/codingProfiles';

type ProfileStatus = 'loading' | 'success' | 'error';

const CodingProfiles = () => {
  const { theme } = useTheme();
  const [leetcodeProfile, setLeetcodeProfile] = useState<LeetCodeProfile | null>(null);
  const [codeforcesProfile, setCodeforcesProfile] = useState<CodeForcesProfile | null>(null);
  const [codechefProfile, setCodechefProfile] = useState<CodeChefProfile | null>(null);
  const [profileStatus, setProfileStatus] = useState<Record<string, ProfileStatus>>({
    leetcode: 'loading',
    codeforces: 'loading',
    codechef: 'loading'
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setProfileStatus(prev => ({ ...prev, leetcode: 'loading' }));
        const leetcode = await fetchLeetCodeProfile('PraveenKumarKunchala');
        setLeetcodeProfile(leetcode);
        setProfileStatus(prev => ({ ...prev, leetcode: 'success' }));
      } catch (error) {
        console.error('Failed to fetch LeetCode profile:', error);
        setProfileStatus(prev => ({ ...prev, leetcode: 'error' }));
      }

      try {
        setProfileStatus(prev => ({ ...prev, codeforces: 'loading' }));
        const codeforces = await fetchCodeForcesProfile('PraveenKumar2201');
        setCodeforcesProfile(codeforces);
        setProfileStatus(prev => ({ ...prev, codeforces: 'success' }));
      } catch (error) {
        console.error('Failed to fetch CodeForces profile:', error);
        setProfileStatus(prev => ({ ...prev, codeforces: 'error' }));
      }

      try {
        setProfileStatus(prev => ({ ...prev, codechef: 'loading' }));
        const codechef = await fetchCodeChefProfile('praveen_220105');
        setCodechefProfile(codechef);
        setProfileStatus(prev => ({ ...prev, codechef: 'success' }));
      } catch (error) {
        console.error('Failed to fetch CodeChef profile:', error);
        setProfileStatus(prev => ({ ...prev, codechef: 'error' }));
      }
    };

    fetchProfiles();
  }, []);

  const platforms = [
    {
      name: 'LeetCode',
      username: leetcodeProfile?.username || 'PraveenKumarKunchala',
      url: 'https://leetcode.com/u/PraveenKumarKunchala/',
      status: profileStatus.leetcode,
      stats: leetcodeProfile ? [
        { label: 'Problems Solved', value: `${leetcodeProfile.problemsSolved}+` },
        { label: 'Contest Rating', value: `${leetcodeProfile.contestRating}` },
        { label: 'Ranking', value: leetcodeProfile.ranking }
      ] : [],
      icon: <Code className="h-8 w-8" />,
      bgClass: theme === 'dark' ? 'from-[#ffa116]/10 to-transparent' : 'from-[#ffa116]/5 to-transparent',
      borderClass: theme === 'dark' ? 'border-[#ffa116]/20' : 'border-[#ffa116]/10',
      iconClass: 'text-[#ffa116]'
    },
    {
      name: 'CodeForces',
      username: codeforcesProfile?.username || 'PraveenKumar2201',
      url: 'https://codeforces.com/profile/PraveenKumar2201',
      status: profileStatus.codeforces,
      stats: codeforcesProfile ? [
        { label: 'Problems Solved', value: `${codeforcesProfile.problemsSolved}+` },
        { label: 'Max Rating', value: `${codeforcesProfile.maxRating}` },
        { label: 'Ranking', value: codeforcesProfile.ranking }
      ] : [],
      icon: <Trophy className="h-8 w-8" />,
      bgClass: theme === 'dark' ? 'from-[#1992e3]/10 to-transparent' : 'from-[#1992e3]/5 to-transparent',
      borderClass: theme === 'dark' ? 'border-[#1992e3]/20' : 'border-[#1992e3]/10',
      iconClass: 'text-[#1992e3]'
    },
    {
      name: 'CodeChef',
      username: codechefProfile?.username || 'praveen_220105',
      url: 'https://www.codechef.com/users/praveen_220105',
      status: profileStatus.codechef,
      stats: codechefProfile ? [
        { label: 'Problems Solved', value: `${codechefProfile.problemsSolved}+` },
        { label: 'Max Rating', value: `${codechefProfile.maxRating}` },
        { label: 'Ranking', value: codechefProfile.ranking }
      ] : [],
      icon: <Award className="h-8 w-8" />,
      bgClass: theme === 'dark' ? 'from-[#7b5e47]/10 to-transparent' : 'from-[#7b5e47]/5 to-transparent',
      borderClass: theme === 'dark' ? 'border-[#7b5e47]/20' : 'border-[#7b5e47]/10',
      iconClass: 'text-[#7b5e47]'
    }
  ];

  // Render platform card
  const renderPlatformCard = (platform: any, index: number) => (
    <div key={platform.name} className={`reveal-fade-up delay-${index * 100}`}>
      <a 
        href={platform.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full transition-transform duration-300 hover:scale-[1.02]"
      >
        <Card className={`cyber-card h-full bg-gradient-to-br ${platform.bgClass} ${platform.borderClass} hover:shadow-lg relative overflow-hidden group ${theme === 'dark' ? 'bg-cyber-dark text-white' : 'bg-white text-gray-800'}`}>
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyber-glow/5 to-transparent blur-2xl group-hover:opacity-70 transition-opacity"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${theme === 'dark' ? 'bg-cyber-light/30' : 'bg-gray-100'} backdrop-blur-sm ${platform.iconClass}`}>
                {platform.icon}
              </div>
              <CardTitle className={`text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {platform.name}
              </CardTitle>
            </div>
            <HoverCard>
              <HoverCardTrigger>
                <Badge className={`${theme === 'dark' ? 'bg-cyber-glow/10 hover:bg-cyber-glow/20 text-cyber-glow' : 'bg-cyber-accent/10 hover:bg-cyber-accent/20 text-cyber-accent'} px-3 py-1`}>
                  @{platform.username.length > 15 ? platform.username.substring(0, 12) + '...' : platform.username}
                </Badge>
              </HoverCardTrigger>
              <HoverCardContent className={`w-auto ${theme === 'dark' ? 'glass-effect' : 'bg-white/90 backdrop-blur-sm border border-gray-200'}`}>
                <div className="flex flex-col space-y-1">
                  <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    @{platform.username}
                  </p>
                  <div className="text-xs text-gray-400">
                    Click card to visit profile
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </CardHeader>
          <CardContent>
            {platform.status === 'loading' ? (
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
            ) : platform.status === 'error' ? (
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
                  {platform.stats.map((stat: any) => (
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
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}>
            My performance and achievements across various competitive programming platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => renderPlatformCard(platform, index))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
