import { lazy } from 'react'

export default [
    {
        path: '/magnet',
        name: 'Magnet',
        icon: 'magnet',
        exact: true,
        component: lazy(() => import('@/pages/Magnet'))
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
