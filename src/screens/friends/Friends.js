import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import girl2 from '../home/girl4.jpg';
import classes from './Friends.module.css';
import { getFriend } from '../../actions/friendAction';

const Friends = (props) => {
	const history = useHistory();

	const [mounted, setMounted] = useState(false);

	//protected route
	useEffect(() => {
		setMounted(true);
	}, [props.token]);

	useEffect(() => {
		if (!mounted) {
			props.getFriend();
		}
	}, []);

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
					{props.friendList &&
						props.friendList.map((friend) => (
							<li className='list-group-item' key={friend.id}>
								<div className='d-flex flex-row'>
									<img src={girl2} alt='' className={classes.avtar} />
									<h6 className='align-self-center pl-2'>{friend.name}</h6>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	token: state.auth.token,
	error: state.auth.error,
	loadingFriend: state.friend.loading,
	successFriend: state.friend.success,
	errorFriend: state.friend.error,
	friendList: state.friend.friendList.list,
});

const mapDispatchToProps = (dispatch) => ({
	getFriend: () => dispatch(getFriend()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
