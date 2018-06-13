import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/dashboard">Dashboard</NavLink>
					</li>
					<li>
						<NavLink to="/create">Add Expense</NavLink>
					</li>
				</ul>
			</nav>
			<button onClick={startLogout}>Logout</button>
		</header>
	);
};

export default connect(
	undefined,
	{ startLogout },
)(Header);
