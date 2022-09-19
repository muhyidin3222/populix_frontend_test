import axios from 'axios';
import { base } from './init'
import { getCookie, deleteCookie } from 'utils/cookies'

const httpApi = axios.create({
    baseURL: base,
})

httpApi.interceptors.request.use((config) => {
    const dataCookie = getCookie('token')
    config.headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "token": dataCookie,
    }
    return config;
});

httpApi.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        const from = window.location.href;

        // if (status === 401) {
        //     deleteCookie();
        //     if (from !== "/login") window.location.href = "/login";

        // } else {
        //     return Promise.reject(error);
        // }
    }
);


export default httpApi