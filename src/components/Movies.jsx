import { Movie } from './Movie';
import style from './Movies.module.sass';

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className={`${style.movies}`}>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { Movies };
