import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '3794918f3b586ea959736ff8ded7e5d8',
    language: 'ko-KR'
  }
});

export default api;