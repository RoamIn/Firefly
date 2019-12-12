import React, { Component } from 'react';

import Picture from '@/components/picture';

import './index.scss';

class Celebrity extends Component {
  static defaultProps = {
    list: []
    // data: {
    //     alt: '',
    //     avatars: {
    //         small: '',
    //         large: '',
    //         medium: ''
    //     },
    //     name: '',
    //     id: 0
    // }
  };

  render() {
    return (
      <div className="c-celebrities">
        {this.props.list.map((celebrity, index) =>
          <div className="c-celebrity" key={celebrity.id}>
            <div className="c-celebrity__avatar">
              <Picture
                src={celebrity.avatar.normal}
                alt={celebrity.name}
                loading="lazy"
              />
            </div>
            <div className="c-celebrity__name">
              {celebrity.name}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Celebrity;
