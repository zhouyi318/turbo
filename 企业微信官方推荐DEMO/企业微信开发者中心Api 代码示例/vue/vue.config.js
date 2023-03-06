module.exports = {
  publicPath:'/vue',
  // outputDir:'../vue-assets',
  // assetsDir:'vue-assets',
  indexPath:'index.ejs',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        ChangeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
  }


}