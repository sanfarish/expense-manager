const config = (token) => {
	return { headers: { Authorization: `Bearer ${token}` } };
};

const hostTarget = 'https://expensemanager.farishasan.web.id/api/v1';

export { config, hostTarget };