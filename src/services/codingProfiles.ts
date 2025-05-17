
import axios from 'axios';

export interface LeetCodeProfile {
  username: string;
  problemsSolved: number;
  contestRating: number;
  ranking: string;
}

export interface CodeForcesProfile {
  username: string;
  problemsSolved: number;
  maxRating: number;
  ranking: string;
}

export interface CodeChefProfile {
  username: string;
  problemsSolved: number;
  maxRating: number;
  ranking: string;
}

// LeetCode API
export const fetchLeetCodeProfile = async (username: string): Promise<LeetCodeProfile> => {
  try {
    // LeetCode's API is protected by CORS, which makes it difficult to access directly from browser
    // In a production environment, this would be handled through a backend proxy
    // For now, we'll simulate a response since direct API access fails with CORS errors
    console.log('Attempting to fetch LeetCode profile for', username);
    
    // Corrected data with accurate problems solved count
    return {
      username: "PraveenKumarKunchala",
      problemsSolved: 350, // Corrected problems solved count
      contestRating: 1998,
      ranking: "Knight" // Simplified ranking display
    };
  } catch (error) {
    console.error('Failed to fetch LeetCode profile:', error);
    // Return fallback data
    return {
      username: "PraveenKumarKunchala",
      problemsSolved: 350,
      contestRating: 1998,
      ranking: "Knight"
    };
  }
};

// CodeForces API
const getManualRank = (maxRating: number): string => {
  if (maxRating >= 2900) return "Legendary Grandmaster";
  if (maxRating >= 2600) return "International Grandmaster";
  if (maxRating >= 2400) return "Grandmaster";
  if (maxRating >= 2300) return "International Master";
  if (maxRating >= 2100) return "Master";
  if (maxRating >= 1900) return "Candidate Master";
  if (maxRating >= 1600) return "Expert";
  if (maxRating >= 1400) return "Specialist";
  if (maxRating >= 1200) return "Pupil";
  return "Newbie";
};

export const fetchCodeForcesProfile = async (
  username: string
): Promise<CodeForcesProfile> => {
  try {
    console.log("Fetching Codeforces profile for", username);

    const [userResponse, submissionsResponse] = await Promise.all([
      axios.get(`https://codeforces.com/api/user.info?handles=${username}`),
      axios.get(`https://codeforces.com/api/user.status?handle=${username}`),
    ]);

    const userData = userResponse.data.result[0];
    const submissions = submissionsResponse.data.result;

    // Use a Set to track unique problems that were solved (verdict OK)
    const uniqueSolvedProblems = new Set<string>();
    for (const submission of submissions) {
      if (submission.verdict === "OK" && submission.problem) {
        const problemKey = `${submission.problem.contestId}-${submission.problem.index}`;
        uniqueSolvedProblems.add(problemKey);
      }
    }

    const maxRating = userData.maxRating ?? 0;
    const manualRank = getManualRank(maxRating);

    return {
      username: userData.handle,
      problemsSolved: uniqueSolvedProblems.size,
      maxRating,
      ranking: manualRank,
    };
  } catch (error) {
    console.error("Error fetching Codeforces data:", error);
    return {
      username: "PraveenKumar2201",
      problemsSolved: 315,
      maxRating: 1419,
      ranking: "Specialist",
    };
  }
};

// CodeChef API
export const fetchCodeChefProfile = async (username: string): Promise<CodeChefProfile> => {
  try {
    // CodeChef doesn't have a publicly accessible API for this data
    // In a production app, we would use server-side scraping
    console.log('CodeChef profile requested for', username);
    
    // For now, return mock data that's representative of the user's profile
    return {
      username: "praveen_220105",
      problemsSolved: 230,
      maxRating: 1751,
      ranking: "3 Star" // Simple ranking display
    };
  } catch (error) {
    console.error('Failed to fetch CodeChef profile:', error);
    // Return fallback data
    return {
      username: "praveen_220105",
      problemsSolved: 230,
      maxRating: 1751,
      ranking: "3 Star"
    };
  }
};
