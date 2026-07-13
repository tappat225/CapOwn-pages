import { defineConfig } from 'astro/config';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(githubRepository);
const isRootGitHubPages = githubRepository?.endsWith('.github.io');
const defaultBase = isGitHubPages && !isRootGitHubPages ? `/${githubRepository}` : '/';
const defaultSite = isGitHubPages
  ? `https://${githubOwner}.github.io`
  : 'https://www.capown.net';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? defaultSite,
  base: process.env.PUBLIC_BASE_PATH ?? defaultBase,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
