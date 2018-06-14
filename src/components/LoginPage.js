import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startLogin } from '../actions/auth';

const Background = styled.div`
	background-image: url('/images/bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ButtonWrapper = styled.div`
	width: 25rem;
	padding: 3rem 1.5rem;
	background-color: rgba(0, 0, 0, 0.3);
	text-align: center;

	> p {
		font-size: 2rem;
		color: #fefefe;
	}

	> button {
		border: none;
		padding: 2rem 4rem;
		font-size: 1.6rem;
		margin-top: 2rem;
		background-color: #3770cc;
		color: #fff;
		border-radius: 0.2rem;
	}
`;

const LoginPage = ({ startLogin }) => (
	<Background>
		<ButtonWrapper>
			<p>Track your expenses in one place.</p>
			<button onClick={startLogin}>Login with Google</button>
		</ButtonWrapper>
	</Background>
);

export default connect(
	undefined,
	{ startLogin },
)(LoginPage);
