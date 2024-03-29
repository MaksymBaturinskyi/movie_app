import axios from "axios";
import {apiKey} from '../constants';

interface IParams {
    query: string,
    include_adult: string,
    language: string,
    page: string,
}
const apiBaseUrl = 'https://api.themoviedb.org/3';
const trendingMovieEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMovieEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMovieEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

const movieDetailsEndpoint = (id: string | number) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: string | number) => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const movieSimilarEndpoint = (id: string | number) => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
const personDetailsEndpoint = (id: string | number) => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = (id: string | number) => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;
export const image500 = (path: string) => path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
export const image342 = (path: string) => path ? `https://image.tmdb.org/t/p/w342${path}` : require('../assets/profile.png');
export const image185 = (path: string) => path ? `https://image.tmdb.org/t/p/w185${path}` : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

const apiCall = async (endpoint: string, params: string | IParams) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data;

    } catch (error) {
        console.log('error',error)
        return {}
    }
}

export const fetchTrendingMovies = () => {
    return apiCall(trendingMovieEndpoint, '')
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMovieEndpoint, '')
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMovieEndpoint, '')
}

export const fetchMovieDetails = (id: string | number) => {
    return apiCall(movieDetailsEndpoint(id), '')
}

export const fetchMovieCredits = (id: string | number) => {
    return apiCall(movieCreditsEndpoint(id), '')
}

export const fetchMovieSimilar = (id: string | number) => {
    return apiCall(movieSimilarEndpoint(id), '')
}

export const fetchPersonDetails = (id: string | number) => {
    return apiCall(personDetailsEndpoint(id), '')
}

export const fetchPersonMovies = (id: string | number) => {
    return apiCall(personMoviesEndpoint(id), '')
}

export const fetchSearchMovies = (params: IParams) => {
    return apiCall(searchMoviesEndpoint, params)
}
