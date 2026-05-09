import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'vivekkumar9919'; // Update with your GitHub username
const CACHE_KEY = 'github_repos_cache';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export function useGitHub() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setRepos(data);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }

        const data = await response.json();
        
        // Process and filter repos
        const processedRepos = data
          .filter(repo => !repo.fork) // Exclude forks
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            homepage: repo.homepage,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language,
            topics: repo.topics || [],
            updatedAt: repo.updated_at,
          }));

        // Cache the result
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: processedRepos,
          timestamp: Date.now(),
        }));

        setRepos(processedRepos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
