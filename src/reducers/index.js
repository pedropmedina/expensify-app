import { combineReducers } from 'redux';

import expenses from './expenses';
import filters from './filters';
import auth from './auth';

const rootReducer = combineReducers({ expenses, filters, auth });

export default rootReducer;
