import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Your back-end base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};