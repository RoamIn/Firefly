import React, { Component } from 'react';

import Picture from '@/components/picture';

import './index.scss';

class MovieList extends Component {
  render() {
    return (
      <ul className="movies">
        {this.props.list.map(item =>
          <li
            className="movie"
            key={item.id}
            onClick={() => this.props.onClick(item.id)}
          >
            <div className="movie__poster">
              <Picture src={item.cover} alt={item.title} loading="lazy" />
            </div>
            <div className="movie__footer">
              <div className="movie__title">
                {item.title}
              </div>
              <span className="movie__rating">
                {item.rate}
              </span>
            </div>
          </li>
        )}
      </ul>
    );
  }
}

export default MovieList;
