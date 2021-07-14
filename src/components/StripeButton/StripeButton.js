import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Crown from '../../assets/crown.svg';

const StripeButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51JD2TGSA2mGOLFTQFmb6h3zuGQlg7BPcZGvie4rNJpiiGfKQt6XJQVHpUqQCbq1yVzaBUotp7KoPvVmZdGOwg0P800in7wynpq';

	const onToken = token => {
		console.log(token);
		alert('Payments Successful');
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image={Crown}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeButton;