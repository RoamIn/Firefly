import React, { Component } from 'react'
import classNames from 'classnames'

import './index.scss'

class Icon extends Component {
    render() {
        const classString = classNames(
            'c-icon',
            this.props.className
        )
        return (
            <i className={classString} style={this.props.style}>
                <svg aria-hidden="true">
                    <use xlinkHref={`#icon-${this.props.type}`}></use>
                </svg >
            </i>
        )
    }
}

export default Icon