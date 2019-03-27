import Movies from '@/pages/Movies'
import Movie from '@/pages/Movie'
import NotFound from '@/pages/NotFound'

export default [
    {
        path: '/',
        component: Movies
    },
    {
        path: '/movie',
        exact: true,
        component: Movie
    },
    {
        path: '/*',
        component: NotFound
    },
]
