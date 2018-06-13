import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<PublicRoute exact path="/" component={LoginPage} />
			<PrivateRoute path="/dashboard" component={ExpenseDashboard} />
			<PrivateRoute path="/create" component={AddExpensePage} />
			<PrivateRoute path="/edit/:id" component={EditExpensePage} />
			<Route component={NotFoundPage} />
		</Switch>
	</Router>
);

export default AppRouter;
