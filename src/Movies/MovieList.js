import React from "react";

const MovieList = (props) => {
  return (
    <ul>
      {props.movie.map((movie) => (
        <li key={movie.id}>
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
