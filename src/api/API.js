import axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=453a7fb1cd3c223cd738833a0158e654";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";


export const api = {
    getPopularMovies: (page) => axios.get(`${BASE_URL}/movie/popular?page=${page}&${API_KEY}`).catch(err => err),
    getSearchMovies: (page, q) => axios.get(`${BASE_URL}/search/movie?query=${q}&page=${page}&${API_KEY}`).catch(err => err),
    getSingleMovie: (id) => axios.get(`${BASE_URL}/movie/${id}?${API_KEY}`).catch(err => err),
    getMovieVideo: (id) => axios.get(`${BASE_URL}/movie/${id}/videos?${API_KEY}`).catch(err => err),
    getSingleMovieCasts: (id) => axios.get(`${BASE_URL}/movie/${id}/credits?${API_KEY}`).catch(err => err),
    getSingleMoviesSimilar: (id, page) => axios.get(`${BASE_URL}/movie/${id}/similar?page=${page}&${API_KEY}`).catch(err => err),
    getPeopleInfo: (id) => axios.get(`${BASE_URL}/person/${id}?${API_KEY}`).catch(err => err),
    getPeopleMovies: (id) => axios.get(`${BASE_URL}/person/${id}/movie_credits?${API_KEY}`).catch(err => err),
}