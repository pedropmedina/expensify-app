import moment from 'moment';

const expenses = [
	{
		id: '1',
		description: 'Rent',
		note: '',
		amount: 1.95,
		createdAt: 0,
	},
	{
		id: '2',
		description: 'Car',
		note: '',
		amount: 212.87,
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf(),
	},
	{
		id: '3',
		description: 'Groceries',
		note: '',
		amount: 1,
		createdAt: moment(0)
			.add(4, 'days')
			.valueOf(),
	},
];

export default expenses;
