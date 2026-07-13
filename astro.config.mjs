import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://tappat225.github.io'
    : 'https://www.capown.net',
  base: isGitHubPages ? '/CapOwn-pages' : '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
