import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/configStore';

import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';

const store = configStore();

store.dispatch(addExpense({ description: 'Rent', amount: 1450 }));
store.dispatch(
	addExpense({ description: 'Car', amount: 212, createdAt: 1000 }),
);
store.dispatch(addExpense({ description: 'Electricity', amount: 30000 }));

const App = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

if (module.hot) {
	module.hot.accept(App);
}

ReactDOM.render(<App />, document.getElementById('root'));
