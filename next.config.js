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
        hostname: "chhaswtfxyoeliqpcmkg.supabase.co",
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
