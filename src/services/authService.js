import axios from './axios'

export const signUserIn = data => axios.post(`/auth/login`, data)
export const logoutUserS = () => axios.post(`/auth/logOut`)