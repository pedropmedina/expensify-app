import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpenses from '../helpers/getVisibleExpenses';
import { addExpense, editExpense, removeExpense } from '../actions/expenses';
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate,
} from '../actions/filters';

class ExpenseDashboard extends React.Component {
	render() {
		console.log(this.props.expenses, this.props.filters);
		return <div>hello there!!!!!</div>;
	}
}

const mapStateToProps = ({ expenses, filters }) => ({
	expenses: getVisibleExpenses(expenses, filters),
	filters,
});

export default connect(
	mapStateToProps,
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
