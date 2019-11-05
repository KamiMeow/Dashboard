import WebClient from "./WebClient";

const url = process.env.API_URL || 'http://localhost:5000';

class Service {
  constructor() {
    this.webClient = new WebClient(url);
  }

  newError(data, error) {
    const resData = {
      error: true,
      data,
    };

    if (!error) {
      resData.error = false;
      return resData;
    }
    return resData;
  }
};

export default Service;
