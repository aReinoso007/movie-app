import axiosClient from "./axios-config"
import { defineCancelApiObject } from "./axios-utils"

export const MoviesAPI = {

    get: async function(id, cancel = false){
        const response = await axiosClient.request({
            url:`/movies/${id}`,
            method: 'GET',
            signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },

    getAll: async function(id, cancel = false){
        const response = await axiosClient.request({
            url:'/movies',
            method: 'GET',
            signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },
    getMoviesByTitle: async function(title, cancel = false){
        const response = await axiosClient.request({
            url:`/movies?title=${title}`,
            method: 'GET',
            signal: cancel ? cancelApiObject[this.getMoviesByTitle.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },
    addMovie: async function(movie, cancel = false){
        const response = await axiosClient.request({
            url:'/movies',
            method: 'POST',
            data: movie,
            signal: cancel ? cancelApiObject[this.addMovie.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },
    removeMovie: async function(id, cancel = false){
        const response = await axiosClient.request({
            url:`/movies/${id}`,
            method: 'DELETE',
            signal: cancel ? cancelApiObject[this.removeMovie.name].handleRequestCancellation().signal : undefined,
        })
        return response.data;
    },

    mockDelete: async function(id){
        let movies = [];
        this.getAll().then((response) => {
            movies = response;
        }).catch((error) => {
            console.log(error);
        });
        movies = movies.filter((movie) => movie.id !== id);
        return movies;
    }
}

const cancelApiObject = defineCancelApiObject(MoviesAPI);