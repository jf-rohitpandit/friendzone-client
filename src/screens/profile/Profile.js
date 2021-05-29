import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions/profileAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/UI/spinner/Spinner';
import classes from './Profile.module.css';

const Profile = (props) => {
	const [imgPrev, setImgPrev] = useState('');
	const [avtar, setAvtar] = useState('');
	const [name, setName] = useState('');
	const [gender, setGender] = useState('');
	const [dob, setDob] = useState('');
	const [country, setCountry] = useState('');
	const [aboutMe, setaboutMe] = useState('');

	const showImage = (photoFile) => {
		if (photoFile === '') return;
		const arrayBufferView = new Uint8Array(photoFile.data);
		const img = document.getElementById('avtar');
		img.src = URL.createObjectURL(
			new Blob([arrayBufferView], { type: MimeType })
		);
		img.onload = () => {
			URL.revokeObjectURL(img.src);
		};
	};

	const previewImage = (photoFile) => {
		if (photoFile === '') return;
		const img = document.getElementById('preview');
		img.src = URL.createObjectURL(photoFile);
		img.onload = () => {
			URL.revokeObjectURL(img.src);
		};
	};

	useEffect(() => {
		props.getProfile();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (props.successProfile) {
			if (props.user.name) {
				setName(props.user.name);
			}
			if (props.user.dob) {
				setDob(props.user.dob.split('T')[0]);
			}
			if (props.user.gender) {
				setGender(props.user.gender);
			}
			if (props.user.country) {
				setCountry(props.user.country);
			}
			if (props.user.aboutMe) {
				setaboutMe(props.user.aboutMe);
			}
			if (props.user.avtar) {
				setAvtar(props.user.avtar);
			}
		}
		// eslint-disable-next-line
	}, [props.user]);

	useEffect(() => {
		if (props.updated) {
			toast.success('Profile updated successfully');
		}
	}, [props.updated]);

	useEffect(() => {
		if (imgPrev === '') {
			showImage(avtar.data);
		} else {
			previewImage(imgPrev);
		}
	}, [avtar, imgPrev]);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log('save clicked');

		const userInfo = {
			name,
			avtar: imgPrev,
			country,
			aboutMe,
			gender,
			dob,
		};

		props.updateProfile(userInfo);
		console.log('after save');
	};

	return (
		<Fragment>
			{props.loadingProfile && <Spinner />}
			<div className='container'>
				<ToastContainer />
				<h2>My Profile</h2>
				<hr />
				<div className=''>
					<form
						onSubmit={onSubmitHandler}
						className='form-group row'
						encType='multipart/form-data'>
						<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
							Full Name:
						</label>
						<div className='col-sm-10'>
							<input
								type='text'
								className='form-control-plaintext pl-1 pr-1'
								value={name}
								placeholder={name ? '' : 'Enter Your name'}
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
								placeholder={gender ? '' : 'Enter Your Gender'}
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
								placeholder={country ? '' : 'Enter Your country'}
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
								placeholder={aboutMe ? '' : 'Write about yourself....'}
								onChange={(e) => setaboutMe(e.target.value)}
							/>
						</div>
						<label htmlFor='staticEmail' className='col-sm-2 col-form-label'>
							Avtar:
						</label>
						<div className='col-sm-10 d-flex align-items-center'>
							{imgPrev !== '' ? (
								<img
									src={imgPrev}
									alt='avtar'
									id='preview'
									className={classes.avtar}
								/>
							) : avtar !== '' ? (
								<img
									src={avtar.data}
									alt='avtar'
									id='avtar'
									className={classes.avtar}
								/>
							) : (
								<span>No uploaded photo</span>
							)}
							<input
								type='file'
								className='form-control-file pl-1 pr-1'
								onChange={(e) => {
									setImgPrev(e.target.files[0]);
									previewImage(imgPrev);
								}}
							/>
						</div>
						<button className='btn btn-primary m-auto'>Save changes</button>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
	updated: state.profile.updated,
	loadingProfile: state.profile.loading,
	successProfile: state.profile.success,
	errorProfile: state.profile.error,
	user: state.profile.user,
});

const mapDispatchToProps = (dispatch) => ({
	updateProfile: (userInfo) => dispatch(updateProfile(userInfo)),
	getProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
