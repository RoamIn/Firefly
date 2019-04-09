import React, { Component } from 'react'
import classnames from 'classnames'

import './index.scss'

class Tabs extends Component {
    static defaultProps = {
        defaultActiveKey: '1'
    }

    constructor(props) {
        super()

        this.state = {
            activeKey: props.defaultActiveKey || this.default.defaultActiveKey
        }
    }

    renderHeader() {
        return React.Children.map(this.props.children, (element, index) => {
            const isActive = element.key === this.state.activeKey ? 'is-active' : null

            return (
                <span className={classnames('c-tabs__title', isActive)} onClick={() => {
                    this.setState({
                        activeKey: element.key
                    })
                }}>{element.props.title}</span>
            )
        })
    }

    renderContent() {
        return React.Children.map(this.props.children, (element) => {
            if (element.key === this.state.activeKey) {
                return (
                    <div className="c-tabs__pane">{element.props.children}</div>
                )
            }
        })
    }

    render() {
        return (
            <div className="c-tabs">
                <div className="c-tabs__header">{this.renderHeader()}</div>
                <div className="c-tabs__body">{this.renderContent()}</div>
            </div>
        )
    }
}

export default Tabs