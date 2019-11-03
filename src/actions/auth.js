import AuthService from '../middleware/services/AuthService';

export const login = async (data = { password: '', login: '' }) => {
  const user = await AuthService.login({
    password: data.password,
    login: data.login,
  });

  return ({
    type: 'LOGIN',
    token: user.token,
    data: user,
  });
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const isAuth = () => ({
  type: 'GET_IS_AUTH',
});

export default {
  login,
  logout,
  isAuth,
}
