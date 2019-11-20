import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const initializeStore = (preloadedState) => (createStore(
  rootReducer,
  preloadedState || {},
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger)),
));

export default initializeStore;
