const nextConfig = {
  // target: "serverless",
  images: {
    remotePatterns: [new URL('https://sportventures.vercel.app/'), new URL('https://railriders.milbstore.com/cdn/shop/products/BB2_720x.jpg?v=1595528245')],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
