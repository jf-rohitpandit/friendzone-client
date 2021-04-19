import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = (props) => {
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
		<div className={`container d-flex flex-column  ${classes.looks} `}>
			<h1>404!</h1>
			<h4>Page not found</h4>
			<p>
				return back to <Link to='/'>Home</Link>
			</p>
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: state.user.loading,
	userInfo: state.user.userInfo,
	error: state.user.error,
});

export default connect(mapStateToProps)(PageNotFound);
