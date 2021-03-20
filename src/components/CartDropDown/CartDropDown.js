import React from 'react';
import CustomButton from '../CustomButton/CustomButton.js';
import CartItem from '../CartItem/CartItem.js';
import './CartDropDown.scss';

import {connect} from 'react-redux';

const CartDropDown = ({cartItems}) => {
	console.log(cartItems)
	return(
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.map(cartItem => 
						<CartItem key={cartItem.id} item={cartItem} />
					)
				}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
}

const mapStateToProps = ({cart: {cartItems}}) => ({
	cartItems
})

export default connect(mapStateToProps)(CartDropDown);