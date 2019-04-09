import React, { Component } from 'react'
import WebTorrent from 'webtorrent'

import './index.scss'

const magnet = 'magnet:?xs=http%3A%2F%2Fluntan.qd315.net%2Fforum.php%3Fmod%3Dattachment%26aid%3DMTQwMTE3fDcyYzlmOWRjfDE1NTMxNTY2NjF8MHw2NDYwNzI%3D&xt=urn:btih:3010eab6b41481bed89ae31c0c8b050c221d3064&dn=Prison.Break.S04E01-22.1080p.MIAOHH&tr=http%3A%2F%2Ft.nyaatracker.com%2Fannounce&tr=http%3A%2F%2Ftracker.kamigami.org%3A2710%2Fannounce&tr=http%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker1.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker2.itzmx.com%3A6961%2Fannounce&tr=http%3A%2F%2Ftracker2.wasabii.com.tw%3A6969%2Fannounce&tr=http%3A%2F%2Ftracker4.itzmx.com%3A2710%2Fannounce'
// const magnet = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'

class Player extends Component {
    componentDidMount() {
        const client = new WebTorrent({
            dht: false
        })

        window.tt = client.add(magnet, ({ files }) => {
            const file = files.find(file => file.name.endsWith('.mp4'))

            console.log(files)

            file.appendTo('body')
        })


        client.on('error', (error) => {
            console.error(error)
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Player