import React, { Component } from "react";
import queryString from "query-string";

import Drawer from "components/drawer";

import MovieStage from "./components/MovieStage";
import MovieDetail from "./components/MovieDetail";

import "./index.scss";

class MoviesPage extends Component {
  state = {
    params: {
      q: "",
    },
    movieId: 0,
    drawer: {
      width: "345px",
      visible: false,
    },
  };

  handleViewMovie = (movieId) => {
    this.setState({
      movieId,
    });
    this.showDrawer();
  };

  showDrawer() {
    this.setState({
      drawer: {
        ...this.state.drawer,
        visible: true,
      },
    });
  }

  handleDrawerClose = () => {
    this.setState({
      drawer: {
        ...this.state.drawer,
        visible: false,
      },
    });
  };

  updateParams(search) {
    const { q = "" } = queryString.parse(search);

    this.setState({
      params: {
        q,
      },
    });
  }

  componentWillMount() {
    this.updateParams(this.props.location.search);
  }

  render() {
    return (
      <div className="page-movies">
        <div className="page-movies__body">
          <MovieStage
            apiName="search"
            params={this.state.params}
            onClick={this.handleViewMovie}
          />
        </div>

        <div
          className="page-movies__drawer"
          style={{
            width: this.state.drawer.visible ? this.state.drawer.width : 0,
          }}
        >
          <Drawer
            width={this.state.drawer.width}
            visible={this.state.drawer.visible}
            onClose={this.handleDrawerClose}
          >
            <MovieDetail id={this.state.movieId} />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default MoviesPage;
