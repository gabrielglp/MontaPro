import axios from 'axios';
import { parseCookies } from 'nookies';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const { '@nextauth.token': token } = parseCookies();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;