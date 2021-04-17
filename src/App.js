import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
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

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/profile'>
							<Profile />
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
		</Provider>
	);
}

export default App;
