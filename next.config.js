/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.ignant.com',
                protocol: 'https',   
            }
        ]
    }
}

module.exports = nextConfig
