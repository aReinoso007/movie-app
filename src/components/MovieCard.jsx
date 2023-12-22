import PropTypes from "prop-types";
export default function MovieCard({ movie, onCardClick }) {


  return (
    <div className="movie" key={movie.id} onClick={()=> onCardClick(movie)}>
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
  onCardClick: PropTypes.func.isRequired,
};
