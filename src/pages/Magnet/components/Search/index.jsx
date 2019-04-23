import React, { Component } from 'react'
import queryString from 'query-string'

import Icon from '@/components/base/icon'

import './index.scss'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    search = (keyword) => {
        this.props.onSearch(keyword)
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value.trim()
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.search(this.state.value)
    }

    handleClear = () => {
        this.setState({
            value: ''
        })
    }

    componentDidMount() {
        const { title = '' } = queryString.parse(window.location.search)

        this.setState({
            value: title
        })
        this.search(title)
    }

    render() {
        return (
            <form className="magnet-search-form" onSubmit={this.handleSubmit}>
                <Icon className="icon icon-search" type="search" />
                <input type="text"
                    maxLength="20"
                    placeholder="Search ..."
                    autoComplete="off"
                    autoFocus="autofocus"
                    spellCheck="false"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <Icon className="icon icon-close" type="close"
                    onClick={this.handleClear}
                    v-show="keyword !== ''" />
            </form>
        )
    }
}

export default Search