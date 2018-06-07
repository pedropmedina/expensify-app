import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

class ExpenseListFilters extends React.Component {
	state = { text: '' };

	onTextChange = event => {
		const text = event.target.value;
		this.setState({ text });
		this.props.setTextFilter(text);
	};

	onSortByChange = event => {
		const sortBy = event.target.value;
		if (sortBy === 'date') this.props.sortByDate();
		if (sortBy === 'amount') this.props.sortByAmount();
	};

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="filter by text"
					value={this.state.text}
					onChange={this.onTextChange}
				/>
				<select onChange={this.onSortByChange}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
			</div>
		);
	}
}

export default connect(
	undefined,
	{ setTextFilter, sortByAmount, sortByDate },
)(ExpenseListFilters);
