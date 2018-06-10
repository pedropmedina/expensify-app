import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import uuidv4 from 'uuid/v4';

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

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = calendarFocused => {
		this.setState({ calendarFocused });
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
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId={uuidv4()}
					endDate={this.props.filters.endDate}
					endDateId={uuidv4()}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={() => false}
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
