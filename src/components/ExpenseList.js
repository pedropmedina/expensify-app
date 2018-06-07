import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import getVisibleExpenses from '../helpers/getVisibleExpenses';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => {
	console.log(props.expenses, props.filters);
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
	expenses: getVisibleExpenses(expenses, filters),
	filters,
});

export default connect(mapStateToProps)(ExpenseList);
