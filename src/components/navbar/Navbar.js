import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between'>
			<NavLink exact to='/' className='navbar-brand'>
				<img src='' alt='logo' />
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

			<form className=''>
				<button className='btn btn-secondary'>Logout</button>
			</form>
		</nav>
	);
};

export default Navbar;
