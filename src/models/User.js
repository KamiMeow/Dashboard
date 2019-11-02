import WebClient from '../middleware/WebClient';

class User {
  constructor({ nickname, login }) {
    this.nickname = nickname;
    this.login = login;
  }

  login(token) {
    WebClient.setHeader('Authorization', token);
  }
  logout() {
    WebClient.setHeader('Authorization', '');
    this.nickname = '';
    this.login = '';
  }
};

export default User;