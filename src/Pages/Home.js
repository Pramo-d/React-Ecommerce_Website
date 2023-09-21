import { useState} from "react";
import MovieList from "./MovieList";
const Home = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError]=useState(null)

  const fetchApiData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film/");
      if(!response.ok){
      throw new Error('Something went wrong...Retry') 
    }
      const data = await response.json();
      setMovie(data.results);
    } catch (error) {
       setError(error.message);
    } finally {
      setIsLoading(false);
    }
    
  };

  return (
    <>
      <button onClick={fetchApiData}>fetch Movies</button>
      {isLoading ? (
        <p>Loading...</p> && <h4> till the time found no Movies</h4>
      ) : (
        < MovieList movie={movie}/>
      )}
      {!isLoading && <p>{error} </p> }
    </>
  );
};

export default Home;
