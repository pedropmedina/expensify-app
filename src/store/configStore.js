import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk)),
	);

	// I HAD TO DISABLED HMR AS IT WAS CONFLICTING WITH REACT-DATES
	// if (module.hot) {
	// 	module.hot.accept('../reducers/index', () => {
	// 		const nextRootReducer = require('../reducers/index');
	// 		store.replaceReducer(nextRootReducer);
	// 	});
	// }
	return store;
};
