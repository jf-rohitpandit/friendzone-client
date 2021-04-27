import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import girl2 from '../home/girl4.jpg';
import classes from './Friends.module.css';

const Friends = (props) => {
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
			<h2>My Friends</h2>
			<hr />
			<div className=''>
				<ul className='list-group'>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	userInfo: state.auth.userInfo,
	error: state.auth.error,
});

export default connect(mapStateToProps)(Friends);
