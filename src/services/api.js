import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/movies/v2',
});

export default api;
