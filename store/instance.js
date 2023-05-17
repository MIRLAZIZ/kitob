import axios from 'axios';

export default () => {
    // axios.interceptors.response.use((response) => {
    //     if(response.data.error === 'TOKEN_EXPIRED') {
    //       localStorage.clear();
    //       window.location = '/'
    //     }
    //     if(response.status === 401) {
    //       localStorage.clear();
    //       window.location = '/'
    //     }
    //     return response;
    //   }, (error) => {
    //     if (error.response && error.response.data) {
    //          return Promise.reject(error.response.data);
    //     }
    //     return Promise.reject(error.message);
    // });
    axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );
}