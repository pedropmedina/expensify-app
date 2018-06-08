import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import selectExpenses from '../selectors/expenses';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => {
	return (
		<div>
			<h1>ExpenseList</h1>
			{props.expenses.map(expense => {
				return <ExpenseListItem key={uuid()} {...expense} />;
			})}
		</div>
	);
};

const mapStateToProps = ({ expenses, filters }) => ({
	expenses: selectExpenses(expenses, filters),
	filters,
});

export default connect(mapStateToProps)(ExpenseList);
