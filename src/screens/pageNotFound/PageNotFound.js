import React from 'react';
import classes from './PageNotFound.module.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
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

export default PageNotFound;
