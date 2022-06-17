const stripe = require('stripe')('sk_test_...');

(async () => {
	const customer = await stripe.customers.create({
		email: 'customer@example.com',
	});

	console.log(customer.id);
})();
