import React from 'react';

import CustomButton from '../CustomButton/CustomButton.js';
import CartItem from '../CartItem/CartItem.js';

import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import {selectCartItems} from '../../redux/cart/cart.selectors.js';

import {withRouter} from 'react-router-dom';
import './CartDropDown.scss';

import {connect} from 'react-redux';

const CartDropDown = ({cartItems, history, dispatch}) => {
	console.log('hi');
	return(
		<div className="cart-dropdown">
			<div className="cart-items">
				{
					cartItems.length ?
					cartItems.map(cartItem => 
						<CartItem key={cartItem.id} item={cartItem} />
					)
					:
					(<span className="empty-message">Your cart is empty</span>)
				}
			</div>
			<CustomButton onClick={() => {
				history.push('/checkout')
				dispatch(toggleCartHidden())
			}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
}

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));