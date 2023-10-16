// cryptonews.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://cryptonews-api.com',
});

export default {
    getNews() {
        return apiClient.get('/api/v1/category?section=alltickers&items=20&page=1&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh');
    },
};