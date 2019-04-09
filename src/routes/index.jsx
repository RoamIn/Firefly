import { lazy } from 'react'

export default [
    {
        path: '/movie',
        name: 'Movie',
        icon: 'movie',
        exact: true,
        component: lazy(() => import('@/pages/Movie'))
    },
    {
        path: '/live',
        name: 'Live',
        icon: 'live',
        exact: true,
        component: lazy(() => import('@/pages/Live'))
    },
    {
        path: '/',
        name: 'Home',
        icon: 'movie1',
        exact: true,
        component: lazy(() => import('@/pages/Movies'))
    },
    {
        path: '/*',
        name: 'NotFound',
        icon: '404',
        component: lazy(() => import('@/pages/NotFound'))
    }
]
