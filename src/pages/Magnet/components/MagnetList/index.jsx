import React, { Component } from 'react'
import moment from 'moment'

import Icon from '@/components/base/icon'

import './index.scss'

class Search extends Component {
    copy() {

    }

    render() {
        return (
            <ul className="magnet-list">
                {this.props.list.map((item, index) =>
                    <li className="magnet-list__item" key={index}>
                        <div className="magnet">
                            <div className="magnet__content">
                                <h4 className="magnet__title">{item.title}</h4>
                                <div className="magnet__sub-info">
                                    <time className="magnet__create-time">
                                        <Icon className="icon-time" type="calendar" />
                                        {moment(item.created, moment.ISO_8601).format('YYYY-MM-DD')}
                                    </time>
                                    <span className="magnet__size">
                                        <Icon className="icon-attachment" type="attachment" />
                                        {(item.length / 1073741824).toFixed(2)} G
                                </span>
                                </div>
                            </div>
                            <div className="magnet__attachment">
                                <button className="copy-btn" onClick={() => this.copy(item.magnet)}>复制磁力链接</button>
                            </div>
                        </div>
                    </li >)
                }
            </ul >
        )
    }
}

export default Search