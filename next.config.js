/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['www.nestle-contigo.co', 'scontent.fctg1-4.fna.fbcdn.net']
  }
}

module.exports = nextConfig
