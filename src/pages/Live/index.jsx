import React, { Component } from 'react'
import Player from '@/components/player'

import './index.scss'

class LivePage extends Component {
    render() {
        return (
            <main className="page-live">
                Movie Page
                <Player />
            </main>
        )
    }
}

export default LivePage