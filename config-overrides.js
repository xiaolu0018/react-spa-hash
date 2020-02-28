const path = require('path')
const apiMocker = require("mocker-api");
const {
  override,
  fixBabelImports,
  addLessLoader,
  disableEsLint,
  addWebpackAlias,
  addDecoratorsLegacy,
  addBabelPresets,
  addBabelPlugins,
  adjustStyleLoaders,
  watchAll
} = require('customize-cra')

const antVar = require('./src/style/ant-theme.js') //antd变量覆盖
const globalVar = require('./src/style/global-val.js') //全局变量


module.exports = {
  webpack: override(
    addWebpackAlias({
      ['@']: path.resolve(__dirname, 'src'),
      ['@api']: path.resolve(__dirname, 'src/api')
    }),
    // disableEsLint(),
    addDecoratorsLegacy(),
    addBabelPresets('@babel/preset-react'),
    addBabelPlugins(
      'react-hot-loader/babel',
      '@babel/plugin-syntax-dynamic-import'
    ),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      sourceMap: true,
      modifyVars: antVar,
      globalVars: globalVar
    }),
    // adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor ] }) => {
    //   css.options.sourceMap = true;         // css-loader
    //   postcss.options.sourceMap = true;     // postcss-loader
    //   // when enable pre-processor,
    //   // resolve-url-loader will be enabled too
    //   if (resolve) {
    //     resolve.options.sourceMap = true;   // resolve-url-loader
    //   }
    //   // pre-processor
    //   if (processor && processor.loader.includes('less-loader')) {
    //     processor.options.sourceMap = true; // sass-loader
    //   }
    // }),
    watchAll()
  ),
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.before = function (app) {
        apiMocker(app, path.resolve("./data/data.js"), {
          proxy: {
            "/*": {
              ws: false,
              target: "http://127.0.0.1:3777/",
              changeOrigin: true
            }
          },
          changeHost: true
        });
      }
      return config;
    }

  }
}
