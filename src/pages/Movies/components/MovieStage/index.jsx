import React, { Component } from 'react'
import MovieList from '../MovieList'

import './index.scss'

import ajax from '@/utils/ajax'

class MovieStagePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        ajax(this.props.apiName, {
            start: 0,
            count: 20
        }).then((res) => {
            const { subjects } = res

            this.setState({
                list: subjects
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    render() {
        return (
            <section className="movie-stage">
                <div className="movie-stage__body">
                    <MovieList list={this.state.list} />
                </div>
            </section>
        )
    }
}

export default MovieStagePage