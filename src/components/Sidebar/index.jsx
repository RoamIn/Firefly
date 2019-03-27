import React, { Component } from 'react'
import { Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom';

import './index.scss'

class Sidebar extends Component {
    state = {
        navigates: [
            {
                path: '/dashboard',
                icon: 'home'
            },
            {
                path: '/press',
                icon: 'read'
            },
            {
                path: '/user',
                icon: 'team'
            },
            {
                path: '/setting',
                icon: 'setting'
            }
        ]
    }

    render() {
        return (
            <section className="sidebar">
                <header>
                    <Icon className="icon" type='search' style={{ color: '#fff' }} />
                </header>
                <ul className="sidebar__navigator">
                    {this.state.navigates.map((navigate, index) =>
                        <nav className={this.props.location.pathname === navigate.path ? 'active' : ''} key={index}>
                            <Link to={navigate.path}>
                                <Icon className="sidebar__navigator-icon" type={navigate.icon} />
                            </Link>
                        </nav>
                    )}
                </ul>
                <footer>
                    <Icon className="icon" type='github' style={{ color: '#fff' }} theme="filled" />
                </footer>
            </section>
        )
    }
}

export default withRouter(Sidebar)