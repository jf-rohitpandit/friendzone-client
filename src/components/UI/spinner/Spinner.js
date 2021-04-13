import React from 'react';
import loading from './loading.gif';
import classes from './Spinner.module.css';

const Spinner = () => {
	return (
		<div className={classes.looks}>
			<img
				src={loading}
				alt='Loading...'
				className={`img-fluid ${classes.spinner}`}
			/>
		</div>
	);
};

export default Spinner;
