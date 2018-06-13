import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		component={props =>
			!isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />
		}
	/>
);

const mapStateToProps = ({ auth }) => ({
	isAuthenticated: !!auth.uid,
});

export default connect(mapStateToProps)(PublicRoute);
