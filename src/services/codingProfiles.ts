
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
    // LeetCode doesn't have a public API, so we'll use a graphql query
    const response = await axios.post('https://leetcode.com/graphql', {
      query: `
        query userProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                count
              }
            }
            profile {
              ranking
              reputation
              starRating
            }
          }
          userContestRanking(username: $username) {
            rating
          }
        }
      `,
      variables: { username }
    });

    const data = response.data.data;
    if (!data || !data.matchedUser) {
      throw new Error('User not found');
    }

    return {
      username: data.matchedUser.username,
      problemsSolved: data.matchedUser.submitStats.acSubmissionNum[0].count,
      contestRating: data.userContestRanking?.rating || 0,
      ranking: data.matchedUser.profile?.ranking ? `Top ${data.matchedUser.profile.ranking}%` : 'Knight (Top 1.4%)'
    };
  } catch (error) {
    console.error('Failed to fetch LeetCode profile:', error);
    // Return mock data if API fails
    return {
      username: "PraveenKumarKunchala",
      problemsSolved: 950,
      contestRating: 1998,
      ranking: "Knight (Top 1.4%)"
    };
  }
};

// CodeForces API
export const fetchCodeForcesProfile = async (username: string): Promise<CodeForcesProfile> => {
  try {
    // Fetch user info and submissions
    const [userInfoResponse, submissionsResponse] = await Promise.all([
      axios.get(`https://codeforces.com/api/user.info?handles=${username}`),
      axios.get(`https://codeforces.com/api/user.status?handle=${username}`)
    ]);

    const userInfo = userInfoResponse.data.result[0];
    const submissions = submissionsResponse.data.result;

    // Count unique solved problems
    const uniqueProblems = new Set();
    submissions.forEach((submission: any) => {
      if (submission.verdict === "OK") {
        const problemId = `${submission.problem.contestId}-${submission.problem.index}`;
        uniqueProblems.add(problemId);
      }
    });

    return {
      username: userInfo.handle,
      problemsSolved: uniqueProblems.size,
      maxRating: userInfo.maxRating,
      ranking: userInfo.rank || "Specialist"
    };
  } catch (error) {
    console.error('Failed to fetch CodeForces profile:', error);
    // Return mock data if API fails
    return {
      username: "PraveenKumar2201",
      problemsSolved: 850,
      maxRating: 1419,
      ranking: "Specialist"
    };
  }
};

// CodeChef API
export const fetchCodeChefProfile = async (username: string): Promise<CodeChefProfile> => {
  try {
    // CodeChef doesn't have a public API that's easily accessible
    // We would need to scrape the website or use an unofficial API
    // For now, let's return mock data
    
    // In a real implementation, this would use web scraping or an unofficial API
    // const response = await axios.get(`https://some-unofficial-api.com/codechef/${username}`);
    
    // Simulating API response delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    throw new Error("CodeChef API not implemented");
  } catch (error) {
    console.error('Failed to fetch CodeChef profile:', error);
    // Return mock data if API fails
    return {
      username: "praveen_220105",
      problemsSolved: 650,
      maxRating: 1743,
      ranking: "3 Star"
    };
  }
};
