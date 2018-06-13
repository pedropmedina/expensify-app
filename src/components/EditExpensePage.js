import React from 'react';
import { connect } from 'react-redux';

import { editExpense, startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = props => {
	console.log(props);
	return (
		<div>
			<ExpenseForm
				{...props.expense}
				onSubmit={expense => {
					props.editExpense(props.match.params.id, expense);
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.startRemoveExpense({ id: props.match.params.id });
					props.history.push('/');
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
	{ editExpense, startRemoveExpense },
)(EditExpensePage);
