import React from 'react';
import { auth } from '../../firebase/firebase.utils.js';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors.js';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon.js';
import CartDropDown from '../CartDropDown/CartDropDown.js';
import './Header.scss';

const Header = ({currentUser, hidden}) => {
	return(
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options-container">
				<Link className="option" to="/shop">SHOP</Link>
				<Link className="option" to="/shop">CONTACT</Link>
				{
					currentUser?
					<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
					:
					<Link className='option' to='/signin'>SIGN IN</Link>
				}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);