import { useEffect, useState } from "react";
import { MoviesAPI } from "../services/moviesAPI";
import MovieCard from "../components/MovieCard";
import { Col, Container, Row } from "reactstrap";

export default function MovieList() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    MoviesAPI.getAll()
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const renderMovies= () =>{
    if (!movies) {
      return <p>Loading...</p>;
    }
    return movies.map((movie) => {
      return (
        <Col key={movie.id}>
          <MovieCard movie={movie} />
        </Col>
      );
    });
  }

  if (error) return <p>{error.message}</p>;
  if (!movies) return <p>No movies to show</p>;

  return (
    <Container className="mt-4 pt-5">
        <div className="wrapper mt-4">
        <Row md={3} xs={1} lg={4} className="g-4">
            {renderMovies()}
        </Row>
    </div>
    </Container>
  );
}
