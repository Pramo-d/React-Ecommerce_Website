import { useCallback, useEffect, useState } from "react";
import MovieList from "./MovieList";
const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApiData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong...Retry");
      }
      const data = await response.json();
      setMovie(data.results);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  return (
    <>
      <button onClick={fetchApiData}>fetch Movies</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
       movie.length >0 && <MovieList movie={movie} />
      )}
      {!isLoading && movie.length===0 &&<p>till the time found No Movies</p>}
      {!isLoading && <p>{error} </p>}
    </>
  );
};

export default Home;
