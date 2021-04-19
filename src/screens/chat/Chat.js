import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Chat.module.css';
import girl from '../home/girl1.jpg';

const Chat = (props) => {
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
			<h2>Chat</h2>
			<hr />
			<div className=' bg-primary p-2'>
				<div className='d-flex align-items-center m-2'>
					<img src={girl} alt='' className={classes.avtar} />
					<h6 className='pl-2 text-white'>Full Name</h6>
				</div>
				<div className={classes.chat}>
					<div className=''>
						<div className={classes.message}>
							This is some message from the girl one so thit is some message
							from the other user This is some extra message content from the
							other user and
						</div>
					</div>
					<div className=''>
						<div className={`${classes.me} ${classes.message}`}>
							This is some message from the girl one so
						</div>
					</div>
					<div className=''>
						<div className={classes.message}>
							This is some message from the girl one so thit is some message
							from the other user This is some extra message content from the
							other user and
						</div>
					</div>
					<div className=''>
						<div className={`${classes.me} ${classes.message}`}>
							This is some message from the girl one so
						</div>
					</div>
					<div className=''>
						<div className={classes.message}>
							This is some message from the girl one so thit is some message
							from the other user This is some extra message content from the
							other user and
						</div>
					</div>
					<div className=''>
						<div className={`${classes.me} ${classes.message}`}>
							This is some message from the girl one so
						</div>
					</div>
					<div className=''>
						<div className={classes.message}>
							This is some message from the girl one so thit is some message
							from the other user This is some extra message content from the
							other user and
						</div>
					</div>
					<div className=''>
						<div className={`${classes.me} ${classes.message}`}>
							This is some message from the girl one so
						</div>
					</div>
				</div>
			</div>
			<form className=' form-group  mt-2 mt-b2 '>
				<div className='d-flex'>
					<input type='text' className='form-control' />
					<button className='btn btn-info'>Send</button>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.user.loading,
	userInfo: state.user.userInfo,
	error: state.user.error,
});

export default connect(mapStateToProps)(Chat);
