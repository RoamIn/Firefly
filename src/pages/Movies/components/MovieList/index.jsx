import React, { Component } from 'react'

import './index.scss'

class MovieList extends Component {
    render() {
        return (
            <ul className="movies">
                {this.props.list.map((item, index) =>
                    <li className="movie" key={index} onClick={() => this.props.onClick(item.id)}>
                        <div className="movie__poster" style={{
                            backgroundImage: `url(${item.images.small})`
                        }}></div>
                        <div className="movie__footer">
                            <div className="movie__title">{item.title}</div>
                            <span className="movie__rating">{item.rating.average === 0 ? '' : item.rating.average}</span>
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}

export default MovieList