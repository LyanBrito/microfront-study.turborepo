import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'web',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './App': './app/page.tsx',
                },
                shared: {
                    react: { singleton: true },
                    'react-dom': { singleton: true },
                },
            })
        );
        return config;
    },
};

export default nextConfig;
