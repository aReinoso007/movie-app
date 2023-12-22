import PropTypes from "prop-types";
import { useState } from "react";
import MovieDetail from "./MovieDetail";
export default function MovieCard({ movie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const movieDetail = (
    <MovieDetail
      movie={selectedMovie}
      toggle={toggleModal}
      isOpen={isModalOpen}
    />
  );

  return (
    <>
      <div
        className="movie"
        key={movie.id}
        onClick={() => handleCardClick(movie)}
      >
        <div>
          <p>{movie.year}</p>
        </div>
        <div>
          <img src={movie.posterUrl} alt={movie.title} />
        </div>
        <div>
          <span>{movie.genre}</span>
          <h3>{movie.title}</h3>
        </div>
      </div>
      {isModalOpen && movieDetail}
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
