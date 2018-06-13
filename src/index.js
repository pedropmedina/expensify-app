import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';

import AppRouter from './routers/AppRouter';

// import './firebase/firebase';

const store = configStore();

// listen to changes in the store
store.subscribe(() => {
	console.log(store.getState());
});

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

// DISABLED HMR DUE TO CONFLICTS WITH REACT-DATES
// NEED TO ADD PLUGIN IN .BABELRC IF DECIDE TO RE-IMPLEMENT
// if (module.hot) {
// 	module.hot.accept(App);
// }

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('root'));
});
