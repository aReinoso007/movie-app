/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { MoviesAPI } from "../services/moviesAPI";
import { PropTypes } from "prop-types";

const AddModal = (props) => {
  const { onMovieAdded } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const isFormValid = title && year && genre && director && actors && description && posterUrl;

  const handleSave = async () => {
    const movie = {
      title,
      year,
      genre,
      director,
      actors,
      description,
      posterUrl,
    };
  
    try {
      await MoviesAPI.addMovie(movie);
      props.onMovieAdded(); // Refresh the list of movies
      onClose(); // Close the modal after successful save
    } catch (error) {
      console.error('Failed to save movie:', error);
    }
  };

  const onClose = () => {
    setTitle("");
    setYear("");
    setGenre("");
    setDirector("");
    setActors("");
    setDescription("");
    setPosterUrl("");
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <Button color="primary" className="mb-4 add-movie-button" onClick={toggleModal} style={{ width: "10%", padding: "10px" }}>Add Movie</Button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Add Movie</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input
              type="text"
              name="year"
              id="year"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genre">Genre</Label>
            <Input
              type="text"
              name="genre"
              id="genre"
              placeholder="Genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="director">Director</Label>
            <Input
              type="text"
              name="director"
              id="director"
              placeholder="Director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="actors">Actors</Label>
            <Input
              type="text"
              name="actors"
              id="actors"
              placeholder="Actors"
              value={actors}
              onChange={(e) => setActors(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="posterUrl">Poster URL</Label>
            <Input
              type="text"
              name="posterUrl"
              id="posterUrl"
              placeholder="Poster URL"
              value={posterUrl}
              onChange={(e) => setPosterUrl(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave} disabled={!isFormValid}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
    </>
   
  );
};

export default AddModal;

AddModal.propTypes = {
  onMovieAdded: PropTypes.func.isRequired,
};
