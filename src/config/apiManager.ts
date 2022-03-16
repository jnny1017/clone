import axios from 'axios';

export const BASE_URL = 'http://localhost:3000/data/';

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export default API;
