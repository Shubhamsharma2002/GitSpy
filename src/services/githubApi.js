const BASE_URL = 'https://api.github.com/users';

export const fetchGithubUserData = async (username) => {
  if (!username || !username.trim()) {
    throw new Error('Please enter a GitHub username');
  }

  const response = await fetch(`${BASE_URL}/${username.trim()}`);

  if (response.status === 404) {
    throw new Error('User not found. Please check the username.');
  }

  if (response.status === 403) {
    throw new Error('API rate limit reached. Please try again later.');
  }

  if (!response.ok) {
    throw new Error('Failed to fetch profile details.');
  }

  return await response.json();
};