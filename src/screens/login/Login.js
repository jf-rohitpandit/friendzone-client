import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../../actions/authAction';
import { Fragment } from 'react';
import Spinner from '../../components/UI/spinner/Spinner';

const Login = (props) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		console.log(props.token);
		if (props.token) {
			console.log('should redirect');
			history.push('/');
		}
		// eslint-disable-next-line
	}, [props.token]);

	//for displaying error message in the ui
	useEffect(() => {
		toast.error(props.error);
	}, [props.error]);

	if (mounted === false) {
		if (props.token !== null) {
			history.push('/');
			return null;
		}
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();

		// console.log('login  submit');
		props.loginUser(email, password);
		console.log('login.js', props.error);
		console.log('lo');
	};

	return (
		<Fragment>
			{props.loading && <Spinner />}
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
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
