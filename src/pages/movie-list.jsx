import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";

export default function MovieList() {   

    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        getMovies()
        .then((response) => {
            console.log("response", response)
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
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.actors}</p>
                </li>
            );
        });
    }

    if(error) return <p>{error.message}</p>;
    //if(!movies) return <p>No movies to show</p>;

    return (
        <div>
            <h1>Movies</h1>
            <ul>{renderMovies()}</ul>
        </div>
    )   

}