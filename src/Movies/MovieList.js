import React from "react";
import '../Style/MovieList.css';

const MovieList = (props) => {
  return (
    <ul className="items">
      {props.movie.map((movie) => (
        <li key={movie.id} className="list-item">
          <h2>{movie.title}</h2>
          <p>{movie.openingText}</p>
          <p>{movie.releaseDate}</p>
          <button onClick={() => props.onDeleteMovie(movie.id)}>
            Delete Movie
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
