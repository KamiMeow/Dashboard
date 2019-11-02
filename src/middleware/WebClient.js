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

const webClient = new WebClient(process.env.API_URL);
export default webClient;
