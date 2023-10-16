import axios from 'axios';

const binanceAPI = axios.create({
    baseURL: 'https://api.binance.com/api/v3/klines',
});

export const getCryptoData = async(cryptocurrency) => {
    const response = await binanceAPI.get('', {
        params: {
            symbol: cryptocurrency.toUpperCase() + 'USDT',
            interval: '1d',
            limit: 30
        }
    });
    return response.data;
};