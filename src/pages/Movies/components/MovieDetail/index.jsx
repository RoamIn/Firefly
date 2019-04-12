import React, { Component } from 'react'
import Rate from '@/components/rate'
import Celebrities from '@/components/celebrities'

import ajax from '@/utils/ajax'

import './index.scss'

class MovieDetail extends Component {
    constructor(props) {
        super()

        this.state = {
            id: 0,
            data: {
                countries: [],
                directors: [],
                casts: [],
                genres: [],
                images: [],
                aka: [],
                rating: {}
            },
            isLoading: false
        }
    }

    updateLoading(bool) {
        this.setState({
            isLoading: bool
        })
    }

    getMovieDetail(id) {
        if (id === 0) return false

        this.updateLoading(true)

        ajax('get_movie_detail', { id }).then((res) => {
            this.setState({
                data: res
            })
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            this.updateLoading(false)
        })
    }

    componentWillReceiveProps({ id }) {
        this.setState({ id })
        this.getMovieDetail(id)
    }

    render() {
        const data = this.state.data

        return (
            <div className="movie-detail">
                <div className="movie-detail__header">{data.title}</div>

                <div className="movie-detail__body">
                    <div className="movie-detail__poster" alt="poster" style={{
                        backgroundImage: `url(${data.images.small})`
                    }} />

                    <div className="card">
                        <div className="card__body">
                            <div className="detail-info-item">
                                <span className="detail-info-item__label">豆瓣评分: </span>
                                <span className="detail-info-item__text">
                                    <Rate rate={data.rating.average} />
                                </span>
                            </div>
                            <div className="detail-info-item">
                                <span className="detail-info-item__label">类型: </span>
                                <span className="detail-info-item__text">{data.genres.join(' / ')}</span>
                            </div>
                            <div className="detail-info-item">
                                <span className="detail-info-item__label">制片国家/地区: </span>
                                <span className="detail-info-item__text">{data.countries.join(' / ')}</span>
                            </div>
                            <div className="detail-info-item">
                                <span className="detail-info-item__label">上映日期: </span>
                                <span className="detail-info-item__text">{data.year}</span>
                            </div>
                            <div className="detail-info-item">
                                <span className="detail-info-item__label">又名: </span>
                                <span className="detail-info-item__text">
                                    {data.aka.join(' / ')}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h4 className="card__title">导演</h4>
                        <div className="card__body">
                            <Celebrities className="directors" list={data.directors} />
                        </div>
                    </div>

                    <div className="card">
                        <h4 className="card__title">主演</h4>
                        <div className="card__body">
                            <Celebrities className="casts" list={data.casts} />
                        </div>
                    </div>

                    <div className="card">
                        <h4 className="card__title">剧情简介</h4>
                        <div className="card__body">
                            <p className="summary">{data.summary}</p>
                        </div>
                    </div>
                </div>

                <div className="movie-detail__footer">
                    <button className="search-button">Search Magnet</button>
                </div>
            </div>
        )
    }
}

export default MovieDetail