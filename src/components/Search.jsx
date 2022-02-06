import { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    filter: 'all',
  };

  searchValue = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.filter);
    }
  };

  handleFilter = (e) => {
    this.setState(() => ({ filter: e.target.dataset.filter }), () => {
      this.props.searchMovies(this.state.search, this.state.filter);
    });

  };

  render() {
    return (
      <div className="row search-form">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="search"
            id="email"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.searchValue}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.filter)
            }
          >
            Search
          </button>
        </div>
        <div className="filter-form">
          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap"
              name="filter"
              type="radio"
              data-filter="all"
              checked={this.state.filter === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap"
              name="filter"
              type="radio"
              data-filter="movie"
              checked={this.state.filter === 'movie'}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap"
              name="filter"
              type="radio"
              data-filter="series"
              checked={this.state.filter === 'series'}
            />
            <span>Series only</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              className="with-gap"
              name="filter"
              type="radio"
              data-filter="game"
              checked={this.state.filter === 'game'}
            />
            <span>Games only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
