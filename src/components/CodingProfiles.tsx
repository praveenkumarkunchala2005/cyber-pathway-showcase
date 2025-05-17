
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import ProfileCard from './coding-profiles/ProfileCard';
import { useCodingProfiles } from '@/hooks/useCodingProfiles';
import { createPlatformConfigs } from './coding-profiles/platformConfig';

const CodingProfiles = () => {
  const { theme } = useTheme();
  const { 
    leetcodeProfile, 
    codeforcesProfile, 
    codechefProfile, 
    profileStatus 
  } = useCodingProfiles();
  
  const platforms = createPlatformConfigs(
    leetcodeProfile,
    codeforcesProfile,
    codechefProfile,
    profileStatus
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
          {platforms.map((platform, index) => (
            <ProfileCard
              key={platform.name}
              name={platform.name}
              username={platform.username}
              url={platform.url}
              status={platform.status as 'loading' | 'success' | 'error'}
              stats={platform.stats}
              icon={platform.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
