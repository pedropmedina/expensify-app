export default expenses => {
	if (expenses.length === 0) {
		return 0;
	} else {
		return expenses.reduce((acc, { amount }) => acc + amount, 0);
	}
};
