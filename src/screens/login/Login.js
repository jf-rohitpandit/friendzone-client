import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//protected route
	useEffect(() => {
		console.log('protected route');
		if (props.userInfo !== null) {
			history.push('/');
			return;
		}
	}, [props.userInfo]);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		props.loginUser(email, password);

		if (props.error === null) {
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
	loading: state.user.loading,
	userInfo: state.user.userInfo,
	error: state.user.error,
});

export default connect(mapStateToProps, { loginUser })(Login);
