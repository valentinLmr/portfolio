import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://valentin-portfolio-44b64.firebaseio.com/'
});

export default instance