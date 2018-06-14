import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from '../actions/filters';

// styles
const Group = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 80rem;
	margin: 3rem auto;

	> * {
		margin-right: 2rem;
		flex: 1 0 20rem;
		height: 5rem;

		&:nth-child(1) {
			border: 0.1rem solid #eee;
			flex: 2 0 20rem;

			> input {
				width: 100%;
				height: 100%;
				border: none;
				text-indent: 1rem;
				border-bottom: 0.2rem solid transparent;
				outline: none;
				font-size: 1.6rem;

				&:focus {
					border-bottom: 0.2rem solid orange;
				}
			}
		}

		&:nth-child(2) {
			flex: 1 0 10rem;
			border: 0.1rem solid #eee;

			> select {
				border: none;
				height: 100%;
				width: 100%;
				border-bottom: 0.2rem solid transparent;
				outline: none;
				font-size: 1.6rem;
			}
		}

		&:nth-child(3) {
			flex: 3 0 30rem;
			display: flex;
			border: 0.1rem solid #eee;

			> * {
				flex: 1;
			}
		}
	}
`;

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
				<Group>
					<div>
						<input
							type="text"
							placeholder="filter by text"
							value={this.state.text}
							onChange={this.onTextChange}
						/>
					</div>
					<div>
						<select
							onChange={this.onSortByChange}
							value={this.props.filters.sortBy}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div>
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
				</Group>
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
