import React, { Component } from 'react'

import MovieStage from './components/MovieStage'
import Tabs from '@/components/tabs'

import './index.scss'

class MoviesPage extends Component {
    state = {
        movieTypeList: [
            {
                api: 'in_theaters',
                name: '正在热映'
            },
            {
                api: 'coming_soon',
                name: '即将上映'
            },
            // {
            //     api: 'weekly',
            //     name: '口碑榜'
            // },
            // {
            //     api: 'new_movies',
            //     name: '新片榜'
            // },
            {
                api: 'top250',
                name: 'Top250'
            },
            // {
            //     api: 'us_box',
            //     name: '北美票房榜'
            // },
        ],
        params: {
            api: 'in_theaters'
        }
    }

    render() {
        return (
            <div className="page-movies">
                <Tabs defaultActiveKey="in_theaters">
                    {
                        this.state.movieTypeList.map(type =>
                            <div title={type.name} key={type.api}>
                                <MovieStage apiName={type.api} />
                            </div>
                        )
                    }
                </Tabs>
            </div>
        )
    }
}

export default MoviesPage