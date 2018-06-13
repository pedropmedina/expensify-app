import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import AppRouter, { history } from './routers/AppRouter';

import { firebase } from './firebase/firebase';

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

// avoid unecessary re-render
let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('root'));
		hasRendered = true;
	}
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});
