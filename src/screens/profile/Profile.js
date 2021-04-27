import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import girl from '../home/girl1.jpg';
import classes from './Profile.module.css';

const Profile = (props) => {
	const history = useHistory();

	const [name, setName] = useState('Full Name');
	const [gender, setGender] = useState('Male');
	const [state, setState] = useState('Delhi');
	const [country, setCountry] = useState('India');
	const [info, setInfo] = useState(
		` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas porro magnam amet nobis eius laboriosam at quisquam? Nulla laudantium aliquid dolor nostrum hic numquam, molestiae vitae? Facere laborum quaerat fuga ducimus dolore laudantium rem, laboriosam nihil error sapiente repudiandae, repellat nam, odit distinctio blanditiis doloremque voluptatum sed totam ipsum reiciendis! `
	);

	//protected route
	useEffect(() => {
		console.log('protected route');
		if (props.token === null) {
			history.push('/login');
			return;
		}
	}, [props.token]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<h2>My Profile</h2>
			<hr />
			<div className=''>
				<form onSubmit={onSubmitHandler} className='form-group row'>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Full Name:
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control-plaintext pl-1 pr-1'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Gender:
					</label>
					<div className='col-sm-10'>
						<select
							class='form-control-plaintext pl-1 pr-1'
							id='exampleSelect1'
							value={gender}
							onChange={(e) => setGender(e.target.value)}>
							<option>Male</option>
							<option>Female</option>
							<option>Other</option>
						</select>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						State:
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control-plaintext pl-1 pr-1'
							value={state}
							onChange={(e) => setState(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Country:
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control-plaintext pl-1 pr-1'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						About Me:
					</label>
					<div class='col-sm-10'>
						<textarea
							rows='5'
							class='form-control-plaintext pl-1 pr-1'
							value={info}
							onChange={(e) => setInfo(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Avtar:
					</label>
					<div class='col-sm-10 d-flex align-items-center'>
						<img src={girl} alt='avtar' className={classes.avtar} />
						<input type='file' class='form-control-file pl-1 pr-1' />
					</div>
					<button className='btn btn-primary m-auto'>Save changes</button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
});

export default connect(mapStateToProps)(Profile);
