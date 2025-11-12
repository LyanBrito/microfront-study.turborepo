const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    webpack: (config, options) => {

        const moduleFederationConfig = {
            name: 'webRemote',
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
                './ComponenteWeb': './pages/index.tsx',
            },
            shared: {
                react: { singleton: true, requiredVersion: false },
                'react-dom': { singleton: true, requiredVersion: false },
            },
            remotes: {},
        };

        if (!config.plugins) {
            config.plugins = [];
        }

        config.plugins.push(
            new NextFederationPlugin(moduleFederationConfig)
        );

        return config;
    },
};

module.exports = nextConfig;