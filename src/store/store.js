import { applyMiddleware, createStore, compose } from 'redux';
import { addToStorage } from '../middleware/addToStorage';
import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(addToStorage))
);

window.store = store;

export { store };
