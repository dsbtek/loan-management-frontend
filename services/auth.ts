import { AxiosResponse } from 'axios';
import { post, get } from './request';

export interface IResponse {
    message: string;
    error: string,
    data: any, 
}

export const login = (data: any) => post('auth/login', data).then((response : any) => {
    if (response.token) {
        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', JSON.stringify(response.token));
    }
    return response.user;
});

export const logout = () => {
    localStorage.clear();
    return post('auth/logout', {});
};

export const getUserDetails = () => get('user-details', '');

export const register = (data: any) => post('auth/register', data);

export const verifyemail = (data: any) => post('auth/request-verification', data);

export const resetPassword = (data: any) => post('auth/request-password-reset', data);

export const setPassword = (data: any) => post('auth/set-password', data);

export const requestVerification = (data: any) => post('auth/requestVerification', data);

export const getStarted = (data: any) => get('auth/verify-email', data);



export default {
    login, logout, register, verifyemail, resetPassword, setPassword, getStarted, requestVerification
};