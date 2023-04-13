/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  removeConsole: process.env.NODE_ENV === "production",
  images: {
    domains: ['i.guim.co.uk', 'www.si.com', 'img.tfd.com', 'cdn.mefi.us', 's.yimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
}

module.exports = nextConfig
