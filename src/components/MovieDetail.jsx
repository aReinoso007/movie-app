import { Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { PropTypes } from "prop-types";
export default function MovieDetail({movie, isOpen, toggle, handleDelete}) {
    if (!movie) return null;

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
            <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(movie.id)}
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  cursor: "pointer",
                  float: "right",
                }}
            />
            <ModalBody>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                    <img src={movie.posterUrl} alt={movie.title} style={{ maxWidth: '90%', borderRadius: '10%' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <p><strong>Title:</strong> {movie.title}</p>
                        <p><strong>Year:</strong> {movie.year}</p>
                        <p><strong>Genre:</strong> {movie.genre}</p>
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Actors:</strong> {movie.actors}</p>
                    </div>
                </div>
                <Row><p>{movie.description}</p></Row>
            </ModalBody>
        </Modal>
    );
}

MovieDetail.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired
    }),
    isOpen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}