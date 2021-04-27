import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../../actions/authAction';

const Signup = (props) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [mounted, setMounted] = useState(false);

	//protected route
	useEffect(() => {
		setMounted(true);
		console.log('protected route');
		console.log('In the useEffect of signup route');
		if (props.token) {
			history.push('/');
			return;
		}
	}, [props.token]);

	if (mounted === false) {
		if (props.token !== null) {
			history.push('/');
			return;
		}
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Passwords did not match');
			return;
		}

		props.registerUser(email, password);
	};

	return (
		<div className='container p-4'>
			<ToastContainer />
			<h1>Signup</h1>
			<hr />
			<form className='form-group w-50 m-auto p-4' onSubmit={onSubmitHandler}>
				<input
					className='form-control'
					type='email'
					placeholder='Enter your email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<br />
				<input
					className='form-control'
					type='password'
					placeholder='Enter your password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					minLength={6}
				/>
				<br />
				<input
					className='form-control'
					type='password'
					placeholder='confirm your passowrd'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
					minLength={6}
				/>
				<br />
				<button className='btn btn-primary' type='submit'>
					Submit
				</button>
				<p className='m-2'>
					Already Registered?{' '}
					<Link to='/login'>
						<b>Login</b>
					</Link>{' '}
					Here
				</p>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
	registerUser: (email, password) => dispatch(registerUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
