import type { NextConfig } from 'next'
const { withContentlayer } = require('next-contentlayer2')

const nextConfig: NextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: false,
    productionBrowserSourceMaps: true,
    compiler: {
        styledComponents: true
    }
}

module.exports = withContentlayer(nextConfig)
