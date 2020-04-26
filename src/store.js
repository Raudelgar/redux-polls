import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import middlewares from './middleware/middleware.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
	applyMiddleware(...middlewares)
	// other store enhancers if any
);

export default createStore(rootReducer, enhancer);
