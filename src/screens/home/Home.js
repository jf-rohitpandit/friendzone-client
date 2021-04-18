import React from 'react';
import gilr1 from './girl1.jpg';
import classes from './Home.module.css';

const Home = () => {
	return (
		<div className='container'>
			<div className='d-flex flex-row  rounded text-white bg-primary m-4'>
				<img src={gilr1} alt='' className={classes.avtar} />
				<div className='d-flex flex-column justify-content-center p-3'>
					<div className=''>
						<h2 className='text-white'>firstName LastName</h2>
						<h5 className='text-white'>22 years</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
							odio hic ipsum distinctio error ipsam? Hic adipisci saepe placeat
							ad necessitatibus nihil quasi asperiores vel praesentium expedita
							in quisquam veritatis quo facilis possimus, repellat dolore
							voluptate laborum aut reiciendis sit cumque. Dolore corrupti quas
							repellat odio, corporis dicta recusandae autem? Repellat illum
							laborum hic doloremque quos ipsam rem accusantium consequatu
						</p>
					</div>
					<div className='d-flex justify-content-around'>
						<button className='btn btn-success'>Accept</button>
						<button className='btn btn-danger'>Reject</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
