import { useEffect, useState } from "react";
import { MoviesAPI } from "../services/moviesAPI";
import MovieCard from "../components/MovieCard";
import { Button, Col, Container, Row } from "reactstrap";
import AddModal from "../components/AddModal";

export default function MovieList() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () =>{
    MoviesAPI.getAll()
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        setError(error);
      });
  }

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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleClose = () =>{
    setIsModalOpen(false);
  }
  

  if (error) return <p>{error.message}</p>;
  if (!movies) return <p>No movies to show</p>;

  const modal = (
    <AddModal 
      isModalOpen={isModalOpen} 
      toggleModal={toggleModal} 
      onClose={handleClose}
      onMovieAdded={fetchMovies}
    />
  );


  return (
    <Container className="mt-4 pt-5">
        <Button color="primary" className="mb-4 add-movie-button" onClick={toggleModal}>Add Movie</Button>
        {isModalOpen && modal}
        <div className="wrapper mt-4">
        <Row md={3} xs={1} lg={4} className="g-4">
            {renderMovies()}
        </Row>
    </div>
    </Container>
  );
}
