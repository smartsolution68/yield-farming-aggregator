import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    // Handle missing optional dependencies
    config.externals = config.externals || [];
    config.externals.push({
      "pino-pretty": "commonjs pino-pretty",
    });

    // Ignore optional pino-pretty module to prevent build errors
    config.resolve = config.resolve || {};
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "pino-pretty": false,
      fs: false,
      net: false,
      tls: false,
    };

    // Fix for WalletConnect and other web3 libraries on the server side
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        lokijs: false,
        "pino-pretty": false,
        encoding: false,
      };
    }

    return config;
  },
};

export default nextConfig;
