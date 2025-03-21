import type { NextConfig } from "next";
const { withContentlayer } = require('next-contentlayer2')

const nextConfig: NextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true
    }
}

module.exports = withContentlayer(nextConfig);
