import AuthService from '../middleware/services/AuthService';
import { setError } from './error';

export const login = async (data = { password: '', login: '' }) => {
  const { error, data: user } = await AuthService.login({
    password: data.password,
    login: data.login,
  });

  if (error) return setError({ error: user });

  return ({
    type: 'LOGIN',
    token: user.token,
    data: user,
  });
};

export const logout = () => ({
  type: 'LOGOUT',
});

export default {
  login,
  logout,
}
