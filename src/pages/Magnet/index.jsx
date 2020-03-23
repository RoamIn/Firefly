import React, { Component } from 'react';

import Spin from '@/components/base/spin';

import ajax from '@/utils/ajax';

import Search from './components/Search';
import MagnetList from './components/MagnetList';

import './index.scss';

const WINDOW_INNER_HEIGHT = window.innerHeight;

class MagnetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      searchParams: {
        title: '',
        page: 1
      },
      isLoading: false,
      noMore: false,
      hasError: false,
      message: ''
    };
  }

  setSearchParams(params = {}) {
    this.setState({
      searchParams: Object.assign(this.state.searchParams, params)
    });
  }

  searchMagnet() {
    const data = { ...this.state.searchParams };

    this.updateLoading(true);
    this.setState({
      hasError: false,
      message: ''
    });

    setTimeout(() => {
      ajax('searchMagnet', data)
        .then(({ data }) => {
          this.setState({
            list: this.state.list.concat(data.rows),
            noMore: data.rows.length === 0
          });
        })
        .catch(error => {
          this.setState({
            hasError: true,
            message: error.message
          });
        })
        .finally(() => {
          this.updateLoading(false);
        });
    }, 1000);
  }

  search({ title = '', page = 1 }) {
    this.setState({
      list: [],
      title: '',
      noMore: false
    });

    this.setSearchParams({ title, page });
    this.searchMagnet();
  }

  nextPage() {
    const page = this.state.searchParams.page + 1;

    this.setSearchParams({ page });
    this.searchMagnet();
  }

  updateLoading(bool) {
    this.setState({
      isLoading: bool
    });
  }

  onScroll(e) {
    if (this.state.isLoading || this.state.noMore || this.state.hasError) {
      return;
    }

    const { scrollHeight, scrollTop } = e.target;
    const distanceToBottom = scrollHeight - WINDOW_INNER_HEIGHT - scrollTop;

    if (distanceToBottom < 20) {
      this.nextPage();
    }
  }

  render() {
    const { isLoading } = this.state;

    return (
      <main className="page-magnet" onScroll={e => this.onScroll(e)}>
        <Search
          class="search"
          keyword={this.state.title}
          onSearch={title => this.search({ title })}
        />

        <MagnetList list={this.state.list} />
        {isLoading && <Spin loading={isLoading} />}
        {this.state.hasError && (
          <div className="error">{this.state.message}</div>
        )}
        {!isLoading && this.state.noMore && (
          <div className="no-result">
            {this.state.list.length === 0
              ? `</> There's nothing here ...`
              : '</End>'}
          </div>
        )}
      </main>
    );
  }
}

export default MagnetPage;
