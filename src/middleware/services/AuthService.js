import Service from '../Service';

class AuthService extends Service {
  constructor() {
    super();
  }

  login({ login, password }) {
    return new Promise(res => {
      this.webClient.post('/login', {
        email: login,
        password,
      })
        .then(response => {
          res(this.newError(response.data.user));
        })
        .catch(err => {
          res(this.newError(err, true));
        })
    });
  }
};

export default new AuthService();
