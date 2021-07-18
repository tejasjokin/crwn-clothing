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


// styled-component
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './Header.styles.jsx';


const Header = ({currentUser, hidden}) => {
	return(
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{
					currentUser?
					<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
					:
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropDown />}
		</HeaderContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);