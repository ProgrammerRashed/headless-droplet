module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  async headers() {
    return [
      {
        // Match media files (adjust the path or extensions as needed)
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};
