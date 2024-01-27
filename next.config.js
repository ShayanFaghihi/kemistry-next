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
};
