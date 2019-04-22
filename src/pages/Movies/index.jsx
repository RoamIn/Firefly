import React, { Component } from 'react'

import Tabs from '@/components/tabs'
import Drawer from '@/components/drawer'
import Icon from '@/components/base/icon'

import MovieStage from './components/MovieStage'
import MovieDetail from './components/MovieDetail'

import ajax from '@/utils/ajax'

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
        },
        movieId: 0,
        drawer: {
            width: '345px',
            visible: false
        }
    }

    viewMovie(movieId) {
        this.setState({
            movieId
        })
        this.showDrawer()
    }

    showDrawer() {
        this.setState({
            drawer: {
                ...this.state.drawer,
                visible: true
            }
        })
    }

    hideDrawer() {
        this.setState({
            drawer: {
                ...this.state.drawer,
                visible: false
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        ajax('search', { q: '复仇者' }).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            // this.updateLoading(false)
        })
    }

    render() {
        return (
            <div className="page-movies">
                <form className="search-bar" onSubmit={this.handleSubmit}>
                    <input className="search-bar__input" type="text" placeholder="Search..." />

                    <div className="search-bar__button">
                        <Icon type="search" />
                    </div>
                </form>

                <div className="page-movies__body">
                    <Tabs defaultActiveKey="in_theaters">
                        {
                            this.state.movieTypeList.map(type =>
                                <div title={type.name} key={type.api}>
                                    <MovieStage apiName={type.api} onClick={(movieId) => this.viewMovie(movieId)} />
                                </div>
                            )
                        }
                    </Tabs>
                </div>

                <div className="page-movies__drawer" style={{
                    width: this.state.drawer.visible ? this.state.drawer.width : 0
                }}>
                    <Drawer width={this.state.drawer.width}
                        visible={this.state.drawer.visible}
                        onClose={() => { this.hideDrawer() }}>
                        <MovieDetail id={this.state.movieId} />
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default MoviesPage