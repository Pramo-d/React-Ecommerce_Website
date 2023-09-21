import { useCallback, useEffect, useState } from "react";
import MovieList from "../Movies/MovieList";
import AddMovie from "../Movies/AddMovie";

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

  const addMoviehandler=(movie)=>{
    console.log(movie);
  }

  return (
    <>
      <section>
        <AddMovie  onAddMovie={addMoviehandler}/>
      </section>

      <section>
        <button onClick={fetchApiData}>fetch Movies</button>
      </section>
      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movie.length > 0 && <MovieList movie={movie} />
        )}
        {!isLoading && movie.length === 0 && (
          <p>till the time found No Movies</p>
        )}
        {!isLoading && <p>{error} </p>}
      </section>
    </>
  );
};

export default Home;
