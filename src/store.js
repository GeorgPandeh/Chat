import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers/rootReducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    combineReducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}