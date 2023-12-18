import { useEffect, useState } from "react";
import { MoviesAPI } from "../services/moviesAPI";

export default function MovieList() {   

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        MoviesAPI.getAll().then((response) => {
            setMovies(response);
        }).catch((error) => {
            setError(error);
        });
    },[]);

    const renderMovies = () => {
        if (!movies) {
            return <p>Loading...</p>;
        }
        return movies.map((movie) => {
            return (
                <div key={movie.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={movie.posterUrl}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.description}</p>
              </div>
            </div>
          </div>
            );
        });
    }

    if(error) return <p>{error.message}</p>;
    if(!movies) return <p>No movies to show</p>;

    return (
        <div className="container">
            <div className="row">
                {renderMovies()}
            </div>
        </div>
    )   

}