import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import girl2 from '../home/girl4.jpg';
import classes from './Friends.module.css';

const Friends = (props) => {
	const history = useHistory();

	const [mounted, setMounted] = useState(false);

	//protected route
	useEffect(() => {
		setMounted(true);
	}, [props.token]);

	if (mounted === false) {
		if (props.token === null) {
			history.push('/login');
			return null;
		}
	}

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
	token: state.auth.token,
	error: state.auth.error,
});

export default connect(mapStateToProps)(Friends);
