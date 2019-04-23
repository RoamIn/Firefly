import React, { Component } from 'react'

import Spin from '@/components/base/spin'

import ajax from '@/utils/ajax'


import MovieList from '../MovieList'

import './index.scss'

const WINDOW_INNER_HEIGHT = window.innerHeight

class MovieStage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            isLoading: false,
            noMore: false,
            hasError: false,
            message: '',
            params: {
                ...props.params,
                start: 0,
                count: 20
            }
        }
    }

    updateLoading(bool) {
        this.setState({
            isLoading: bool
        })
    }

    handleScroll = (event) => {
        if (this.state.isLoading || this.state.noMore || this.state.hasError) {
            return
        }

        const { scrollHeight, scrollTop } = event.target
        const distanceToBottom = scrollHeight - WINDOW_INNER_HEIGHT - scrollTop

        if (distanceToBottom < 20) {
            console.log('next')
            this.search(this.state.params.start + this.state.params.count)
        }
    }

    search(start = 0) {
        this.setState({
            params: { ...this.state.params, start }
        })

        this.updateLoading(true)

        ajax(this.props.apiName, {
            ...this.state.params,
            start,
            count: this.state.params.count
        }).then((res) => {
            const { subjects } = res

            this.setState({
                list: this.state.list.concat(subjects),
                noMore: subjects.length === 0
            })
        }).catch(error => {
            console.log(error.message)
        }).finally(() => {
            this.updateLoading(false)
        })
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.params) !== JSON.stringify(this.props.params)) {
            this.search()
        }
    }

    componentDidMount() {
        this.search()
    }

    render() {
        const { isLoading } = this.state

        return (
            <section className="movie-stage" onScroll={this.handleScroll}>
                <div className="movie-stage__body">
                    <MovieList list={this.state.list} onClick={this.props.onClick} />
                    {isLoading && <Spin loading={isLoading} />}
                </div>
            </section>
        )
    }
}

export default MovieStage