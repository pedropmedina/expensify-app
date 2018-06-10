import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';

import expenses from '../fixtures/expenses';

test('should render ExpenseForm correclty', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should redner error for invaldid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const value = 'New description';
	const name = 'description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(0)
		.simulate('change', { target: { value, name } });
	expect(wrapper.state().fields[name]).toBe(value);
});

test('should set note on textarea change', () => {
	const value = 'New note value';
	const name = 'note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', { target: { name, value } });
	expect(wrapper.state().fields[name]).toBe(value);
});

test('should set amount id valid input', () => {
	const name = 'amount';
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', { target: { name, value } });
	expect(wrapper.state().fields[name]).toBe(value);
});

test('should not set amount if invalid input', () => {
	const name = 'amount';
	const value = '12.122';
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find('input')
		.at(1)
		.simulate('change', { target: { name, value } });
	expect(wrapper.state().fields[name]).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
	const { description, amount, note, createdAt } = expenses[0];
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm {...expenses[0]} onSubmit={onSubmitSpy} />,
	);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description,
		amount,
		note,
		createdAt,
	});
});
