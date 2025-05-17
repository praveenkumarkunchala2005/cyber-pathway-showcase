
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
    return {
      username: "PraveenKumarKunchala",
      problemsSolved: 750,
      contestRating: 1998,
      ranking: "Knight"
    };
};

// CodeForces API

export const fetchCodeForcesProfile = async (
  username: string
): Promise<CodeForcesProfile> => {
    return {
      username: "PraveenKumar2201",
      problemsSolved: 315,
      maxRating: 1419,
      ranking: "Specialist",
    };
};
// CodeChef API
export const fetchCodeChefProfile = async (username: string): Promise<CodeChefProfile> => {
    return {
      username: "praveen_220105",
      problemsSolved: 230,
      maxRating: 1751,
      ranking: "3 Star"
    };
};