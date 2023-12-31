import { useState, useEffect } from "react";
import { MoviesAPI } from "../services/moviesAPI";

function useFetchMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchMovies = () => {
    MoviesAPI.getAll()
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        setError(error);
      });
  }

  const updateMovies= (movies) =>{
    setMovies(movies);
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovies();
      setLoading(false);
    }, 500);
  }, []);

  return { movies, updateMovies, loading, error, fetchMovies };
}

export default useFetchMovies;
