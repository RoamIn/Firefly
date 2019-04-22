export default {
    // Request: {
    //     start: 0
    //     count: 20
    // }

    // Response: {
    //     "start": 0,
    //     "count": 20,
    //     "total": 39,
    //     "subjects": [<Subject>, ...],
    // }
    in_theaters: {
        method: 'GET',
        desc: '正在热映',
        url: '/v2/movie/in_theaters'
    },
    coming_soon: {
        method: 'GET',
        desc: '即将上映',
        url: '/v2/movie/coming_soon'
    },
    weekly: {
        method: 'GET',
        desc: '口碑榜[需要权限]',
        url: '/v2/movie/weekly'
    },
    new_movies: {
        method: 'GET',
        desc: '新片榜[需要权限]',
        url: '/v2/movie/new_movies'
    },
    top250: {
        method: 'GET',
        desc: 'Top250',
        url: '/v2/movie/top250'
    },
    us_box: {
        method: 'GET',
        desc: '北美票房榜',
        url: '/v2/movie/us_box'
    },

    search: {
        method: 'GET',
        desc: '',
        url: '/v2/movie/search'
    },

    get_movie_detail: {
        method: 'GET',
        desc: '获取电影详情',
        suffix: 'id',
        url: '/v2/movie/subject/:id'
    }
}
