import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import styled from 'styled-components';

// styles
const LinkWrapper = styled(Link)`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	font-size: 1.2rem;
	text-decoration: none;
	color: #2a2a2a;

	&:hover {
		background-color: #f7f7f7;
	}

	&:first-child {
		> h3 {
			word-break: break-all;
		}
	}
`;

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<LinkWrapper to={`/edit/${id}`}>
		<div>
			<h3>{description}</h3>
			<span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
		</div>
		<h3>{numeral(amount / 100).format('$0,0.00')}</h3>
	</LinkWrapper>
);

export default ExpenseListItem;
