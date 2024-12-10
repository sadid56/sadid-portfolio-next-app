/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      {
        protocol: "https",
        hostname: "hydeparkwinterwonderland.com",
      },
      {
        protocol: "https",
        hostname: "wembleypark.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;
