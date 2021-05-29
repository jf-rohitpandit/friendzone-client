import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const token = useSelector((state) => state.auth.token);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (token) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
