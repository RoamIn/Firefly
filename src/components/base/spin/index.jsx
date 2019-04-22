import React, { Component } from 'react'
import classnames from 'classnames'

import './index.scss'

class Spin extends Component {
    render() {
        const className = classnames({
            'c-spin': true,
            'spinning': this.props.loading
        })

        return (
            <div className={className}>
                <div className="c-spin__box">
                    <span className="c-spin__animate">
                        <div className="primary primary-red"></div>
                        <div className="primary primary-green"></div>
                        <div className="primary primary-blue"></div>
                    </span>
                    {/* <span className="c-spin__text">Loading...</span> */}
                </div>
            </div>
        )
    }
}

export default Spin