import React from 'react';

class ExpenseForm extends React.Component {
	state = { fields: { description: '', amount: '', note: '' } };

	onFieldChange = event => {
		const name = event.target.name;
		const val = event.target.value;
		const fields = this.state.fields;

		if (name === 'amount') {
			if (val.match(/^\d*(\.\d{0,2})?$/)) {
				fields[name] = val;
			}
		} else fields[name] = val;

		this.setState({ fields });
	};

	render() {
		const { description, amount, note } = this.state.fields;
		return (
			<form>
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
				<textarea
					name="note"
					value={note}
					placeholder="Add a note for  the expense"
					onChange={this.onFieldChange}
				/>
				<button>add expense</button>
			</form>
		);
	}
}

export default ExpenseForm;
