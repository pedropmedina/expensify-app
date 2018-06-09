import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id,
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1',
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const expense = {
		id: '55',
		description: 'Rent',
		amount: 1450,
		note: '',
		createdAt: 20000,
	};

	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
	const description = 'bike';
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		update: {
			description,
		},
	};

	const state = expensesReducer(expenses, action);

	expect(state[1].description).toBe('bike');
});

test('should not edit expense if expense not found', () => {
	const description = 'bike';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		update: {
			description,
		},
	};

	const state = expensesReducer(expenses, action);

	expect(state).toEqual(expenses);
});
