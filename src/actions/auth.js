export const login = (data = { nickname: '', login: '' }, token) => {
  console.log(data);
  return ({
    type: 'LOGIN',
    token,
    data,
  })
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
