import React, { Component } from 'react'

import './index.scss'

class Layout extends Component {
    render() {
        return (
            <div className="c-layout">
                <div className="sider"></div>
                <div className="content"></div>
                <div className="header"></div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default Layout