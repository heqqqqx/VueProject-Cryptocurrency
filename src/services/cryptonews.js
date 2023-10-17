// cryptonews.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://cryptonews-api.com',
});

export default {
    getNews(cryptoname) {
        const url = cryptoname ?
            `/api/v1?tickers=${cryptoname}&items=10&page=1&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh` :
            '/api/v1/category?section=alltickers&items=20&page=1&token=ul9mca2hqxq8h5p1u13xfkmcnaf0umfkijqgypyh';
        return apiClient.get(url);
    },
};