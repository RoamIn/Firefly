import React, { Component } from 'react';

import Drawer from '@/components/drawer';
import Tabs from '@/components/tabs';

import ajax from '@/utils/ajax';

import MovieStage from './components/MovieStage';
import MovieDetail from './components/MovieDetail';

import './index.scss';

class MoviesPage extends Component {
  state = {
    movieTagList: [],
    movieId: 0,
    tabsActiveKey: '',
    drawer: {
      width: '345px',
      visible: false
    }
  };

  handleViewMovie = movieId => {
    this.setState({
      movieId
    });
    this.showDrawer();
  };

  showDrawer() {
    this.setState({
      drawer: {
        ...this.state.drawer,
        visible: true
      }
    });
  }

  handleDrawerClose = () => {
    this.setState({
      drawer: {
        ...this.state.drawer,
        visible: false
      }
    });
  };

  handleTabsChange = activeKey => {
    if (activeKey !== this.state.tabsActiveKey) {
      this.setState({
        tabsActiveKey: ''
      });
    }
  };

  getMovieTags() {
    ajax('search_tags', {
      type: 'movie',
      source: 'index'
    })
      .then(res => {
        const { tags } = res;

        this.setState({
          movieTagList: tags,
          tabsActiveKey: tags[0]
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  componentDidMount() {
    this.getMovieTags();
  }

  render() {
    return (
      <div className="page-movies">
        <div className="page-movies__body">
          <Tabs
            defaultActiveKey="in_theaters"
            activeKey={this.state.tabsActiveKey}
            onChange={this.handleTabsChange}
          >
            {this.state.movieTagList.map(tag =>
              <div title={tag} key={tag}>
                <MovieStage params={{ tag }} onClick={this.handleViewMovie} />
              </div>
            )}
          </Tabs>
        </div>

        <div
          className="page-movies__drawer"
          style={{
            width: this.state.drawer.visible ? this.state.drawer.width : 0
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
