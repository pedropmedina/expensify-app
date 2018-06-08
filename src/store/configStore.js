import { createStore } from 'redux';

import rootReducer from '../reducers/index';

export default initialState => {
	const store = createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
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
