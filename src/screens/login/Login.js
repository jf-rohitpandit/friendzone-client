import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../../actions/authAction';

const Login = (props) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (props.userInfo && props.userInfo.token) {
			console.log('should redirect');
			history.push('/');
		}
	}, [props.userInfo]);

	if (mounted === false) {
		if (props.userInfo !== null) {
			history.push('/');
			return;
		}
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// console.log('login  submit');
		props.loginUser(email, password);
		console.log(props.error);
		console.log('lo');

		if (props.userInfo && props.userInfo.token) {
			console.log(props.error);
			console.log('should redirect');
			history.push('/');
		}

		toast.error(props.error);
	};

	return (
		<div className='container p-4'>
			<ToastContainer />
			<h1>Login</h1>
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
				<button className='btn btn-primary' type='submit'>
					Submit
				</button>
				<p className='m-2'>
					New Here?{' '}
					<Link to='/signup'>
						<b>Register</b>
					</Link>{' '}
					Here
				</p>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	userInfo: state.auth.userInfo,
	error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
