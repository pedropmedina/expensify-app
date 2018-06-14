import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';

// styles
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	> * {
		flex: 1;
		margin: 1rem;

		&:nth-child(1) {
			display: flex;
			flex-wrap: wrap;
			height: 4rem;

			> * {
				flex: 1 0 100%;
				margin-bottom: 1rem;
				outline: none;
				border: 0.1rem solid #eee;
				height: 5rem;
			}

			> *:not(:nth-child(3)) {
				text-indent: 1rem;
				font-size: 1.6rem;
			}

			> *:not(:nth-child(4)) {
				&:focus {
					border-bottom: 0.2rem solid orange;
				}
			}

			> *:nth-child(4) {
				color: #fefefe;
				background-color: #275db2;
				text-indent: unset;
			}
		}

		&:nth-child(2) {
			height: 23rem;

			> textarea {
				height: 100%;
				width: 100%;
				border: 0.1rem solid #eee;
				outline: none;
				text-indent: 1rem;
				padding: 1rem;
				font-size: 1.6rem;
				resize: vertical;

				&:focus {
					border-bottom: 0.2rem solid orange;
				}
			}
		}
	}
`;

const Error = styled.p`
	padding: 1rem;
	font-size: 1.6rem;
	background-color: #c43131;
	color: #fff;
	width: 50rem;
	margin: 0 auto;
`;

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
				{this.state.error && <Error>{this.state.error}</Error>}
				<Form onSubmit={this.onSubmit}>
					<div>
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
							placeholderText={'Select date for expense'}
							isClearable={true}
							fixedHeight
						/>
						<button>add expense</button>
					</div>
					<div>
						<textarea
							name="note"
							value={note}
							placeholder="Add a note for the expense (optional)"
							onChange={this.onFieldChange}
						/>
					</div>
				</Form>
			</div>
		);
	}
}

export default ExpenseForm;
