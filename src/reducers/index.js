import { combineReducers } from 'redux';

import expenses from './expenses';
import filters from './filters';

const rootReducer = combineReducers({ expenses, filters });

export default rootReducer;
