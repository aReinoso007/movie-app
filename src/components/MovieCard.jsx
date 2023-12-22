/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie, handleDelete }) {


  return (
    <div className="movie" key={movie.id}>
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => handleDelete(movie.id)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
        }}
      />
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
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
