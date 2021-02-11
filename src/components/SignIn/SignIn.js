import React from 'react';
import FormInput from '../FormInput/FormInput.js';
import CustomButton from '../CustomButton/CustomButton.js';
import './SignIn.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const initialState = {
	email: '',
	password: ''
}

class SignIn extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = initialState;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	}

	handleChange = (event) => {
		const {value, name} = event.target;
		this.setState({[name]: value});
	}

	render(){
		return(
			<div className="sign-in">
				<h2 className='title'>I already have an account</h2>
				<span className='title'>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
					label="Email"
					name="email" 
					type="email" 
					value={this.state.email} 
					required 
					handleChange={this.handleChange}
					required
					/>
					<FormInput
					label='Password' 
					name="password" 
					type="password" 
					value={this.state.password} 
					required 
					handleChange={this.handleChange}
					required
					/>
					<div className='buttons'>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;