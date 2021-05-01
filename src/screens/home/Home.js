import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './Home.module.css';
import { loadUser } from '../../actions/userAction';
import { addFriend } from '../../actions/friendAction';

const Home = (props) => {
	const history = useHistory();
	const [id, setId] = useState('');
	const [mounted, setMounted] = useState(false);
	const [name, setName] = useState('');
	const [image, setImage] = useState(null);
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
		if (props.userInfo && props.token) {
			setDataIntoState(props.userInfo);
		}
	}, [change, props.userInfo]);

	if (mounted === false) {
		if (props.token) {
			props.loadUser();
		}
		if (props.token === null) {
			history.push('/login');
			return null;
		}
	}

	const acceptHandler = () => {
		console.log('accepted');
		props.addFriend(id);
		console.log('.accep', props.loadUser());
		setChange((state) => !state);
	};

	const rejectHandler = () => {
		console.log('rejected');
		console.log('.accep', props.loadUser());
		setChange((state) => !state);
	};

	const setDataIntoState = (userInfo) => {
		console.log(userInfo);
		const { name, image, country, age, aboutMe, gender, id } = userInfo;

		console.log(name, image, country, age, aboutMe, gender);

		console.log(image);
		setName(name);
		setId(id);
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
						<h6 className='text-white'>{` ${country}`}</h6>
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
	addFriend: (friendId) => dispatch(addFriend(friendId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
