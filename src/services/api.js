import axios from "axios";

const SERVER = 'http://localhost:9000';

export const setToken = token => {
    if (token) { 
        axios.defaults.headers.common['Authorization'] = `Bearver ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const call = async (method, path, data) => {
    const response = await axios[method](`${SERVER}/ipsr/${path}`, data);
    return response.data;
}


 
 

export default {
    call,
    setToken 
};