import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://127.0.0.1:8000';

// client.defaults.headers.common['Authorization']="Bearer"

// axios.intercepter.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default client;
