import React from 'react';
import moment from 'moment';

import DatePicker from 'react-datepicker';

class ExpenseForm extends React.Component {
	state = {
		fields: {
			description: this.props.description ? this.props.description : '',
			amount: this.props.amount ? (this.props.amount / 100).toString() : '',
			note: this.props.note ? this.props.note : '',
			createdAt: this.props.createdAt ? moment(this.props.createdAt) : moment(),
		},
		calendarFocused: false,
		error: '',
	};

	onFieldChange = event => {
		const name = event.target.name;
		const val = event.target.value;
		const fields = this.state.fields;

		if (name === 'amount') {
			if (!val || val.match(/^\d{1,}(\.\d{0,2})?$/)) {
				fields[name] = val;
			}
		} else fields[name] = val;

		this.setState({ fields });
	};

	onDateChange = createdAt => {
		const fields = { ...this.state.fields, createdAt };
		this.setState({ fields });
	};

	onSubmit = event => {
		event.preventDefault();
		const { description, amount, note, createdAt } = this.state.fields;
		if (!description || !amount) {
			const error = 'Please provide description and amount';
			this.setState({ error });
		} else {
			this.setState({ error: '' });
			this.props.onSubmit({
				description,
				amount: parseFloat(amount, 10) * 100,
				note,
				createdAt: createdAt.valueOf(),
			});
		}
	};

	render() {
		const { description, amount, note } = this.state.fields;
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="description"
						value={description}
						placeholder="Description"
						autoFocus
						onChange={this.onFieldChange}
					/>
					<input
						type="text"
						name="amount"
						value={amount}
						placeholder="Amount"
						onChange={this.onFieldChange}
					/>
					<DatePicker
						selected={this.state.fields.createdAt}
						onChange={this.onDateChange}
						todayButton={'Today'}
						placeholderText={'Select date for expense'}
						isClearable={true}
						fixedHeight
					/>
					<textarea
						name="note"
						value={note}
						placeholder="Add a note for the expense (optional)"
						onChange={this.onFieldChange}
					/>
					<button>add expense</button>
				</form>
			</div>
		);
	}
}

export default ExpenseForm;
