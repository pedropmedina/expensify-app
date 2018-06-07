export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
	switch (action) {
		case ADD_EXPENSE:
			return [...state, action.expense];
		case EDIT_EXPENSE:
			return state.map(expense => {
				if (expense.id === action.id) {
					return { ...expense, ...action.updates };
				} else {
					return expense;
				}
			});
		case REMOVE_EXPENSE:
			return state.filter(({ id }) => id !== action.id);
		default:
			return state;
	}
};

export default expenseReducer;
