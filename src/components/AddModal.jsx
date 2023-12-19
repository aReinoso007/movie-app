import { useState } from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { Form } from "react-router-dom";

export default function AddModal() {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    console.log('Form Data:', {
      title,
      year,
      genre,
      director,
      actors,
      description,
      posterUrl,
    });
  };

  const toggle = () => setModal();

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Movie</ModalHeader>
      <ModalBody>
      <Form className="form" onSubmit={submitForm}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Enter the movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Year</Label>
          <Input
            type="text"
            name="year"
            placeholder="Enter the movie year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Genre</Label>
          <Input
            type="text"
            name="genre"
            placeholder="Enter the movie genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Director</Label>
          <Input
            type="text"
            name="director"
            placeholder="Enter the movie director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Actors</Label>
          <Input
            type="text"
            name="actors"
            placeholder="Enter the movie actors"
            value={actors}
            onChange={(e) => setActors(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="textarea"
            name="description"
            placeholder="Enter the movie description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Poster URL</Label>
          <Input
            type="text"
            name="posterUrl"
            placeholder="Enter the movie poster URL"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
}
