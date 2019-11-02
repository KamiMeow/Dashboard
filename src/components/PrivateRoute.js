import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import actions from '../actions';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
    }
  />
);

const getIsAuth = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(getIsAuth, actions)(PrivateRoute);
