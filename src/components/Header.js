import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startLogout } from '../actions/auth';

// styles
const HeaderWrapper = styled.header`
	background-color: #142b4f;
	padding: 4rem 0;

	> div {
		max-width: 80rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;

		> a {
			color: #fefefe;
			text-decoration: none;

			> h1 {
				font-size: 3rem;
				letter-spacing: 0.1rem;
			}
		}

		button {
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1.6rem;
			color: #fefefe;
			letter-spacing: 0.1rem;
			cursor: pointer;
		}
	}
`;

const Header = ({ startLogout }) => {
	return (
		<HeaderWrapper>
			<div>
				<Link to="/dashboard">
					<h1>Expensify</h1>
				</Link>
				<button onClick={startLogout}>Logout</button>
			</div>
		</HeaderWrapper>
	);
};

export default connect(
	undefined,
	{ startLogout },
)(Header);
