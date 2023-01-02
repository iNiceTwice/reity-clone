/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["www.reity.cl","wallstate.nyc3.cdn.digitaloceanspaces.com"]
  }
}

module.exports = nextConfig
