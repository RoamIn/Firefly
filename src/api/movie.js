export default {
    search_tags: {
        method: 'GET',
        desc: '标签',
        url: '/j/search_tags'
        // Request: {
        // type: movie
        // source: index
        // }

        // Response: {
        //     {"tags":["热门","最新","豆瓣高分","冷门佳片","华语","欧美","韩国","日本"]}
        // }
    },
    search_subjects: {
        method: 'GET',
        desc: '正在热映',
        url: '/j/search_subjects',
        // Request: {
        // type: movie
        // tag: 最新
        // page_limit: 50
        // page_start: 0            
        // }

        // Response: {
        //     "subjects": [<Subject>, ...],
        // }
    },
    // https://m.douban.com/rexxar/api/v2/movie/30295905?ck=&for_mobile=1
    get_movie_detail: {
        method: 'GET',
        desc: '获取电影详情',
        url: '/rexxar/api/v2/movie/:id',
        suffix: 'id'
    }
}
