import axios, { AxiosInstance } from 'axios';
import { apiEndpoint } from './Endpoint';

class Api {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: apiEndpoint,
        });

        this.axiosInstance.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        this.axiosInstance.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    async get(endpoint: string) {
        try {
            const response = await this.axiosInstance.get(endpoint);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new Api();
