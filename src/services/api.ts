import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.gobarber.erickr.xyz',
});

export default api;
