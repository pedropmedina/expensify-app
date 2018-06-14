import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

// styles
const Summary = styled.div`
	background-color: #f7f7f7;

	> div {
		max-width: 80rem;
		margin: 0 auto;
		padding: 3rem 0;

		h2 {
			font-size: 3rem;
			font-weight: 300;

			> span {
				font-weight: 500;
			}
		}

		> a {
			text-decoration: none;
			padding: 2rem 3rem;
			font-size: 1.6rem;
			color: #fefefe;
			background-color: #275db2;
			display: inline-block;
			margin-top: 3rem;
		}
	}
`;

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
	return (
		<Summary>
			<div>
				<h2>
					Viewing <span>{expenseCount}</span> {expenseWord} totalling{' '}
					<span>{formattedExpensesTotal}</span>.
				</h2>
				<Link to="/create">Add Expense</Link>
			</div>
		</Summary>
	);
};

const mapStateToProps = ({ expenses, filters }) => {
	const visibleExpenses = selectExpenses(expenses, filters);

	return {
		expenseCount: visibleExpenses.length,
		expensesTotal: selectExpensesTotal(visibleExpenses),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
