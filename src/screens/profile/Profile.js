import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import girl from '../home/girl1.jpg';
import classes from './Profile.module.css';

const Profile = (props) => {
	const history = useHistory();

	//protected route
	useEffect(() => {
		console.log('protected route');
		if (props.userInfo === null) {
			history.push('/login');
			return;
		}
	}, [props.userInfo]);

	return (
		<div className='container'>
			<h2>My Profile</h2>
			<hr />
			<div className=''>
				<form action='' className='form-group row'>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Full Name:
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control-plaintext pl-1 pr-1'
							value='Test Name'
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Gender:
					</label>
					<div className='col-sm-10'>
						<select
							class='form-control-plaintext pl-1 pr-1'
							id='exampleSelect1'>
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
							value='Delhi'
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						Country:
					</label>
					<div class='col-sm-10'>
						<input
							type='text'
							class='form-control-plaintext pl-1 pr-1'
							value='India'
						/>
					</div>
					<label htmlFor='staticEmail' class='col-sm-2 col-form-label'>
						About Me:
					</label>
					<div class='col-sm-10'>
						<textarea
							rows='5'
							class='form-control-plaintext pl-1 pr-1'
							value='loremloremlorem lorem lorem lorem lorem lorem 
              lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              lorem lorem  lorem lorem lorem lorem lorem lorem lorem
               lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                 lorem lorme lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorme 
                lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorme lorme lorme lorem lorem lorem lorem lorem 
                lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                lorem lorem lorem lorem lorem lorem lorem lorem lorem l
                lorem lorem lorem lorem lorem lorem lorem lorem lorem
                '
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
	loading: state.user.loading,
	userInfo: state.user.userInfo,
	error: state.user.error,
});

export default connect(mapStateToProps)(Profile);
