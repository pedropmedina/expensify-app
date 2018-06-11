import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

class ExpenseDashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ExpensesSummary />
				<ExpenseListFilters />
				<ExpenseList />
			</React.Fragment>
		);
	}
}

export default ExpenseDashboard;
