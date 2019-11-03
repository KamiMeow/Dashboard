import WebClient from "./WebClient";

const url = process.env.API_URL || 'http://localhost:5000';

class Service {
  constructor() {
    this.webClient = new WebClient(url);
  }
};

export default Service;
