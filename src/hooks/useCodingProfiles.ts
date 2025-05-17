
import { useState, useEffect } from 'react';
import { 
  fetchLeetCodeProfile, 
  fetchCodeForcesProfile, 
  fetchCodeChefProfile,
  LeetCodeProfile,
  CodeForcesProfile,
  CodeChefProfile
} from '@/services/codingProfiles';

export type ProfileStatus = 'loading' | 'success' | 'error';

export interface UseCodingProfilesReturn {
  leetcodeProfile: LeetCodeProfile | null;
  codeforcesProfile: CodeForcesProfile | null;
  codechefProfile: CodeChefProfile | null;
  profileStatus: Record<string, ProfileStatus>;
}

export const useCodingProfiles = (): UseCodingProfilesReturn => {
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

  return {
    leetcodeProfile,
    codeforcesProfile,
    codechefProfile,
    profileStatus
  };
};
