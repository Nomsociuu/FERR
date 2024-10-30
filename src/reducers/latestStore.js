import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './latestReducer';

// Set up Redux DevTools extension if available, otherwise fallback to default compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware
const store = createStore(moviesReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
