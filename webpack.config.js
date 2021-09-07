const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const Dotenv = require("dotenv-webpack");

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

let mode = "development";
let target = "web";

const plugins = [
  // mode === "development" && new ReactRefreshWebpackPlugin(),

  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    // filename: "index.html",
  }),

  // new Dotenv({
  //   path: "./.env", // Path to .env file (this is the default)
  //   systemvars: true,
  // }),
  new CopyPlugin({
    patterns: [
      {
        from: "./src/manifest.json",
        to: "",
      },
    ],
  }),
  // new BundleAnalyzerPlugin(),
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

// for development mode
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
            // Do not use together style-loader and mini-css-extract-plugin.
            // devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            // plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
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
            loader: require.resolve("babel-loader"),
            options: {
              /**
               * From the docs: When set, the given directory will be used
               * to cache the results of the loader. Future webpack builds
               * will attempt to read from the cache to avoid needing to run
               * the potentially expensive Babel recompilation process on each run.
               */
              cacheDirectory: true,
              plugins: [
                process.env.NODE_ENV !== "production" &&
                  require.resolve("react-refresh/babel"),
              ].filter(Boolean),
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

  devtool: "source-map", // show where the error is

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      //
      "@comps": path.resolve(__dirname, "src/comps"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
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
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      (compiler) => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin({
          terserOptions: {
            compress: {},
            format: {
              comments: false,
            },
          },
          extractComments: false,
          // enable parallel running
          parallel: true,
        }).apply(compiler);
      },
    ],
    splitChunks: {
      // chunks: "all",
      // minChunks: 2,
      // cacheGroups: {
      //   commons: {
      //     name: "common",
      //   },
      // },
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
    // runtimeChunk: "single",
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
    /**
     * for choose module id
     * this is deprecated in the webpack 5
     */
    moduleIds: "deterministic",
    // This will enable CSS optimization only in production mode.
    //  If you want to run it also in development set the optimization.minimize option to true.
    // minimize: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    host: "192.168.1.9",
    disableHostCheck: true,
    hot: true,
    // https://ui.dev/react-router-cannot-get-url-refresh/
    historyApiFallback: true,
  },
}; 
