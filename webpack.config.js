const path = require("path");
// const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  // mode === "development" && new ReactRefreshWebpackPlugin(),
  // mode === "development" && new webpack.HotModuleReplacementPlugin(),

  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    // filename: "index.html",
  }),
  new PreloadWebpackPlugin({
    rel: 'preload',
    as(entry) {
      if (/\.css$/.test(entry)) return 'style';
      if (/\.woff$/.test(entry)) return 'font';
      if (/\.png$/.test(entry)) return 'image';
      return 'script';
    }
  }),
  new Dotenv({
    path: "./.env", // Path to .env file (this is the default)
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      {
        from: "./src/images/pwa/favicon.ico",
        to: "",
      },
      {
        from: "./src/images/pwa/logo192.png",
        to: "",
      },
      {
        from: "./src/images/pwa/logo512.png",
        to: "",
      },
      {
        from: "./src/manifest.json",
        to: "",
      },
      // {
      //   from: "./_redirects",
      //   to: "",
      // },
    ],
  }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  // Temporary workaround for 'browserslist' bug that is being patched in the near future
  target = "browserslist";

  plugins.push(
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
    })
  );
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  // mode defaults to 'production' if not set
  mode: mode,

  // This is unnecessary in Webpack 5, because it's the default.
  // However, react-refresh-webpack-plugin can't find the entry without it.
  entry: "./src/index.js",

  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    // output path is required for `clean-webpack-plugin`
    path: path.resolve(__dirname, "dist"),
    // this places all images processed in an image folder
    assetModuleFilename: "images/[hash][ext][query]",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // This is required for asset imports in CSS, such as url()
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "postcss-loader",
          // according to the docs, sass-loader should be at the bottom, which
          // loads it first to avoid prefixes in your sourcemaps and other issues.
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|png|jpe?g|gif|svg)$/i,
        /**
         * The `type` setting replaces the need for "url-loader"
         * and "file-loader" in Webpack 5.
         *
         * setting `type` to "asset" will automatically pick between
         * outputing images to a file, or inlining them in the bundle as base64
         * with a default max inline size of 8kb
         */
        type: "asset",

        /**
         * If you want to inline larger images, you can set
         * a custom `maxSize` for inline like so:
         */
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            // without additional settings, this will reference .babelrc
            loader: "babel-loader",
            options: {
              /**
               * From the docs: When set, the given directory will be used
               * to cache the results of the loader. Future webpack builds
               * will attempt to read from the cache to avoid needing to run
               * the potentially expensive Babel recompilation process on each run.
               */
              cacheDirectory: true,
            },
          },
          {
            loader: "@linaria/webpack-loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
              cacheDirectory: ".linaria-cache",
            },
          },
        ],
      },
    ],
  },

  plugins: plugins,

  target: target,

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      //
      "@comps": path.resolve(__dirname, "src/comps"),
      "@pages": path.resolve(__dirname, "src/pages"),
      //
      "@styles": path.resolve(__dirname, "src/styles"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@images": path.resolve(__dirname, "src/images"),
      //
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@configs": path.resolve(__dirname, "src/configs"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      //
    },
    runtimeChunk: "single",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
    // https://ui.dev/react-router-cannot-get-url-refresh/
    historyApiFallback: true,
  },
};
