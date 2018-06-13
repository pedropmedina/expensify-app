import React from 'react';
import { connect } from 'react-redux';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
	return (
		<div>
			<ExpenseForm
				{...props.expense}
				onSubmit={expense => {
					props.startEditExpense(props.match.params.id, expense);
					props.history.push('/dashboard');
				}}
			/>
			<button
				onClick={() => {
					props.startRemoveExpense({ id: props.match.params.id });
					props.history.push('/dashboard');
				}}
			>
				Remove
			</button>
		</div>
	);
};

const mapStateToProps = ({ expenses }, props) => ({
	expense: expenses.find(({ id }) => id === props.match.params.id),
});

export default connect(
	mapStateToProps,
	{ startEditExpense, startRemoveExpense },
)(EditExpensePage);
