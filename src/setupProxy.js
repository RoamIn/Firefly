const proxy = require( 'http-proxy-middleware' )

module.exports = function ( app ) {
    app.use( proxy( '/rexxar/api/v2', {
        target: 'https://m.douban.com',
        changeOrigin: true
    } ) )

    app.use( proxy( '/j', {
        target: 'https://movie.douban.com',
        changeOrigin: true
    } ) )

    app.use( proxy( '/api', {
        target: 'http://localhost:8321',
        changeOrigin: true
    } ) )
}