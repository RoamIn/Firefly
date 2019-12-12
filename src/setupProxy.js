const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/rexxar', {
        target: 'https://m.douban.com',
        headers: {
            referer: 'https://m.douban.com/movie'
        },
        changeOrigin: true
    }))

    app.use(proxy('/j', {
        target: 'https://movie.douban.com',
        changeOrigin: true
    }))

    app.use(proxy('/picture', {
        target: 'https://img3.doubanio.com',
        pathRewrite: {
            '^/picture': ''
        },
        headers: {
            referer: 'https://m.douban.com/movie'
        },
        changeOrigin: true
    }))

    app.use(proxy('/api', {
        target: 'http://localhost:8321',
        changeOrigin: true
    }))
}