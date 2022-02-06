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
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=game`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  searchMovies = (searchString, filterString) => {
    this.setState({ loading: true });
    searchString = searchString !== '' ? `&s=${searchString}` : '&s=game';
    filterString = filterString !== 'all' ? `&type=${filterString}` : '';
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}${searchString}${filterString}`
    )
      .then((response) => response.json())
      .then((data) =>
        data.Search
          ? this.setState({ movies: data.Search, loading: false })
          : null
      )
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
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
