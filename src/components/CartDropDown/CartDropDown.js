import React from 'react';
import CustomButton from '../CustomButton/CustomButton.js';
import CartItem from '../CartItem/CartItem.js';
import {selectCartItems} from '../../redux/cart/cart.selectors.js';
import './CartDropDown.scss';

import {connect} from 'react-redux';

const CartDropDown = ({cartItems}) => {
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

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);