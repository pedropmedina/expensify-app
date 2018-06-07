import { createStore, combineReducers } from 'redux';

import expenses from '../reducers/expenses';
import filters from '../reducers/filters';

const store = createStore(
	combineReducers({
		expenses,
		filters,
	}),
);

export default store;
