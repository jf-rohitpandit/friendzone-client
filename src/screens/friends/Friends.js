import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Friends.module.css';
import { getFriend } from '../../actions/friendAction';
import { Fragment } from 'react';
import Spinner from '../../components/UI/spinner/Spinner';

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
		// eslint-disable-next-line
	}, []);

	if (mounted === false) {
		if (props.token === null) {
			history.push('/login');
			return null;
		}
	}

	const openChat = (id) => {
		history.push(`/chat/${id}`);
		return null;
	};

	return (
		<Fragment>
			{props.loadingFriend && <Spinner />}
			<div className='container'>
				<h2>My Friends</h2>
				<hr />
				<div className=''>
					<ul className='list-group'>
						{props.friendList &&
							props.friendList.map((friend) => (
								<li
									className='list-group-item'
									key={friend.id}
									onClick={() => openChat(friend.id)}>
									<div className='d-flex flex-row'>
										{friend.photo != null ? (
											<img
												src={`data:image/jpg;base64,${Buffer.from(
													friend.photo.data
												).toString('base64')}`}
												className={classes.avtar}
												alt='avtar'
											/>
										) : (
											<i className='fas fa-user fa-2x'></i>
										)}

										<h6 className='align-self-center pl-2'>{friend.name}</h6>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
		</Fragment>
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
