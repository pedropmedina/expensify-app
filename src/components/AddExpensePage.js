import React from 'react';
import { connect } from 'react-redux';

import { addExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const AddExpensePage = props => {
	return (
		<div>
			<h1>Add Expense</h1>
			<ExpenseForm
				onSubmit={expense => {
					props.addExpense(expense);
					props.history.push('/');
				}}
			/>
		</div>
	);
};

export default connect(
	undefined,
	{ addExpense },
)(AddExpensePage);
