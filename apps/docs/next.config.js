/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'docs',
                remotes: {
                    web: `web@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
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
