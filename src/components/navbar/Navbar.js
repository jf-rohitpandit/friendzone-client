import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userAction';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	const history = useHistory();

	const logoutHandler = (e) => {
		e.preventDefault();

		props.logoutUser();
		console.log('logout');

		history.push('/login');
	};

	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between'>
			<NavLink exact to='/' className='navbar-brand'>
				{/* <img src='' alt='logo' /> */}
				<i class='fas fa-fire fa-2x'></i>
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
				<button className='btn btn-secondary'>Logout</button>
			</form>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	logoutUser: state.user.logoutUser,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
