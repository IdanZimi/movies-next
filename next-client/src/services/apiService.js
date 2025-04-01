import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const apiService = {
    getAllMovies: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movies`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch movies, ${error.message}`);
        }
    },

    getMovieById: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/movies/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch movie with id ${id}, ${error.message}`);
        }
    }
};

export default apiService; 