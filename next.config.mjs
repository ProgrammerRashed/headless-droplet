/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'staging.notionhive.com',
          },
          {
            protocol: 'https',
            hostname: 'dashboard.susagfoundation.org',
          }
        ],
      },
};

export default nextConfig;
