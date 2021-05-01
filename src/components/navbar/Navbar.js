import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';
import PropTypes from 'prop-types';
import { deleteToken } from '../../localStorage';

const Navbar = (props) => {
	const history = useHistory();

	const logoutHandler = (e) => {
		e.preventDefault();

		props.logoutUser();
		deleteToken();
		console.log('logout');

		history.push('/login');
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between'>
			<NavLink exact to='/' className='navbar-brand'>
				{/* <img src='' alt='logo' /> */}
				<i className='fas fa-fire fa-2x'></i>
			</NavLink>

			<ul className='navbar-nav'>
				<li className='nav-item'>
					<NavLink exact to='/' className='nav-link'>
						Home
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink exact to='/friends' className='nav-link'>
						Friends
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink exact to='/profile' className='nav-link'>
						My Profile
					</NavLink>
				</li>
			</ul>

			<form className='' onSubmit={logoutHandler}>
				<button className='btn btn-secondary' disabled={props.token === null}>
					Logout
				</button>
			</form>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
