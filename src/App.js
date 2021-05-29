import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Chat from './screens/chat/Chat';
import Friends from './screens/friends/Friends';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import Profile from './screens/profile/Profile';
import PageNotFound from './screens/pageNotFound/PageNotFound';

import './bootstrap.min.css';
import './App.css';

function App(props) {
	//setting the header for authentication as token
	axios.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;

	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<ProtectedRoute exact path='/' component={Home} />
					<ProtectedRoute exact path='/profile' component={Profile} />
					<ProtectedRoute exact path='/chat/:id' component={Chat} />
					<ProtectedRoute exact path='/friends' component={Friends} />
					<ProtectedRoute exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route path='/*' component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

const mapStateToProps = (state) => ({
	token: state.auth.token,
});

export default connect(mapStateToProps)(App);
