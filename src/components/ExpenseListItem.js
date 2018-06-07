import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, removeExpense }) => (
	<div>
		<span>
			{description} >>>>> {amount}
		</span>
		<button onClick={() => removeExpense({ id })}>Remove</button>
	</div>
);

export default connect(
	undefined,
	{ removeExpense },
)(ExpenseListItem);
