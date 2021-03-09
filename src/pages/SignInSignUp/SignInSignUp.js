import React from 'react';
import SignIn from '../../components/SignIn/SignIn.js';
import SignUp from '../../components/SignUp/SignUp.js';
import './SignInSignUp.scss';

const SignInSignUp = () => {
	return(
		<div className="signinsignup">
			<SignIn />
			<SignUp />
		</div>
	);
}

export default SignInSignUp;