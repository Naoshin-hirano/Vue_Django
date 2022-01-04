const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  // Mac publicPath: "http://0.0.0.0:8080/"
  publicPath: "http://0.0.0.0:8080/",

  outputDir: "./dist/",

  chainWebpack: (config) => {
    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }]);
    config.output.filename("bundle.js");
    config.optimization.splitChunks(false);
    config.resolve.alias.set("__STATIC__", "static");
    config.devServer
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .disableHostCheck(true)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },

  transpileDependencies: ["vuetify"],
};
