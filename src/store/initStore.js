import { createStore } from 'redux';
import reducers from '../reducers';

const initStore = initialState => {
  const store = createStore(reducers, initialState);
  return store;
};

export default initStore;
