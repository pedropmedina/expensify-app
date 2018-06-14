import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

import ExpenseForm from './ExpenseForm';

// styles
const HeaderTitle = styled.div`
	background-color: #f7f7f7;

	> div {
		max-width: 80rem;
		margin: 0 auto;
		padding: 3rem;
		margin-bottom: 3rem;

		> h2 {
			font-size: 3rem;
			font-weight: 300;
		}
	}
	& + div {
		max-width: 80rem;
		margin: 0 auto;
	}
`;

const RemoveBtn = styled.button`
	color: #fefefe;
	background-color: #a32818;
	border: none;
	font-size: 1.6rem;
	padding: 1.5rem 2rem;
	margin-left: 1rem;
	width: 38rem;
`;

const EditExpensePage = props => {
	return (
		<div>
			<HeaderTitle>
				<div>
					<h2>Edit Expense</h2>
				</div>
			</HeaderTitle>
			<div>
				<ExpenseForm
					{...props.expense}
					onSubmit={expense => {
						props.startEditExpense(props.match.params.id, expense);
						props.history.push('/dashboard');
					}}
				/>
				<RemoveBtn
					onClick={() => {
						props.startRemoveExpense({ id: props.match.params.id });
						props.history.push('/dashboard');
					}}
				>
					remove expense
				</RemoveBtn>
			</div>
		</div>
	);
};

const mapStateToProps = ({ expenses }, props) => ({
	expense: expenses.find(({ id }) => id === props.match.params.id),
});

export default connect(
	mapStateToProps,
	{ startEditExpense, startRemoveExpense },
)(EditExpensePage);
