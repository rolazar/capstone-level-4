export default {
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /\.json/,
        use: "babel-loader",
      },
      {
        test: /\.(jpg|png|ico)/,
        type: "asset/resource",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 1000 },
  mode: "development",
  devtool: "source-map",
};
