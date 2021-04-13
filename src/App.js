import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import Chat from './screens/chat/Chat';
import Friends from './screens/friends/Friends';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import PageNotFound from './screens/pageNotFound/PageNotFound';

import './bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/chat'>
						<Chat />
					</Route>
					<Route exact path='/friends'>
						<Friends />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route path='/*'>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
