import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startAddExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

// styles
const HeaderTitle = styled.div`
	background-color: #f7f7f7;

	> div {
		max-width: 80rem;
		margin: 0 auto;
		padding: 3rem;
		margin-bottom: 3rem;

		> h2 {
			font-size: 3rem;
			font-weight: 300;
		}
	}

	& + div {
		max-width: 80rem;
		margin: 0 auto;
	}
`;

const AddExpensePage = props => {
	return (
		<div>
			<HeaderTitle>
				<div>
					<h2>Add Expense</h2>
				</div>
			</HeaderTitle>
			<div>
				<ExpenseForm
					onSubmit={expense => {
						props.startAddExpense(expense);
						props.history.push('/dashboard');
					}}
				/>
			</div>
		</div>
	);
};

export default connect(
	undefined,
	{ startAddExpense },
)(AddExpensePage);
