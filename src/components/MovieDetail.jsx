/* eslint-disable react/prop-types */
import { Modal, ModalHeader, ModalBody, Row, ModalFooter, Button } from 'reactstrap';
import { PropTypes } from "prop-types";
export default function MovieDetail({movie, isOpen, toggle, onDelete}) {


    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
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
            <ModalFooter>
                <Button color='warning' onClick={onDelete}>Delete</Button>
            </ModalFooter>
        </Modal>
    );
}

MovieDetail.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        actors: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired
    }),
    isOpen: PropTypes.bool,
    toggle: PropTypes.func.isRequired,
}