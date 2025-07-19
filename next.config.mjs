/** @type {import('next').NextConfig} */
const nextConfig = {
    /*
     * Optimized Next.js 15 configuration with Turbopack support
     * - Use `npm run dev` for Turbopack (faster development)
     * - Use `npm run dev:webpack` for traditional Webpack builds
     * - Automatic detection prevents conflicts between build systems
     */
    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: [
            '@mui/material',
            '@mui/icons-material',
            'framer-motion',
            'lucide-react'
        ],
    },
    
    // Turbopack configuration (stable in Next.js 15)
    turbopack: {
        rules: {
            // Optimize SVG loading
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    
    // Only use webpack config when NOT using Turbopack
    ...(!process.env.TURBOPACK && {
        webpack: (config, { dev, isServer }) => {
            // SVG handling for webpack
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            });
            
            // Bundle analyzer for production builds only
            if (process.env.ANALYZE === 'true' && !isServer) {
                try {
                    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
                    config.plugins.push(
                        new BundleAnalyzerPlugin({
                            analyzerMode: 'static',
                            openAnalyzer: false,
                        })
                    );
                } catch (error) {
                    console.log('Bundle analyzer not available');
                }
            }
            
            return config;
        },
    }),
    
    // Enable compression
    compress: true,
    
    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    
    // Enable static optimization for pages that don't need SSR
    trailingSlash: false,
    
    // Performance optimizations
    poweredByHeader: false,
    
    // ESLint configuration for build
    eslint: {
        // Disable eslint during builds to focus on functionality
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
