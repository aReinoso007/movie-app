import PropTypes from 'prop-types';

export default function MovieCard({ movie }) {


    return (
        <div className="movie" key={movie.id}>
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                <img src={movie.posterUrl} alt={movie.title}/>
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
