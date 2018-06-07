export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_END_DATE = 'SET_END_DATE';

// sortBy: date or amount
const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action) {
		case SET_TEXT_FILTER:
			return { ...state, text: action.text };
		case SORT_BY_AMOUNT:
			return { ...state, sortBy: 'amount' };
		case SORT_BY_DATE:
			return { ...state, sortBy: 'date' };
		case SET_START_DATE:
			return { ...state, startDate: action.startDate };
		case SET_END_DATE:
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};
