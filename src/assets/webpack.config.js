module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      // Other rules...
    ],
  },
  // Other configurations...
};
