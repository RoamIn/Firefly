import React, { Component } from 'react'

import './index.scss'

class TPL extends Component {
    render() {
        return (
            <svg className="icon" aria-hidden="true">
                <use xlinkHref={`#icon-${this.props.type}`}></use>
            </svg >
        )
    }
}

export default TPL