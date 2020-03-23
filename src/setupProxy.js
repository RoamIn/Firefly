const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
    app.use('/rexxar', createProxyMiddleware({
        target: 'https://m.douban.com',
        headers: {
            referer: 'https://m.douban.com/movie'
        },
        changeOrigin: true
    }))

    app.use('/j', createProxyMiddleware({
        target: 'https://movie.douban.com',
        changeOrigin: true
    }))

    app.use('/picture', createProxyMiddleware({
        target: 'https://img3.doubanio.com',
        pathRewrite: {
            '^/picture': ''
        },
        headers: {
            referer: 'https://m.douban.com/movie'
        },
        changeOrigin: true
    }))

    app.use('/api', createProxyMiddleware({
        target: 'http://liwei.site:8321',
        changeOrigin: true
    }))
}