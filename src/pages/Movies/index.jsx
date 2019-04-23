import React, { Component } from 'react'
import classnames from 'classnames'

import Icon from '@/components/base/icon'
import Drawer from '@/components/drawer'
import Tabs from '@/components/tabs'

import MovieStage from './components/MovieStage'
import MovieDetail from './components/MovieDetail'

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
        movieId: 0,
        tabsActiveKey: '',
        searchBarInputValue: '',
        params: {
            q: ''
        },
        drawer: {
            width: '345px',
            visible: false
        }
    }

    handleViewMovie = (movieId) => {
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

    handleDrawerClose = () => {
        this.setState({
            drawer: {
                ...this.state.drawer,
                visible: false
            }
        })
    }

    handleSearchBarInputChange = (event) => {
        const searchBarInputValue = event.target.value.trim()

        this.setState({
            searchBarInputValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const q = this.state.searchBarInputValue

        if (q === '') return

        this.setState({
            tabsActiveKey: 'search',
            params: {
                q
            }
        })
    }

    handleTabsChange = (activeKey) => {
        if (activeKey !== this.state.tabsActiveKey) {
            this.setState({
                tabsActiveKey: '',
                searchBarInputValue: ''
            })
        }
    }

    render() {
        const isSearch = this.state.searchBarInputValue !== ''
        const searchBarInputClassNames = classnames({
            'search-bar__input': true,
            'active': isSearch
        })

        return (
            <div className="page-movies">
                <div className="page-movies__body">
                    <form className="search-bar" onSubmit={this.handleSubmit}>
                        <input className={searchBarInputClassNames}
                            autoComplete="off"
                            type="text"
                            placeholder="Search..."
                            value={this.state.searchBarInputValue}
                            onChange={this.handleSearchBarInputChange} />

                        <div className="search-bar__button">
                            <Icon type="search" />
                        </div>
                    </form>

                    <Tabs defaultActiveKey="in_theaters" activeKey={this.state.tabsActiveKey} onChange={this.handleTabsChange}>
                        {
                            this.state.movieTypeList.map(type =>
                                <div title={type.name} key={type.api}>
                                    <MovieStage apiName={type.api} onClick={this.handleViewMovie} />
                                </div>
                            )
                        }
                        <div title="" key="search">
                            < MovieStage apiName="search" params={this.state.params} onClick={this.handleViewMovie} />
                        </div>
                    </Tabs>
                </div>

                <div className="page-movies__drawer" style={{
                    width: this.state.drawer.visible ? this.state.drawer.width : 0
                }}>
                    <Drawer width={this.state.drawer.width}
                        visible={this.state.drawer.visible}
                        onClose={this.handleDrawerClose}>
                        <MovieDetail id={this.state.movieId} />
                    </Drawer>
                </div>
            </div>
        )
    }
}

export default MoviesPage