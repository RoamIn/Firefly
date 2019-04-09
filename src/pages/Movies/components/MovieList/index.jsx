import React, { Component } from 'react'
import Icon from '@/components/base/icon'
import Rate from '@/components/rate'

import './index.scss'

class MovieListPage extends Component {
    render() {
        return (
            <ul className="movie-list">
                {this.props.list.map((item, index) =>
                    <li className="movie-list__item" key={index}>
                        <div className="movie-list__item-poster" style={{
                            backgroundImage: `url(${item.images.small})`
                        }}></div>
                        <div className="movie-list__item-content" href="/">
                            <div className="movie-list__movie-title">
                                {item.is_new &&
                                    <Icon className="movie-list__icon-new" type="new" style={{
                                        color: "#63c150",
                                        fontSize: "24px"
                                    }} />
                                }
                                {item.title}
                            </div>
                            <div className="movie-list__movie-genres">
                                {
                                    item.genres.map((genre) =>
                                        <span className="movie-list__movie-genre" key={genre}>{genre}</span>
                                    )
                                }
                            </div>
                            <Rate className="movie-list__movie-rate" rate={item.rating.average} />
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}

export default MovieListPage