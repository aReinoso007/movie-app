/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Col, Container, Row } from "reactstrap";
import AddModal from "../components/AddModal";
import SearchBar from "../components/Searchbar";
import useFetchMovies from "../hooks/useFetchMovies";
import Loading from "../components/Loading";
import ErrorDisplay from "../components/ErrorDisplay";

export default function MovieList() { 
  const { movies, updateMovies, loading, error, fetchMovies } = useFetchMovies();

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    let filteredMovies = [];
    if(value === undefined) return;
    if(value === ''){
      fetchMovies();
      return;
    }
    setSearchValue(value);
    filteredMovies = filterMovies(movies, value);
    updateMovies(filteredMovies);
    setSearchValue("");
  };

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

  const modal = (
    <AddModal 
      onMovieAdded={fetchMovies}
    />
  );

  if (error) return <ErrorDisplay error={error} />
  if (loading) return <Loading />

  return (
    <Container className="mt-4 pt-5">
        <Row>
          <SearchBar placeholder={'The Godfather'} onChange={(e) => handleSearch(e)}/>
        </Row>
        {modal}
        <div className="wrapper mt-4">
        <Row md={2} xs={1} lg={3} className="g-3">
            {renderMovies()}
            {movies.length === 0 && <p>No movies to show</p>}
        </Row>
    </div>
    </Container>
  );
}

function filterMovies(movies, value){
  return movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
}