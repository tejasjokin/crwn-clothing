import React from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.js';
import StripeButton from '../../components/StripeButton/StripeButton.js';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import {selectCartTotal} from '../../redux/cart/cart.selectors.js'

import './Checkout.scss';

const Checkout = ({cartItems, total}) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map((cartItem, index) => {
					return(
						<CheckoutItem cartItem={cartItem} key={cartItem.id}/>
					)
				})
			}
			<div className="total">
				<span>TOTAL: ${total}</span>	
			</div>
			<div className="test-warning">
				*Please use the following test credit card for payment*
				<br/>
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</div>
			<div style={{margin: '5px'}}>
				<StripeButton price={total} />
			</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);