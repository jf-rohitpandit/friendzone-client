import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className='container p-4'>
			<h1>Signup</h1>
			<hr />
			<form className='form-group w-50 m-auto p-4' onSubmit={onSubmitHandler}>
				<input
					className='form-control'
					type='text'
					placeholder='Enter your email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					className='form-control'
					type='password'
					placeholder='Enter your password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input
					className='form-control'
					type='password'
					placeholder='confirm your passowrd'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<br />
				<button className='btn btn-success' type='submit'>
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

export default Signup;
