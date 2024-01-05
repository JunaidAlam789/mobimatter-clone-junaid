/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mobimatterstorage.blob.core.windows.net",
      },
    ],
    domains: ["media.istockphoto.com"],
  },
};

module.exports = nextConfig;
