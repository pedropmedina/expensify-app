import 'react-datepicker/dist/react-datepicker.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/configStore';

import AppRouter from './routers/AppRouter';

// import './firebase/firebase';

const store = configStore();

// listen to changes in the store
store.subscribe(() => {
	console.log(store.getState());
});

const App = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

// DISABLED HMR DUE TO CONFLICTS WITH REACT-DATES
// NEED TO ADD PLUGIN IN .BABELRC IF DECIDE TO RE-IMPLEMENT
// if (module.hot) {
// 	module.hot.accept(App);
// }

ReactDOM.render(<App />, document.getElementById('root'));
