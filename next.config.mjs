/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Disabled because we have API routes
    // basePath: '/hatum',
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    // SWC configuration to handle missing dependencies
    swcMinify: true,
    compiler: {
        // Enable SWC minification
        removeConsole: process.env.NODE_ENV === 'production',
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
        // Add loader to prevent deployment issues
        loader: 'default',
        // Ensure proper handling of local images
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg|JPG|PNG)$/i,
            type: 'asset/resource',
        });
        
        // Optimize video loading
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|avi|mov)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'videos/[name].[hash][ext]'
            }
        });
        
        return config;
    },
    // Add trailing slashes for better compatibility
    trailingSlash: true,
    // Ensure proper asset handling
    // assetPrefix: '/hatum/',
};

export default nextConfig;


