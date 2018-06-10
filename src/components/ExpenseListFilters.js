import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
	state = { text: '', calendarFocused: null };

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

	onStartDateChange = startDate => {
		this.props.setStartDate(startDate);
	};

	onEndDateChange = endDate => {
		this.props.setEndDate(endDate);
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
				<select
					onChange={this.onSortByChange}
					value={this.props.filters.sortBy}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DatePicker
					selected={this.props.filters.startDate}
					selectsStart
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onChange={this.onStartDateChange}
					placeholderText={'Pick start date'}
				/>
				<DatePicker
					selected={this.props.filters.endDate}
					selectsEnd
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onChange={this.onEndDateChange}
					placeholderText={'Pick end date'}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ filters }) => ({
	filters,
});

export default connect(
	mapStateToProps,
	{ setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate },
)(ExpenseListFilters);
