import { Configuration } from "webpack";

export default {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /\.json/,
        use: "babel-loader",
      },
      {
        test: /\.(css|scss)/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|ico)/,
        type: "asset/resource",
      },
    ],
  },
  // watch: true,
  // watchOptions: { aggregateTimeout: 1000 },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
} as Configuration;
