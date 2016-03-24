module.exports = function (config, env) {
  if (env === 'static' || env === 'production') {
    config.removeLoader('ttf')
    config.loader('ttf', {
      test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=/assets/fonts/[name].[ext]',
    })

    // config.removeLoader('svg')
    // config.loader('svg', {
    //   test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    //   loader: 'file-loader?name=[path]/[name].[ext]',
    // })
  }
  return config
}
