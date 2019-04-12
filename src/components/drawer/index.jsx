import React, { Component } from 'react'
import classnames from 'classnames'

import Icon from '@/components/base/icon'

import './index.scss'

class Drawer extends Component {
    constructor({
        width = '345px',
        visible = false
    }) {
        super()

        this.state = {
            width,
            visible
        }
    }

    close() {
        this.setState({
            visible: false
        })

        this.props.onClose && this.props.onClose()
    }

    componentWillReceiveProps({ visible }) {
        this.setState({
            visible
        })
    }

    render() {
        const classNames = classnames({
            'c-drawer': true,
            'is-visible': this.state.visible
        })

        return (
            <div className={classNames} style={{
                width: this.state.width,
                right: this.state.visible ? 0 : `-${this.state.width}`
            }}>
                <div className="c-drawer__close-trigger" onClick={() => this.close()}>
                    <Icon type="menu-fold" />
                </div>
                <div className="c-drawer__body">{this.props.children}</div>
            </div>
        )
    }
}

export default Drawer