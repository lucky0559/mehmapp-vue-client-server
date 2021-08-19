import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mehmapp.herokuapp.com/'
})

export default instance;