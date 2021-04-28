import React, { useEffect, useState } from 'react';
import faker from 'faker';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './Home.module.css';
import { loadUser } from '../../actions/userAction';

const Home = (props) => {
	const history = useHistory();
	const [mounted, setMounted] = useState(false);
	const [name, setName] = useState('');
	const [image, setImage] = useState(null);
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [age, setAge] = useState(0);
	const [aboutMe, setAboutMe] = useState('');
	const [gender, setGender] = useState('');
	const [change, setChange] = useState(1);

	//protected route
	useEffect(() => {
		setMounted(true);
	}, [props.token]);

	useEffect(() => {
		console.log(props.userInfo);
		if (props.userInfo) {
			setDataIntoState(props.userInfo);
		}
	}, [change, props.userInfo]);

	if (mounted === false) {
		props.loadUser();
		if (props.token === null) {
			history.push('/login');
			return null;
		}
	}

	const acceptHandler = () => {
		console.log('accepted');
		console.log('.accep', props.loadUser());
		setChange((state) => !state);
	};

	const rejectHandler = () => {
		console.log('rejected');
	};

	const setDataIntoState = (userInfo) => {
		console.log(userInfo);
		const { name, image, state, country, age, aboutMe, gender } = userInfo;

		console.log(name, image, state, country, age, aboutMe, gender);

		console.log(image);
		setName(name);
		setState(state);
		setCountry(country);
		setImage(image);
		setAboutMe(aboutMe);
		setAge(age);
		setGender(gender);
	};

	return (
		<div className='container'>
			<div className='d-flex flex-row  rounded text-white bg-primary m-4'>
				<img src={image} alt='' className={classes.avtar} />
				<div className='d-flex flex-column justify-content-center p-3'>
					<div className=''>
						<h2 className='text-white'>{name}</h2>
						<h5 className='text-white'>{age}</h5>
						<h5 className='text-white'>{gender}</h5>
						<h6 className='text-white'>{`${state}, ${country}`}</h6>
						<p>{aboutMe}</p>
					</div>
					<div className='d-flex justify-content-around'>
						<button className='btn btn-success' onClick={acceptHandler}>
							Accept
						</button>
						<button className='btn btn-danger' onClick={rejectHandler}>
							Reject
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
	userLoading: state.user.loading,
	userInfo: state.user.userInfo,
	userError: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
	loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
