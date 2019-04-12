import React, { Component } from 'react'
import MovieDetail from '../Movie/'

import './index.scss'

class LivePage extends Component {
    render() {
        return (
            <main className="page-live">
                <MovieDetail />
            </main>
        )
    }
}

export default LivePage