/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['i.guim.co.uk', 'www.si.com', 'img.tfd.com', 'cdn.mefi.us', 's.yimg.com', 'blog.cloudflare.com', 'static1.squarespace.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
}

module.exports = nextConfig
