/* eslint-disable */
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const webpack = require("webpack");

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = function(file) {
      return {}
  }
}

let uncaughtException_times = 0;
process.on('uncaughtException', function (err) {
    uncaughtException_times++;
    console.error(`--------------------uncaughtException:${uncaughtException_times}`)
    //打印出错误
    console.error(err);
    //打印出错误的调用栈方便调试
    console.error(err.stack);
    console.error(`--------------------uncaughtException - end`)
    if (uncaughtException_times === 10) {
        throw err
    }
});

console.log(`out from next.config.js :`)
console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`)
console.log(`process.env.PRODUCTION_TYPE = ${process.env.PRODUCTION_TYPE}`)

module.exports = withCss(withLess({
    // target: 'serverless',
    cssModules: false,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    webpack:function(config, option) {
        let isServer = option.isServer
        //config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
        //服务器端应用运行时的环境变量无法传入客户端环境变量，在build环节将环境变量注入到客户端脚本的编译中
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.PRODUCTION_TYPE': JSON.stringify(process.env.PRODUCTION_TYPE)
            })
        )
        return config
    }
}))
