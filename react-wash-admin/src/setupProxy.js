const { createProxyMiddleware } = require('http-proxy-middleware');
const proxyUrl = process.env.REACT_APP_BASE_URL;
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: proxyUrl,
      changeOrigin: true,
      secure: false,
      // headers: {
      //   Authorization: `Bearer ${loginToken}`,
      // },
    })
  )
}