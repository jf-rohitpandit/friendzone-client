import React from 'react';
import girl2 from '../home/girl4.jpg';
import classes from './Friends.module.css';

const Friends = () => {
	return (
		<div className='container'>
			<h2>My Friends</h2>
			<hr />
			<div className=''>
				<ul className='list-group'>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
					<li className='list-group-item'>
						<div className='d-flex flex-row'>
							<img src={girl2} alt='' className={classes.avtar} />
							<h6 className='align-self-center pl-2'>Full Name</h6>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Friends;
