import React from 'react'

const MovieList = ({movie}) => {
  return (
    <div>
      <ul>
          {movie.map((movieData, index) => (
            <li key={index}>
              <h2>{movieData.title}</h2>
              <p>Episode {movieData.episode_id}</p>
              <p>{movieData.opening_crawl}</p>
              <p>Release Date: {movieData.release_date}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MovieList
