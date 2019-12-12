import React, { Component } from 'react';

import './index.scss';

class Picture extends Component {
  render() {
    const { src = '', alt, ...etcProps } = this.props;

    return <img src={'/picture' + src} alt={alt} {...etcProps} />;
  }
}

export default Picture;
