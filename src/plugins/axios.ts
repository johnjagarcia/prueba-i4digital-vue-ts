import axios from 'axios';

const BASE_API = process.env.VUE_APP_BASE_API;

axios.defaults.baseURL = BASE_API;

export default axios;
