import Service from '../Service';

class AuthService extends Service {
  constructor() {
    super();
  }

  async login({ login, password }) {
    const data = await this.webClient.post('/login', {
      email: login,
      password,
    });

    return data.data.user;
  }
};

export default new AuthService();
