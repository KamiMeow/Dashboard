import User from '../models/User';
// import { combineReducers } from 'redux';

const auth = (state = { user: {}, isAuth: false}, action) => {
  switch(action.type) {
    case 'LOGIN': {
      console.log(action);
      const newUser = new User(action.data);
      state.user = newUser;
      state.isAuth = true;
      return state;
    };

    case 'LOGOUT': {
      state.isAuth = false;
      state.user = {};
      return state;
    };

    default:
      return state;
  }
};

export default auth;

// const login = (state = { user: {}, isAuth: false }, action) => {
//   if (action.type === 'LOGIN') {
//     const newUser = new User(action.data);
//     newUser.login(action.token);

//     state.isAuth = true;
//     Object.assign(state.user, newUser);
//   }

//   return state;
// };

// const logout = (state = { user: {}, isAuth: false }, action) => {
//   if (action.type === 'LOGOUT') {
//     state.user.logout();
//     state.isAuth = false;
//   }

//   return state;
// };

// const authReducers = combineReducers({
//   logout,
//   login,
// });

// export default authReducers;
