import { createStore } from 'redux';

import rootReducer from '../reducers/index';

export default initialState => {
	const store = createStore(rootReducer, initialState);

	if (module.hot) {
		module.hot.accept('../reducers/index', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
};
