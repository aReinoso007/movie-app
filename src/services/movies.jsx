import axiosClient from "./axios-config";

export async function getMovies() {
  const response = await axiosClient.get("/movies");
  return response.data;
}

export async function getMovieById(id) {
  const response = await axiosClient.get(`/movies/${id}`);
  return response.data;
}

export async function addMovie(movie) {
  const response = await axiosClient.post("/movies", movie);
  return response.data;
}
