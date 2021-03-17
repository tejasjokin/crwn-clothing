import React from 'react';
import './CartIcon.scss';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({toggleCartHidden}) => {
	return(
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count" >1</span>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);