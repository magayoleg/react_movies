import { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }
  searchMovies = (searchString, filterString) => {
    this.setState({ loading: true });
    searchString = searchString !== '' ? `&s=${searchString}` : '&s=matrix';
    filterString = filterString !== 'all' ? `&type=${filterString}` : '';
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}${searchString}${filterString}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.Search
          ? this.setState({ movies: data.Search, loading: false })
          : null
      );
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
