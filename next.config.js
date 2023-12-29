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
};
