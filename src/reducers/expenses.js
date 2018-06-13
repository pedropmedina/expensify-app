export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case ADD_EXPENSE:
			return [...state, action.expense];
		case EDIT_EXPENSE:
			return state.map(expense => {
				if (expense.id === action.id) {
					return { ...expense, ...action.update };
				} else {
					return expense;
				}
			});
		case REMOVE_EXPENSE:
			return state.filter(({ id }) => id !== action.id);
		case 'SET_EXPENSES':
			return action.expenses;
		default:
			return state;
	}
};
