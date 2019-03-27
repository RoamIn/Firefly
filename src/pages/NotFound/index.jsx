import React, { Component } from 'react'

import './index.scss'

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="terminal">
                    <p className="prompt">The page you requested cannot be found right meow.</p>
                    <p className="prompt output new-output"></p>
                </div>
            </div>
        )
    }
}

export default NotFound