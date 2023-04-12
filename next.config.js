/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
