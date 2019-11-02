import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import initialStore from './store/initialStore';
import initStore from './store/initStore';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './views/LoginPage';
import './styles/App.css';

const store = initStore(initialStore);

const template = () => (
  <div>protect</div>
);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/protected" component={template} />

      {/* <Route path="*">
        <Redirect to="/fuck" />
      </Route> */}
    </div>
  </Provider>
);

export default App;
