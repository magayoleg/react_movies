import style from './Movie.module.sass';

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div id={imdbID} className={`card ${style.movie}`}>
      <div
        className={`card-image waves-effect waves-block waves-light ${style.image}`}
      >
        {Poster === 'N/A' ? (
          <img
            src={`https://via.placeholder.com/240x320?text=No Poster`}
            alt={Title}
          />
        ) : (
          <img className="activator" src={Poster} alt={Title} />
        )}
      </div>
      <div className={`card-content movie-title ${style.content}`}>
        <span
          className={`card-title activator grey-text text-darken-4 ${style.title}`}
        >
          {Title}
        </span>
        <p>
          {Year}
          <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
