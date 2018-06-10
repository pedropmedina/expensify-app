import React from 'react';

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

export default ExpenseDashboard;
