// `next build` and `next dev` must not share an output directory: a build run
// while the dev server is up overwrites the manifests dev serves from, the
// stylesheet its HTML links to 404s, and every page renders unstyled until
// `.next` is deleted. Setting NEXT_DIST_DIR gives a local build its own
// directory so it can run alongside dev. It must be an env var rather than
// argv sniffing — Next's build workers re-read this config in child processes
// and only inherit the environment. Unset (as on Vercel) means plain `.next`,
// so deploys are unaffected.
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
