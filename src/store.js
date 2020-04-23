import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import logger from './middleware/logger.js';

const middlewares = [thunk, logger];
const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(...middlewares)
	// other store enhancers if any
);

export default createStore(rootReducer, enhancer);
