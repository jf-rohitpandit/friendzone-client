import React, { useEffect, useState } from 'react';
import faker from 'faker';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import gilr1 from './girl1.jpg';
import classes from './Home.module.css';
import { loadUser } from '../../actions/userAction';

const girlImage = faker.image.people();

const Home = (props) => {
	const history = useHistory();
	const [mounted, setMounted] = useState(false);

	//protected route
	useEffect(() => {
		setMounted(true);
	}, [props.token]);

	if (mounted === false) {
		console.log('hii');
		if (props.token === null) {
			console.log('login');
			history.push('/login');
			return null;
		}
	}

	const acceptHandler = () => {
		console.log('accepted');
		console.log(props.loadUser());
	};

	const rejectHandler = () => {
		console.log('rejected');
	};

	return (
		<div className='container'>
			<div className='d-flex flex-row  rounded text-white bg-primary m-4'>
				<img src={girlImage} alt='' className={classes.avtar} />
				<div className='d-flex flex-column justify-content-center p-3'>
					<div className=''>
						<h2 className='text-white'>
							{`${faker.name.firstName()} ${faker.name.lastName()}`}
						</h2>
						<h5 className='text-white'>
							{Math.floor(Math.random() * 20) + 15}
						</h5>
						<h5 className='text-white'>{faker.name.gender()}</h5>
						<h6 className='text-white'>
							{`${faker.address.state()}, ${faker.address.country()}`}
						</h6>
						<p>{faker.lorem.lines()}</p>
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
	userUserInfo: state.user.userInfo,
	userError: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
	loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
