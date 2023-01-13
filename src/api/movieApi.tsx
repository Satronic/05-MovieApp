import axios from 'axios';

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'dc3c672769ed631c8ef9cf3cbcfb39ac',
        language: 'es-ES'
    }
});

export default movieAPI;