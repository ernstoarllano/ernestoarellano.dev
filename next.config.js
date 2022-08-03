/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  env: {
    githubToken: process.env.GITHUB_TOKEN,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    strapiGraqphQLURI: process.env.STRAPI_GRAPHQL_URI,
    siteURI: process.env.SITE_URI
  }
}

module.exports = nextConfig
