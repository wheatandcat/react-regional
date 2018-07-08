const path = require("path");
const webpack = require("webpack");

module.exports = {
  // devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: "3000",
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react-app"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              mportLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  resolve: {
    modules: ["./src", "./node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"' + process.env.NODE_ENV + '"',
      "process.env.API_HOST":
        '"' + (process.env.API_HOST || "http://localhost:5000/") + '"'
    })
  ]
};
