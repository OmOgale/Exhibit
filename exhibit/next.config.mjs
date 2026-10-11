/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The old vercel.app address forwards to the real domain, except for the file
    // that proves to Google Search Console we own it.
    const vercelApp = [{ type: "host", value: "omogale.vercel.app" }];
    return [
      { source: "/", has: vercelApp, destination: "https://www.omogale.com/", permanent: true },
      {
        source: "/:path((?!google708e66ee1e6bab3b\\.html$).+)",
        has: vercelApp,
        destination: "https://www.omogale.com/:path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
