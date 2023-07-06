/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.co',
        },
        {
          protocol: 'https',
          hostname: '**.com',
        },
      ],
    },
    exportPathMap: async function () {
      return {
        '/items/[id]': { page: '/items/[id]' },
      };
    },
  };
  
  module.exports = nextConfig;
  