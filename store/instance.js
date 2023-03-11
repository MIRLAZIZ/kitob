import axios from 'axios';

export default () => {
    axios.interceptors.response.use((response) => {
        if(response.data.error === 'TOKEN_EXPIRED') {
          localStorage.clear();
          window.location = '/'
        }
        if(response.status === 401) {
          localStorage.clear();
          window.location = '/'
        }
        return response;
      }, (error) => {
        if (error.response && error.response.data) {
             return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    });
}