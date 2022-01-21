import axios, { AxiosRequestConfig, AxiosResponse} from 'axios';

import { baseUrl } from '../constant/environment';
import authHeader from './auth-header';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 60000
});

function handleResponse(response: AxiosResponse ) {
    if (response) {
        if (response.status === 401) {
            // logout();
            // location.reload(true);
            // console.log(401);
        }
        // console.log('response', data)
        // const error = (data && data.message) || response.statusText;
        // return Promise.reject(error);
    }
    return response.data;
}


export const post = (url: string, body: any) => {
    const config: AxiosRequestConfig = {
        url, 
        headers: authHeader(),
        data: body,
        method : 'POST',
    };
    return instance.request(config).then(handleResponse);
};

export const put = (url: string, body: any) => {
    const config: AxiosRequestConfig = {
        url, 
        headers: authHeader(),
        data: body,
        method : 'PUT',
    };
    return instance.request(config).then(handleResponse);
};

export const del = (url: string, body: any) => {
    const config: AxiosRequestConfig = {
        url, 
        headers: authHeader(),
        data: body,
        method : 'DELETE',
    };
    return instance.request(config).then(handleResponse);
};

export const get = (url:string, query: any) => {
    const config: AxiosRequestConfig = {
        headers: authHeader(),
        url,
        method : 'GET',
        params: query
    };
    return instance.request(config).then(handleResponse);
};

