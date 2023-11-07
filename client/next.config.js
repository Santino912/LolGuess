/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com"],
  },
  env: {
    API_URL: "https://league-guess.onrender.com",
  },
};

module.exports = nextConfig;
