/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'staging.notionhive.com',
          },
          {
            protocol: 'http',
            hostname: 'saf.local',
          },
         
        ],
      },
};

export default nextConfig;
