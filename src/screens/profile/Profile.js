import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateProfile } from '../../actions/profileAction';
import girl from '../home/girl1.jpg';
import classes from './Profile.module.css';

const Profile = (props) => {
	const history = useHistory();

	const [avtar, setAvtar] = useState(null);
	const [mounted, setMounted] = useState(false);
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [dob, setDob] = useState(null);
	const [country, setCountry] = useState('');
	const [aboutMe, setaboutMe] = useState('');

	//protected route
	useEffect(() => {
		setMounted(true);
	}, [props.token]);

	useEffect(() => {
		showImage(avtar);
	}, [avtar]);

	if (mounted === false) {
		if (props.token === null) {
			history.push('/login');
			return null;
		}
	}

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log('save clicked');

		const userInfo = {
			name,
			avtar,
			country,
			aboutMe,
			gender,
			dob,
		};

		props.updateProfile(userInfo);
		console.log('after save');
	};

	const showImage = (photoFile) => {
		if (photoFile === null) return;
		const img = document.getElementsByTagName('img')[0];
		img.src = URL.createObjectURL(photoFile);
		img.onload = () => {
			URL.revokeObjectURL(img.src);
		};
	};

	return (
		<div className='container'>
			<h2>My Profile</h2>
			<hr />
			<div className=''>
				<form onSubmit={onSubmitHandler} className='form-group row'>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						Full Name:
					</label>
					<div className='col-sm-10'>
						<input
							type='text'
							className='form-control-plaintext pl-1 pr-1'
							value={name}
							placeholder={name.length > 0 ? '' : 'Enter Your name'}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						Gender:
					</label>
					<div className='col-sm-10'>
						<input
							type='text'
							className='form-control-plaintext pl-1 pr-1'
							value={gender}
							placeholder={gender.length > 0 ? '' : 'Enter Your Gender'}
							onChange={(e) => setGender(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						DoB:
					</label>
					<div className='col-sm-10'>
						<input
							type='date'
							className='form-control-plaintext pl-1 pr-1'
							value={dob}
							onChange={(e) => setDob(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						Country:
					</label>
					<div className='col-sm-10'>
						<input
							type='text'
							className='form-control-plaintext pl-1 pr-1'
							value={country}
							placeholder={country.length > 0 ? '' : 'Enter Your country'}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						About Me:
					</label>
					<div className='col-sm-10'>
						<textarea
							rows='5'
							className='form-control-plaintext pl-1 pr-1'
							value={aboutMe}
							placeholder={aboutMe.length > 0 ? '' : 'Write about yourself....'}
							onChange={(e) => setaboutMe(e.target.value)}
						/>
					</div>
					<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
						Avtar:
					</label>
					<div className='col-sm-10 d-flex align-items-center'>
						{avtar ? (
							<img src={avtar} alt='avtar' className={classes.avtar} />
						) : (
							<span>No uploaded photo</span>
						)}
						<input
							type='file'
							className='form-control-file pl-1 pr-1'
							onChange={(e) => {
								setAvtar(e.target.files[0]);
							}}
						/>
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

const mapDispatchToProps = (dispatch) => ({
	updateProfile: (userInfo) => dispatch(updateProfile(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
