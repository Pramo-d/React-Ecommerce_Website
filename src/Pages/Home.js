import { useState} from "react";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();

      setMovie(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={fetchApiData}>fetch Movies</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  );
};

export default Home;
