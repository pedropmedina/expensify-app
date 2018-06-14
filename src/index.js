import './styles/react-datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';

import { firebase } from './firebase/firebase';

// styles
injectGlobal`
	html {
		font-size: 62.5%;
	}

	body {
		font-family: 'Helvetica';
		line-height: 1.2;
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit
	}
`;

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

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

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
