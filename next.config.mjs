/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                { name: "removeViewBox", active: false },
                "cleanupIds",
                "prefixIds",
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
