/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.trustedreviews.com",
      "www.computerhope.com",
      "www.bdstall.com",
      "www.bdshop.com",
      "www.startech.com.bd",
      "bme.com.bd",
      "c1.neweggimages.com",
      "upload.wikimedia.org",
      "www.crucial.com",
    ],
  },
};

module.exports = nextConfig;
