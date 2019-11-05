import axios from 'axios';

class WebClient {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
    });

    this.setInterceptors();
  }

  setInterceptors() {
    this.axios.interceptors.response.use(null, error => {
      const errorText = error.response.data.error;
      return Promise.reject(errorText);
    });
  }

  setHeader({ name, value }) {
    this.axios.defaults.headers.common[name] = value;
  }
  
  get(url, params) {
    return this.axios.get(url, {
      params,
    })
  }
  post(url, data, params) {
    return this.axios.post(url, data, {
      params,
    })
  }
  put(url, data, params) {
    return this.axios.post(url, data, {
      params,
    })
  }

  request(config) {
    return axios.request(config)
  }
};

export default WebClient;
