import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configStore from '../store/configStore';

import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
	<Router>
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={ExpenseDashboard} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</React.Fragment>
	</Router>
);

const store = configStore();

const App = () => (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

export default App;
