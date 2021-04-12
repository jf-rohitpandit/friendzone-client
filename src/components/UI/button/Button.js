import React from 'react';

import classes from './Button.module.css';

const Button = ({ text, style }) => {
	return (
		<button className={classes.looks} style={style}>
			{text}
		</button>
	);
};

export default Button;
