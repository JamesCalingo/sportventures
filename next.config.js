const nextConfig = {
  // target: "serverless",
  images: {
    remotePatterns: [new URL('https://bananaball.com/wp-content/uploads/2023/11/BananaBallRules.png')],
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
