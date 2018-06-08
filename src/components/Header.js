import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Dashboard</NavLink>
				</li>
				<li>
					<NavLink to="/create">Add Expense</NavLink>
				</li>
				<li>
					<NavLink to="/help">Help</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Header;
