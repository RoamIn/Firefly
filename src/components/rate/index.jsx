import React, { Component } from 'react'
import classNames from 'classnames'

import Icon from '../base/icon'

import './index.scss'

class Rate extends Component {
    render() {
        const rate = Math.ceil(this.props.rate)
        const starElements = []
        const starOutlineElements = []
        const classString = classNames(
            'c-rate',
            this.props.className
        )

        for (let i = 0; i < parseInt(rate / 2); i++) {
            starElements.push(<Icon type="star" key={i} />)
        }

        for (let i = 0; i < 5 - parseInt(rate / 2) - rate % 2; i++) {
            starOutlineElements.push(<Icon type="star-outline" key={i} />)
        }

        return (
            <div className={classString}>
                {starElements}
                {rate % 2 === 1 &&
                    <Icon type="star-half" />
                }
                {starOutlineElements}
                <span className="c-rate__num">{this.props.rate}</span>
            </div>
        )
    }
}

export default Rate