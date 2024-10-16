const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/', createProxyMiddleware({
  target: 'https://d404812291456946-8188.cn-northwest-2.gpu-instance.ppinfra.com',
  changeOrigin: true
}));