import axios from 'axios';

const base = `http://localhost:${4000}`;

const mainApi = axios.create({
    baseURL: base,
    headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    }
});

export default mainApi;