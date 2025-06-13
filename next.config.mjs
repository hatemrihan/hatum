/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // basePath: '/hatum',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|JPG|PNG)$/i,
            type: 'asset/resource',
        });
        return config;
    },
    // Add trailing slashes for better compatibility
    trailingSlash: true,
    // Ensure proper asset handling
    // assetPrefix: '/hatum/',
};

export default nextConfig;


