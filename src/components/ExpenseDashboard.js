import React from 'react';
import { connect } from 'react-redux';

// actions
import { addExpense, editExpense, removeExpense } from '../actions/expenses';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';

// components
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

class ExpenseDashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ExpenseListFilters />
				<ExpenseList />
			</React.Fragment>
		);
	}
}

export default connect(
	undefined,
	{
		addExpense,
		editExpense,
		removeExpense,
		setTextFilter,
		sortByAmount,
		sortByDate,
		setStartDate,
		setEndDate,
	},
)(ExpenseDashboard);
