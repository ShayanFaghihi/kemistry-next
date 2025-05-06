/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dice-media.imgix.net",
        port: "",
        pathname: "/attachments/**",
      },
      {
        protocol: "https",
        hostname: "zsri2pqd6j5mhipe.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};
