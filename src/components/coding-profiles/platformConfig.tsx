
import React from 'react';
import { Code, Trophy, Award } from 'lucide-react';
import { ProfileStat } from './ProfileCard';
import { LeetCodeProfile, CodeForcesProfile, CodeChefProfile } from '@/services/codingProfiles';

export interface PlatformConfig {
  name: string;
  username: string;
  url: string;
  status: string;
  stats: ProfileStat[];
  icon: React.ReactNode;
}

export const createPlatformConfigs = (
  leetcodeProfile: LeetCodeProfile | null,
  codeforcesProfile: CodeForcesProfile | null,
  codechefProfile: CodeChefProfile | null,
  profileStatus: Record<string, string>
): PlatformConfig[] => [
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
    icon: <Code className="h-8 w-8" />
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
    icon: <Trophy className="h-8 w-8" />
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
    icon: <Award className="h-8 w-8" />
  }
];
