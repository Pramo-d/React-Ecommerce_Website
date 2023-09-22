import { useCallback, useEffect, useState } from "react";
import MovieList from "../Movies/MovieList";
import AddMovie from "../Movies/AddMovie";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // here the if movie fetching from database the it show loading...
  const [error, setError] = useState(null);             // here we make a cutomize error to display if fetch api have some issue

  //we use CallBack function to Get the data from database through fetch api
  const fetchApiData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-ecommerce-bbea7-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong...Retry");
      }
      const data = await response.json();
      console.log(data);

      const loadedMovie = [];
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovie(loadedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchApiData();
  }, [fetchApiData]);

  // POST request function (firebase)
  const addMoviehandler = async (movie) => {
    try {
      const response = await fetch(
        "https://react-ecommerce-bbea7-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": " application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //for DELETE post from databse we again use fetch api
  const deleteMovieHandler = async (movieId) => {
    await fetch(
      `https://react-ecommerce-bbea7-default-rtdb.firebaseio.com/movies/${movieId}.json`,
      {
        method: "DELETE",
      }
    );
    setMovie((prevMovie) =>
      prevMovie.filter((movieItem) => movieItem.id !== movieId)
    );
  };

  return (
    <>
      <section>
        <AddMovie onAddMovie={addMoviehandler} />
      </section>

      <section>
        <button onClick={fetchApiData}>fetch Movies</button>
      </section>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          movie.length > 0 && (
            <MovieList movie={movie} onDeleteMovie={deleteMovieHandler} />
          )
        )}
        {!isLoading && movie.length === 0 && (
          <p>till the time found No Movies</p>
        )}
        {!isLoading && <p>{error} </p>}
      </div>
    </>
  );
};

export default Home;
