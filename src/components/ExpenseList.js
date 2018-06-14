import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import styled from 'styled-components';

import selectExpenses from '../selectors/expenses';

import ExpenseListItem from './ExpenseListItem';

// styles
const ListWrapper = styled.div`
	max-width: 80rem;
	margin: 0 auto;
	border: 0.1rem solid #eee;
`;

const ListHeader = styled.div`
	background-color: #f7f7f7;
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	font-size: 1.6rem;
`;

export const ExpenseList = props => {
	return (
		<ListWrapper>
			<ListHeader>
				<div>Expenses</div>
				<div>Amount</div>
			</ListHeader>
			{props.expenses.length === 0 ? (
				<p>No Expenses!</p>
			) : (
				props.expenses.map(expense => {
					return <ExpenseListItem key={uuidv4()} {...expense} />;
				})
			)}
		</ListWrapper>
	);
};

const mapStateToProps = ({ expenses, filters }) => ({
	expenses: selectExpenses(expenses, filters),
	filters,
});

export default connect(mapStateToProps)(ExpenseList);
