import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { apiEndpoint } from './Endpoint';

export default class APIClass {
    private static instance: APIClass;

    private constructor() { }

    public static getInstance(): APIClass {
        if (!APIClass.instance) {
            APIClass.instance = new APIClass();
        }
        return APIClass.instance;
    }

    private authheader = () => {
        return {
            Accept: 'accept',
            'Content-Type': 'application/json',
        };
    }

    public get = async (path: string, body?: any): Promise<any> => {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${apiEndpoint}/${path}`,
            headers: { 'Content-Type': 'application/json' },
            data: body,
        };

        const axiosInstance: AxiosInstance = axios.create({
            baseURL: apiEndpoint,
            timeout: 30000,
        });

        axiosInstance.interceptors.request.use(request => {
            return request;
        }, error => {
            return Promise.reject(error);
        });

        axiosInstance.interceptors.response.use(response => {
            return response.data;
        }, async error => {
            return Promise.reject(error);
        });

        try {
            const response = await axiosInstance.request(options);
            return response;
        } catch (error) {
            return Promise.reject(error);
        }
    }

}

export async function fetchData(path: string, data?: any): Promise<any> {
    try {
        const result = await APIClass.getInstance().get(path, data);
        return result;
    } catch (error) {
        throw error;
    }
}