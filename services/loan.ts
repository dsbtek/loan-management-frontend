import { get, post, put, del } from './request';

const API_URL = 'loans';

export const getLoans = (query: any) => get(API_URL, query);

export const getLoanUsers = (data: any)  => get('/users/search', data);

export const createLoanUser = (data: any) => post('loans/users', data);

export const createLoan = (data: any) => post('loans', data);

export const deleteLoan = (data: any) => del('loans', data);

export const updateLoan = (data: any) => put('loans', data);




export default {
    getLoans, createLoanUser, createLoan, getLoanUsers, deleteLoan, updateLoan
};