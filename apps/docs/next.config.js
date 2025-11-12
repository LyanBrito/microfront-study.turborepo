const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
    reactStrictMode: true,

    webpack: (config, options) => {
        const { isServer } = options;

        const moduleFederationConfig = {
            name: 'docsHost',
            filename: 'static/chunks/remoteEntry.js',
            remotes: {
                web: `webRemote@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
            },
            shared: {
                react: { singleton: true, requiredVersion: false },
                'react-dom': { singleton: true, requiredVersion: false },
            },
            exposes: {},
        };

        if (!config.plugins) {
            config.plugins = [];
        }

        config.plugins.push(
            new NextFederationPlugin(moduleFederationConfig)
        );
``
        return config;
    },
};

module.exports = nextConfig;