import axios from "axios";
import { useEffect, useState } from "react";

export default function MovieList() {   

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3030/movies")
        .then((response) => {
            setMovies(response.data);
        });
    });

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

    return (
        <div>
            <h1>Movies</h1>
            <ul>{renderMovies()}</ul>
        </div>
    )   

}