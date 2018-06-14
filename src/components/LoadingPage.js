import React from 'react';
import styled, { keyframes } from 'styled-components';

const load8 = keyframes`
	from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
		-webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
	border-radius: 50%;
	width: 15rem;
	height: 15rem;
	font-size: 1rem;
	position: relative;
	margin: 35% auto;
	text-indent: -9999rem;
	border-top: 1.5rem solid rgba(42, 115, 234, 0.6);
	border-right: 1.5rem solid rgba(42, 115, 234, 0.6);
	border-bottom: 1.5rem solid rgba(42, 115, 234, 0.6);
	border-left: 1.5rem solid #c0d5f7;
	transform: translateZ(0);
	animation: ${load8} 1.1s infinite linear;

	&:after {
		border-radius: 50%;
		width: 15rem;
		height: 15rem;
	}
`;

const LoadingPage = () => <Loader>Loading...</Loader>;

export default LoadingPage;

// display: inline-block;
// 	animation: ${load8} 2s linear infinite;
// 	padding: 2rem 1rem;
// 	font-size: 1.2rem;
