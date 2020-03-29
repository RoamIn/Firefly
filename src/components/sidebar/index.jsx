import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Icon from "components/base/icon";

import "./index.scss";

class Sidebar extends Component {
  state = {
    navigates: [
      {
        path: "/",
        name: "Home",
        icon: "movie",
        exact: true,
      },
      {
        path: "/magnet",
        name: "Magnet",
        icon: "magnet",
      },
    ],
  };

  render() {
    return (
      <div className="c-sidebar">
        <div className="c-sidebar__header"></div>
        <div className="c-sidebar__body">
          <ul className="c-sidebar__navigator-list">
            {this.state.navigates.map((route, index) => (
              <nav
                className={`c-sidebar__navigator-item ${
                  this.props.location.pathname === route.path ? "is-active" : ""
                }`}
                key={index}
              >
                <Link className="navigator-link" to={route.path}>
                  <Icon className="navigator-link__icon" type={route.icon} />
                  <span className="navigator-link__name">{route.name}</span>
                </Link>
              </nav>
            ))}
          </ul>
        </div>
        <div className="c-sidebar-footer"></div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
